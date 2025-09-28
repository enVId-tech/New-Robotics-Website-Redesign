'use client';

import React, { useState, useEffect } from 'react';
import { useContent } from '@/hooks/useContent';
import { SiteContent } from '@/utils/content';
import styles from './content.module.scss';

interface EditingField {
  section: string;
  path: string;
  value: any;
  type: 'text' | 'textarea' | 'array' | 'object' | 'number' | 'boolean' | 'image';
}

export default function ContentManager() {
  const { content, loading, error, updateContent, addContent, deleteContent } = useContent();
  const [activeSection, setActiveSection] = useState<string>('site');
  const [editingField, setEditingField] = useState<EditingField | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemSection, setNewItemSection] = useState('');
  const [showPageBuilder, setShowPageBuilder] = useState(false);
  const [newPageData, setNewPageData] = useState({
    name: '',
    routePath: '',
    content: '<h2>Welcome to the new page!</h2><p>Add your content here...</p>'
  });

  if (loading) {
    return <div className={styles.loading}>Loading content...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!content) {
    return <div className={styles.error}>No content available</div>;
  }

  const sections = [
    { key: 'site', label: 'Site Settings', icon: '⚙️' },
    { key: 'homepage', label: 'Homepage', icon: '🏠' },
    { key: 'navigation', label: 'Navigation', icon: '🧭' },
    { key: 'about', label: 'About Page', icon: 'ℹ️' },
    { key: 'contact', label: 'Contact Page', icon: '📞' },
    { key: 'teams', label: 'Teams', icon: '🤖' },
    { key: 'pages', label: 'Page Builder', icon: '📄' },
  ];

  const handleEdit = (section: string, path: string, value: any, type: string) => {
    setEditingField({
      section,
      path,
      value: typeof value === 'string' ? value : JSON.stringify(value, null, 2),
      type: type as any
    });
  };

  const handleSave = async () => {
    if (!editingField) return;

    let processedValue = editingField.value;
    
    // Process value based on type
    if (editingField.type === 'number') {
      processedValue = Number(processedValue);
    } else if (editingField.type === 'boolean') {
      processedValue = processedValue === 'true' || processedValue === true;
    } else if (editingField.type === 'array' || editingField.type === 'object') {
      try {
        processedValue = JSON.parse(processedValue);
      } catch (e) {
        alert('Invalid JSON format');
        return;
      }
    }

    const result = await updateContent(editingField.path, processedValue);
    if (result.success) {
      setEditingField(null);
      alert('Content updated successfully!');
    } else {
      alert('Failed to update content: ' + result.error);
    }
  };

  const handleAddNew = async (section: string, type: string) => {
    let newItem;
    
    if (section === 'navigation.items') {
      newItem = {
        name: 'New Page',
        href: '/new-page',
        visible: true,
        order: (content.navigation.items?.length || 0) + 1
      };
    } else if (section === 'homepage.stats.items') {
      newItem = {
        id: String(Date.now()),
        label: 'New Stat',
        value: '0',
        description: 'Description',
        icon: '📊'
      };
    } else if (section.includes('sections')) {
      newItem = {
        id: String(Date.now()),
        title: 'New Section',
        content: 'Content goes here...',
        type: 'text'
      };
    }

    if (newItem) {
      const result = await addContent(section, newItem);
      if (result.success) {
        alert('Item added successfully!');
      } else {
        alert('Failed to add item: ' + result.error);
      }
    }
  };

  const handleDelete = async (section: string, itemId: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const result = await deleteContent(section, itemId);
    if (result.success) {
      alert('Item deleted successfully!');
    } else {
      alert('Failed to delete item: ' + result.error);
    }
  };

  const handleCreatePage = async () => {
    if (!newPageData.name || !newPageData.routePath) {
      alert('Please provide both page name and route path');
      return;
    }

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageName: newPageData.name,
          pageContent: newPageData.content,
          routePath: newPageData.routePath
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert(`Page created successfully! Visit ${result.pagePath}`);
        setShowPageBuilder(false);
        setNewPageData({ name: '', routePath: '', content: '<h2>Welcome to the new page!</h2><p>Add your content here...</p>' });
        // Refresh content to show new page in navigation
        window.location.reload();
      } else {
        alert('Failed to create page: ' + result.error);
      }
    } catch (error) {
      alert('Failed to create page');
    }
  };

  const renderValue = (value: any, section: string, path: string, key: string) => {
    const fullPath = `${section}.${path ? path + '.' : ''}${key}`;
    
    if (typeof value === 'string') {
      const isImage = value.includes('/images/') || value.includes('/logos/') || value.includes('/handmade/');
      const isLongText = value.length > 100;
      
      return (
        <div className={styles.fieldRow}>
          <label className={styles.fieldLabel}>{key}:</label>
          <div className={styles.fieldValue}>
            {isImage && (
              <img src={value} alt={key} className={styles.previewImage} />
            )}
            <span className={isLongText ? styles.longText : ''}>{value}</span>
            <button 
              onClick={() => handleEdit(section, fullPath, value, isLongText ? 'textarea' : 'text')}
              className={styles.editBtn}
            >
              ✏️
            </button>
          </div>
        </div>
      );
    }
    
    if (typeof value === 'number' || typeof value === 'boolean') {
      return (
        <div className={styles.fieldRow}>
          <label className={styles.fieldLabel}>{key}:</label>
          <div className={styles.fieldValue}>
            <span>{String(value)}</span>
            <button 
              onClick={() => handleEdit(section, fullPath, value, typeof value)}
              className={styles.editBtn}
            >
              ✏️
            </button>
          </div>
        </div>
      );
    }
    
    if (Array.isArray(value)) {
      return (
        <div className={styles.arraySection}>
          <div className={styles.arrayHeader}>
            <label className={styles.fieldLabel}>{key} ({value.length} items):</label>
            <button 
              onClick={() => handleAddNew(fullPath, 'array')}
              className={styles.addBtn}
            >
              + Add Item
            </button>
          </div>
          <div className={styles.arrayItems}>
            {value.map((item, index) => (
              <div key={index} className={styles.arrayItem}>
                <div className={styles.arrayItemHeader}>
                  <span>Item {index + 1}</span>
                  {item.id && (
                    <button 
                      onClick={() => handleDelete(fullPath, item.id)}
                      className={styles.deleteBtn}
                    >
                      🗑️
                    </button>
                  )}
                  {item.name && (
                    <button 
                      onClick={() => handleDelete(fullPath, item.name)}
                      className={styles.deleteBtn}
                    >
                      🗑️
                    </button>
                  )}
                </div>
                {renderValue(item, section, `${path ? path + '.' : ''}${key}.${index}`, '')}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (typeof value === 'object' && value !== null) {
      return (
        <div className={styles.objectSection}>
          <label className={styles.sectionLabel}>{key}:</label>
          <div className={styles.objectContent}>
            {Object.entries(value).map(([subKey, subValue]) => (
              <div key={subKey}>
                {renderValue(subValue, section, `${path ? path + '.' : ''}${key}`, subKey)}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return null;
  };

  const filteredContent = searchTerm 
    ? Object.entries(content).filter(([key, value]) => 
        key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        JSON.stringify(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    : Object.entries(content);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Content Manager</h1>
        <p>Edit all website content, text, and settings dynamically</p>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.sectionTabs}>
          {sections.map(section => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`${styles.sectionTab} ${activeSection === section.key ? styles.active : ''}`}
            >
              <span className={styles.sectionIcon}>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.contentArea}>
        {activeSection === 'pages' ? (
          <div className={styles.pageBuilder}>
            <div className={styles.pageBuilderHeader}>
              <h2>Page Builder</h2>
              <button 
                onClick={() => setShowPageBuilder(true)}
                className={styles.addBtn}
              >
                + Create New Page
              </button>
            </div>
            
            <div className={styles.existingPages}>
              <h3>Existing Custom Pages</h3>
              {content?.customPages ? (
                <div className={styles.pagesList}>
                  {Object.entries(content.customPages).map(([path, pageData]: [string, any]) => (
                    <div key={path} className={styles.pageItem}>
                      <div className={styles.pageInfo}>
                        <h4>{pageData.title}</h4>
                        <p>Route: /{path}</p>
                      </div>
                      <div className={styles.pageActions}>
                        <button 
                          onClick={() => window.open(`/${path}`, '_blank')}
                          className={styles.previewBtn}
                        >
                          Preview
                        </button>
                        <button 
                          onClick={() => handleEdit('customPages', `customPages.${path}`, pageData, 'object')}
                          className={styles.editBtn}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No custom pages created yet.</p>
              )}
            </div>
          </div>
        ) : activeSection === 'all' ? (
          <div className={styles.allSections}>
            {filteredContent.map(([sectionKey, sectionValue]) => (
              <div key={sectionKey} className={styles.section}>
                <h2 className={styles.sectionTitle}>{sectionKey}</h2>
                <div className={styles.sectionContent}>
                  {Object.entries(sectionValue as object).map(([key, value]) => (
                    <div key={key}>
                      {renderValue(value, sectionKey, '', key)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {sections.find(s => s.key === activeSection)?.label}
            </h2>
            <div className={styles.sectionContent}>
              {content[activeSection as keyof typeof content] && 
                Object.entries(content[activeSection as keyof typeof content] as object).map(([key, value]) => (
                  <div key={key}>
                    {renderValue(value, activeSection, '', key)}
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingField && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Edit Content</h3>
              <button 
                onClick={() => setEditingField(null)}
                className={styles.closeBtn}
              >
                ×
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.editField}>
                <label>Path: {editingField.path}</label>
                {editingField.type === 'textarea' ? (
                  <textarea
                    value={editingField.value}
                    onChange={(e) => setEditingField({...editingField, value: e.target.value})}
                    className={styles.editTextarea}
                    rows={10}
                  />
                ) : editingField.type === 'array' || editingField.type === 'object' ? (
                  <textarea
                    value={editingField.value}
                    onChange={(e) => setEditingField({...editingField, value: e.target.value})}
                    className={styles.editTextarea}
                    rows={15}
                    placeholder="Enter valid JSON..."
                  />
                ) : (
                  <input
                    type={editingField.type === 'number' ? 'number' : 'text'}
                    value={editingField.value}
                    onChange={(e) => setEditingField({...editingField, value: e.target.value})}
                    className={styles.editInput}
                  />
                )}
              </div>
              
              <div className={styles.modalActions}>
                <button onClick={handleSave} className={styles.saveBtn}>
                  Save Changes
                </button>
                <button 
                  onClick={() => setEditingField(null)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Builder Modal */}
      {showPageBuilder && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Create New Page</h3>
              <button 
                onClick={() => setShowPageBuilder(false)}
                className={styles.closeBtn}
              >
                ×
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.pageForm}>
                <div className={styles.formField}>
                  <label>Page Name:</label>
                  <input
                    type="text"
                    value={newPageData.name}
                    onChange={(e) => setNewPageData({...newPageData, name: e.target.value})}
                    placeholder="e.g., New Team Page"
                    className={styles.editInput}
                  />
                </div>
                
                <div className={styles.formField}>
                  <label>Route Path:</label>
                  <input
                    type="text"
                    value={newPageData.routePath}
                    onChange={(e) => setNewPageData({...newPageData, routePath: e.target.value})}
                    placeholder="e.g., new-team (will become /new-team)"
                    className={styles.editInput}
                  />
                  <small>Only letters, numbers, hyphens, and forward slashes allowed</small>
                </div>
                
                <div className={styles.formField}>
                  <label>Initial Content (HTML):</label>
                  <textarea
                    value={newPageData.content}
                    onChange={(e) => setNewPageData({...newPageData, content: e.target.value})}
                    className={styles.editTextarea}
                    rows={10}
                    placeholder="<h2>Page Title</h2><p>Your content here...</p>"
                  />
                  <small>You can use HTML tags for formatting</small>
                </div>
              </div>
              
              <div className={styles.modalActions}>
                <button onClick={handleCreatePage} className={styles.saveBtn}>
                  Create Page
                </button>
                <button 
                  onClick={() => setShowPageBuilder(false)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}