# OA Robotics Website

A modern, responsive website for Oxford Academy Robotics showcasing our FRC, FTC VEX robotics teams, achievements, and community impact.

![OA Robotics](/public/logos/OARoboticsLogo_24-25.webp)

## Overview

This website serves as the digital home for EnVision Robotics, featuring:

- Information about our FRC Team 4079
- Details about our VEX robotics program
- Team achievements and competition history
- Resources for members and visitors
- Contact information and social media links

## Technologies

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Deployment**: [Your deployment platform]

## Demo
- Demo of the website can be found at [https://oarobotics.org](https://oarobotics.org)
- Alternative link: [https://robotics.etran.dev](https://robotics.etran.dev)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/envision-robotics-website.git

# Navigate to project directory
cd envision-robotics-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── _components/     # Shared components
│   ├── about/           # About us pages
│   ├── contact/         # Contact pages
│   ├── frc/             # FRC team pages
|   ├── ftc              # FTC team pages
│   ├── sponsors/        # Sponsors page
│   ├── vex/             # VEX team pages
│   ├── layout.tsx       # Main layout
│   ├── page.tsx         # Home page
├── public/              # Static assets
└── ...
```

## Features

- **Team Profiles**: Detailed information about each robotics team
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and intuitive user interface
- **Dynamic Content**: Server components for efficient rendering

## Deployment

This website can be deployed using Vercel, Netlify, or any other platform supporting Next.js applications.

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request
7. Wait for it to get approved

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.