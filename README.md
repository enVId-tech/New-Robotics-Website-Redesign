# Oxford Academy Robotics Website

A modern, feature-rich website for Oxford Academy Robotics with a comprehensive inline content management system. Built with Next.js 15, TypeScript, and SCSS, this site showcases FRC Team 4079, FTC teams, and VEX programs while providing authenticated users with powerful editing capabilities.

## Overview

This website serves as the digital platform for Oxford Academy Robotics, providing information about competitive robotics programs, team achievements, news updates, and community engagement opportunities. The site features a custom-built CMS that allows authenticated administrators to edit content directly on the page without requiring database access or code deployment.

## Key Features

### Content Management System
- **Inline Editing**: Edit text, images, and styles directly on the page
- **Authentication-Based Access**: Edit Mode only available to authenticated users
- **Real-Time Updates**: Changes are immediately reflected in the UI
- **Style Editor**: Modify colors, fonts, spacing, and other CSS properties
- **Image Management**: Upload and replace images with live preview
- **JSON-Based Storage**: All content stored in `content/site-content.json`
- **Persistent Changes**: Edits are automatically saved and persisted

### Page Sections
- **Homepage**: Hero banner, about brief, statistics, team overview, achievements, and sponsors
- **About Page**: Mission/vision cards, program details, impact statistics, and call-to-action
- **News Section**: Fully editable articles with categories, tags, filtering, and add/delete functionality
- **Team Pages**: Dedicated pages for FRC, FTC, and VEX programs with schedules and details
- **Contact Page**: Contact form and information
- **Sponsors Page**: Recognition and information about team sponsors
- **Admin Portal**: Authentication and content management dashboard

### Design Features
- **Modern Glassmorphism UI**: Backdrop blur effects and translucent elements
- **Gradient Aesthetics**: Dynamic color gradients throughout the interface
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Consistent black and dark gray color scheme
- **Advanced Animations**: Fade-in effects, hover transitions, and smooth interactions
- **Accessibility**: Semantic HTML and ARIA-compliant components

## Technology Stack

### Core Framework
- **Next.js 15.5.4**: React framework with App Router architecture
- **React 19.2.0**: Latest React version with modern hooks and features
- **TypeScript 5.x**: Type-safe development environment

### Styling
- **SCSS Modules**: Component-scoped styling with CSS modules
- **Sass 1.93.2**: Advanced CSS preprocessing with variables and mixins
- **CSS3**: Modern CSS features including Grid, Flexbox, and custom properties

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **Next.js Fast Refresh**: Hot module replacement during development
- **TypeScript Compiler**: Static type checking

## Project Structure

```
├── app/                          # Next.js App Router directory
│   ├── _components/              # Reusable UI components
│   │   ├── aboutbrief/           # Homepage about section
│   │   ├── achievements/         # Achievements showcase
│   │   ├── competitionSchedule/  # Competition calendar
│   │   ├── contactForm/          # Contact form component
│   │   ├── footer/               # Site footer
│   │   ├── navbar/               # Navigation bar
│   │   ├── newsSection/          # News articles display
│   │   │   ├── editableArticle.tsx    # Individual article component
│   │   │   └── newsSection.tsx        # Main news section
│   │   ├── robotGallery/         # Robot image gallery
│   │   ├── slogan/               # Team slogan section
│   │   ├── stats/                # Statistics display
│   │   ├── teamMembers/          # Team member profiles
│   │   ├── teamOverviewSection/  # Team overview cards
│   │   ├── teamsOverview/        # Multiple teams overview
│   │   ├── teamStructure/        # Organizational structure
│   │   └── title/                # Page title component
│   ├── about/                    # About page
│   │   ├── page.tsx              # About page content
│   │   └── about.module.scss     # About page styles
│   ├── admin/                    # Admin portal
│   │   ├── login/                # Admin login page
│   │   ├── content/              # Content management interface
│   │   └── media/                # Media management
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── content/              # Content CRUD operations
│   │   ├── login/                # Login handling
│   │   ├── logout/               # Logout handling
│   │   └── media/                # Media upload/management
│   ├── contact/                  # Contact page
│   ├── frc/                      # FRC team page
│   ├── ftc/                      # FTC team page
│   ├── login/                    # Public login page
│   ├── news/                     # News section page
│   ├── sponsors/                 # Sponsors page
│   ├── team/                     # Team information page
│   ├── vex/                      # VEX team page
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   └── globals.scss              # Global styles
├── components/                   # Shared components
│   └── editable/                 # CMS editing components
│       ├── EditableImage.tsx     # Inline image editor
│       ├── EditableText.tsx      # Inline text editor
│       ├── EditToolbar.tsx       # Edit mode toolbar
│       └── StyleEditor.tsx       # CSS property editor
├── content/                      # Content storage
│   └── site-content.json         # All site content data
├── contexts/                     # React contexts
│   └── EditModeContext.tsx       # Edit mode state management
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts                # Authentication hook
│   └── useContent.ts             # Content fetching hook
├── public/                       # Static assets
│   ├── images/                   # Site images
│   ├── logos/                    # Team and sponsor logos
│   └── handmade/                 # Custom graphics
├── utils/                        # Utility functions
│   ├── content.ts                # Content management utilities
│   ├── globalFonts.ts            # Font configurations
│   ├── sponsors.ts               # Sponsor data utilities
│   └── styleHelpers.ts           # CSS helper functions
├── middleware.ts                 # Next.js middleware
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
└── Dockerfile                    # Docker containerization
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 10.x or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/enVId-tech/New-Robotics-Website-Redesign.git

# Navigate to project directory
cd New-Robotics-Website-Redesign

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Content Management

### Accessing Edit Mode

1. Navigate to `/admin/login` or `/login`
2. Authenticate with admin credentials
3. Click "Enable Edit Mode" in the toolbar
4. Edit content directly on any page
5. Changes are automatically saved to `content/site-content.json`

### Editing Content

**Text Editing:**
- Click on any text element to edit inline
- Multi-line support for paragraphs and descriptions
- HTML-safe content sanitization

**Image Editing:**
- Click the edit icon on any image
- Upload new images via file picker
- Adjust image styles with the style editor

**Style Editing:**
- Click the style icon on editable elements
- Modify colors, fonts, spacing, borders, and more
- Preview changes in real-time

**News Management:**
- Add new articles with the "Add Article" button
- Delete articles with the delete button
- Edit all article fields: title, excerpt, author, date, category, tags, link
- Filter articles by category

### Content Structure

All content is stored in `content/site-content.json` with the following structure:

```json
{
  "site": { ... },
  "homepage": { ... },
  "about": {
    "hero": { ... },
    "mission": { ... },
    "programs": { ... },
    "impact": { ... },
    "join": { ... }
  },
  "news": {
    "hero": { ... },
    "articles": [ ... ]
  },
  "navigation": { ... },
  "footer": { ... }
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

### Docker

```bash
# Build Docker image
docker build -t oa-robotics-website .

# Run container
docker run -p 3000:3000 oa-robotics-website
```

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Server-side rendering with Next.js App Router
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS modules for optimized stylesheets
- Static asset caching

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the existing code style
4. Test your changes thoroughly
5. Commit with descriptive messages: `git commit -m 'Add feature: description'`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a pull request with a detailed description

### Code Standards

- Use TypeScript for all new code
- Follow existing naming conventions
- Use SCSS modules for styling
- Ensure responsive design on all screen sizes
- Test Edit Mode functionality after changes
- Maintain accessibility standards

## Troubleshooting

### Common Issues

**Edit Mode not appearing:**
- Ensure you are logged in through `/admin/login`
- Check browser console for authentication errors
- Clear cookies and re-authenticate

**Content not saving:**
- Verify `content/site-content.json` has write permissions
- Check API routes are functioning
- Review browser console for errors

**Styling issues:**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check for conflicting CSS modules

## Demo

- Production: [https://oarobotics.org](https://oarobotics.org)
- Alternative: [https://robotics.etran.dev](https://robotics.etran.dev)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Oxford Academy Robotics Team
- FIRST Robotics Competition
- FIRST Tech Challenge
- VEX Robotics Competition

## Contact

For questions or support, please contact the team through the website's contact form or visit our GitHub repository.

---

**Repository:** [https://github.com/enVId-tech/New-Robotics-Website-Redesign](https://github.com/enVId-tech/New-Robotics-Website-Redesign)

**Maintained by:** enVId-tech