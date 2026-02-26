# Sahuri Bros - Climate Engineering & Luxury HVAC Solutions

A modern, premium website for Sahuri Bros built with React 18, TypeScript, and Vite. This is the digital home of Israel's leading luxury climate engineering company specializing in invisible, integrated climate control systems.

## Overview

**Sahuri Bros.** (אחיוות סחוري) engineers perfect climate without visible mechanical equipment. We specialize in integrating advanced HVAC systems—particularly VRF technology—into luxury residential and commercial projects with architectural precision.

### Strategic Positioning: Three Core Pillars

1. **Engineering Precision (דיוק הנדסי)**
   - We don't hide air conditioning units; we design spaces without them
   - Solving architectural challenges others can't address
   - CAD-precise VRF systems, micro grilles, sub-floor heating solutions

2. **The Bros. Guarantee (ערבות משפחתית)**
   - Personal accountability—the brothers themselves stand behind every project
   - Experienced team of skilled engineers and craftspeople
   - Service that extends far beyond installation

3. **Luxury Comfort (נוחות פאר)**
   - Perfect climate as an invisible part of luxury living
   - Five-star hotel experience in your home or commercial space
   - Silent, seamless, always perfect

### Target Markets
- **B2C**: Luxury homeowners (Jerusalem & Tel Aviv metro area)
- **B2A**: Architects, designers, and consultants seeking integrated solutions
- **B2B**: Developers and contractors building premium projects

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation, branding, contact
│   ├── Hero.tsx                # Hero gallery with brand messaging overlay
│   ├── PlanExecuteSection.tsx  # Three core value pillars messaging
│   ├── ProjectsGallery.tsx    # Portfolio with project filtering
│   ├── VideoSection.tsx        # Featured case study (problem-solution)
│   ├── ClientsCarousel.tsx    # Architect & developer partners
│   ├── ContactForm.tsx         # Lead capture (B2C/B2A/B2B agnostic)
│   ├── Footer.tsx              # Legal, links, contact, compliance
│   └── *.css                   # Component-scoped responsive styles
├── App.tsx                    # Main app orchestration
├── App.css                    # Global app styles
├── index.css                  # Base typography & utilities
└── main.tsx                   # React entry point
```

## Core Components

### Header
- Sticky, professional navigation
- Company name + "Climate Engineering" tagline
- Mobile-responsive hamburger menu
- WhatsApp contact button
- Language switcher (Hebrew/English placeholder)

### Hero Section
- Carousel of luxury project imagery (5 slides)
- Overlay messaging: "Invisible Climate Engineering"
- Play/pause controls for user agency
- Smooth fade transitions
- Scroll-to-content button

### Value Pillars (Plan & Execute Section)
- **Engineering Precision**: Problem-solving, technical expertise
- **The Bros. Guarantee**: Personal service, family accountability
- Responsive dual-column layout
- Call-to-action buttons per pillar

### Projects Gallery
- Portfolio showcase with navigation
- Carousel with prev/next controls
- Responsive grid (4 cols desktop → 2 cols tablet → 1 col mobile)
- Hover animations for engagement

### Case Study Section
- Featured project deep-dive
- Problem-solution narrative format
- Engineering challenges highlighted
- Professional architectural tone

### Partners Carousel
- Architect and developer logos
- Trust-building through association
- Responsive auto-adjusting grid
- Logo emphasis on partnerships over customers

### Contact Form
- Multi-purpose lead capture
- Phone, email, message, project description fields
- Privacy policy checkbox (required, links to policy)
- Success state with thank you message
- Form validation with helpful errors

### Footer
- Hierarchical navigation
- Contact info and company details
- Social media integrations
- Accessibility declaration
- Copyright and credits

## Brand Identity

### Color Palette
| Purpose | Color | Hex Code |
|---------|-------|----------|
| Primary (Authority) | Deep Blue | `#1a5490` |
| Dark (Luxury) | Charcoal | `#1a1a1a` |
| Technology | Metallic Gray | `#666666` |
| Accent (Premium) | Bronze Gold | `#B8860B` |
| Clean | Pure White | `#FFFFFF` |

### Typography
- **Headlines**: Modern geometric sans-serif (clean, professional)
- **Body**: Readable sans-serif with excellent contrast
- **Tagline**: Thin, elegant positioning
- All fonts support Hebrew characters (RTL rendering)

### Visual Language
- Minimalist, architectural focus
- High-end residential/commercial imagery
- Engineers and craftspeople at work
- Satisfied clients in their spaces
- Natural lighting, warm color grading
- Technology represented through precision, not jargon

## Responsive Breakpoints

| Device Type | Width | Layout |
|------------|-------|--------|
| Desktop | 1920px+ | Multi-column, full features |
| Laptop | 1024-1919px | Optimized spacing |
| Tablet | 768-1023px | 2-column where applicable |
| Mobile | 480-767px | Single-column, touch-optimized |
| Small Mobile | <480px | Condensed, large touch targets |

## Setup & Installation

### Requirements
- Node.js v16+ with npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start

```bash
# Navigate to project directory
cd c:\Sahouri

# Install dependencies
npm install

# Start development server (hot reload enabled)
npm run dev
```

Site runs at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Creates optimized `/dist` folder ready for static hosting (Netlify, Vercel, etc.)

```bash
npm run preview
```

Preview production build locally before deployment

## Key Technical Features

✅ **TypeScript + React 18**: Type-safe, modern component architecture  
✅ **Vite**: Lightning-fast dev server and optimized production builds  
✅ **Hebrew RTL Support**: Native right-to-left language rendering  
✅ **Responsive CSS**: Mobile-first, 5 breakpoints, no frameworks  
✅ **Accessibility**: ARIA labels, semantic HTML, WCAG 2.1 AA standards  
✅ **Performance**: Lazy loading, optimized images, minimal JavaScript  
✅ **SEO Ready**: Meta tags, structured data, semantic markup  
✅ **Future-Ready**: AI chatbot integration points, CMS-connectable  

## Brand Compliance

### Non-Negotiable Standards
- ✓ Never use cheap imagery
- ✓ Never use bright primary colors (blue-only accent)
- ✓ Always lead with problems solved, not products sold
- ✓ Always emphasize human/family touch
- ✓ Do not compare against competitors
- ✓ Maintain luxury aesthetic in all visuals

### Content Guidelines
- **Engineering Precision**: Emphasize complex problem-solving
- **The Bros. Guarantee**: Personal accountability and service
- **Luxury Comfort**: Lifestyle, silence, seamlessness

## Customization Guide

### Update Company Contact
**File**: [Header.tsx](src/components/Header.tsx)
```tsx
<span className="phone">02-XXX-XXXX</span>  // Your phone
```

**File**: [Footer.tsx](src/components/Footer.tsx)
```tsx
<a href="tel:02-XXX-XXXX">02-XXX-XXXX</a>   // Your phone
```

### Upload Logo
Create `/public/logo.svg` and update:
- [Header.tsx](src/components/Header.tsx)
- [Footer.tsx](src/components/Footer.tsx)

### Add New Projects
Edit [ProjectsGallery.tsx](src/components/ProjectsGallery.tsx):
```tsx
const projects: ProjectImage[] = [
  { id: 1, url: 'image-url.jpg', alt: 'Project Name' },
  // Add more...
]
```

### Change Brand Colors
Search and replace in CSS files:
- `#1a5490` → your primary blue
- `#1a1a1a` → your dark color
- `#666666` → your gray

### Create New Case Study
Duplicate [VideoSection.tsx](src/components/VideoSection.tsx) and follow:
1. **Challenge**: The architectural/engineering problem
2. **Solution**: How we solved it with precision
3. **Result**: The perfect climate outcome

## Performance & SEO

### Target Metrics (2026)
- 50,000+ monthly website visitors
- 150+ qualified leads per quarter (MQLs)
- 18+ new project closures annually
- 5:1 ROI on marketing spend

### SEO Keywords
- "VRF systems Israel"
- "Luxury HVAC design"
- "Invisible air conditioning"
- "Precision climate control Jerusalem"
- "Luxury homes HVAC Tel Aviv"

### Performance Targets
- Page load: <2 seconds (desktop), <3 seconds (mobile)
- Lighthouse: >90 across all metrics
- Mobile: 98+ accessibility score

## Future Roadmap

### Q1 2026: Foundation
- [ ] Launch with AI lead qualification chatbot
- [ ] 5 hero case study videos (B2C + B2A)
- [ ] SEO optimization for luxury keywords

### Q2 2026: Growth
- [ ] "Summer Comfort" seasonal campaigns
- [ ] Arabic cultural messaging (dark posts)
- [ ] YouTube advertising with case studies

### Q3 2026: Partnership
- [ ] Architect partnership program
- [ ] B2B LinkedIn amplification
- [ ] Advanced CAD/rendering in portfolio

### Q4 2026: Brand
- [ ] Holiday/seasonal campaigns
- [ ] Design publication partnerships
- [ ] 90-second brand video premiere

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile Chrome | Latest |
| Mobile Safari | iOS 14+ |

## Compliance

- ✓ GDPR ready (privacy policy template included)
- ✓ Israeli Privacy Law (חוק הגנת הפרטיות) compliant
- ✓ WCAG 2.1 AA accessibility standards
- ✓ No third-party tracking without consent

## Technology Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Language | TypeScript 5.2 |
| Build Tool | Vite 5.0 |
| Styling | CSS3 (component-scoped) |
| Icons | Inline SVG |
| Images | Optimized external + local |
| Hosting | Static (Netlify/Vercel ready) |

## Development Guidelines

### Component Structure
```tsx
import React from 'react'
import './ComponentName.css'

interface Props {
  // Define props
}

const ComponentName: React.FC<Props> = ({ ...props }) => {
  return (
    <section className="component-section">
      {/* Content */}
    </section>
  )
}

export default ComponentName
```

### CSS Classes
- Use BEM-like naming: `.component-name__element--modifier`
- All styles scoped to component
- Mobile-first media queries
- No !important unless absolutely necessary

### Commit Messages
- `feat: Add new feature`
- `fix: Fix specific bug`
- `style: Update branding/styling`
- `content: Update company information`
- `docs: Update documentation`

## Support & Maintenance

For issues:
1. Check [BRAND_GUIDE.md](BRAND_GUIDE.md) for brand consistency
2. Review TypeScript errors in your IDE
3. Verify all npm dependencies installed

For content updates:
1. Review brand guidelines before making changes
2. Test on mobile before committing
3. Update README if structure changes

## License & Credits

**Built For**: Sahuri Bros Climate Engineering  
**Built With**: React 18, TypeScript, Vite  
**Design Philosophy**: Luxury + Precision + Personal Service  
**Updated**: February 2026  

---

**Every pixel communicates engineering precision. Every interaction reflects the personal service Sahuri Bros. delivers.**
