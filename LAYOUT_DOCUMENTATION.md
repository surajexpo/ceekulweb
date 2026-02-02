# Angular Layout System Documentation

## Overview
This is a production-ready, enterprise-grade responsive Angular layout featuring a three-column design with:
- **Top Navbar** (fixed/sticky)
- **Left Sidebar** (collapsible navigation menu)
- **Center Content Area** (main router outlet)
- **Right Chat Panel** (toggleable support/chat)
- **Global Footer** (sticky to bottom)

## Architecture

### Component Structure
```
src/app/layout/
├── navbar/          # Top navigation bar
├── sidebar/         # Left navigation menu
├── chat-panel/      # Right support chat panel
├── footer/          # Global footer
├── main-layout/     # Layout orchestrator
└── pages/           # Example page components
    ├── dashboard/
    ├── analytics/
    └── projects/
```

### Key Features

#### 1. **Navbar** ([navbar/](src/app/layout/navbar/))
- Sticky positioning at the top
- Logo placement (left)
- Primary navigation links (center)
- User profile and actions (right)
- Mobile-responsive with hamburger menu
- Active route highlighting

#### 2. **Sidebar** ([sidebar/](src/app/layout/sidebar/))
- Fixed width (240px, collapsible to 64px)
- Vertical menu with nested items
- Active route highlighting using Angular Router
- Expandable/collapsible menu groups
- Smooth animations
- Custom icons with fallback symbols
- Mobile: slides in from left

#### 3. **Chat Panel** ([chat-panel/](src/app/layout/chat-panel/))
- Fixed width (320px)
- Real-time chat UI placeholder
- Toggle on/off for mobile UX
- Message input with send button
- Quick action buttons
- Smooth animations
- Mobile: slides in from right

#### 4. **Footer** ([footer/](src/app/layout/footer/))
- Sticks to bottom of page
- Responsive grid layout (4 columns → 2 → 1)
- Social media links
- Copyright and legal links
- Auto-updating year

#### 5. **Main Layout** ([main-layout/](src/app/layout/main-layout/))
- CSS Grid three-column layout
- Toolbar with toggle buttons
- Router outlet for dynamic content
- Manages sidebar and chat panel state
- Responsive breakpoints

## Responsive Design

### Breakpoints
- **Desktop** (>1024px): Full three-column layout
- **Tablet** (768px-1024px): Sidebar and chat become overlays
- **Mobile** (<768px): Hamburger menu, simplified layout

### Mobile Behavior
- Navbar collapses to hamburger menu
- Sidebar becomes fixed overlay (toggle with Menu button)
- Chat panel becomes fixed overlay (toggle with Chat button)
- Footer adapts to single column
- Touch-friendly button sizes

## Styling Architecture

### SCSS Structure
All components use SCSS with BEM naming convention:
```scss
.component {
  &__element { }
  &__element--modifier { }
}
```

### Shared Styles
- **[src/styles/pages.scss](src/styles/pages.scss)**: Shared page components (stats cards, activity lists, etc.)
- **[src/styles.css](src/styles.css)**: Global resets and base styles

### Color Scheme
```scss
// Primary Colors
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$primary-blue: #667eea;
$primary-green: #48bb78;

// Grays
$gray-900: #2d3748;
$gray-700: #4a5568;
$gray-400: #cbd5e0;
$gray-100: #f7fafc;

// Backgrounds
$bg-main: #f7fafc;
$bg-sidebar: #1a202c;
$bg-footer: #2d3748;
```

## Routing Configuration

### Current Routes ([app.routes.ts](src/app/app.routes.ts))
```typescript
'/' → redirects to '/dashboard'
'/dashboard' → Dashboard page
'/analytics' → Analytics page
'/projects' → Projects page
'/reports' → Dashboard (placeholder)
```

### Adding New Routes
1. Create your page component:
   ```bash
   ng generate component pages/my-page
   ```

2. Import and add to routes:
   ```typescript
   import { MyPage } from './layout/pages/my-page/my-page';

   children: [
     { path: 'my-page', component: MyPage }
   ]
   ```

3. Add link to sidebar ([sidebar/sidebar.ts](src/app/layout/sidebar/sidebar.ts)):
   ```typescript
   {
     label: 'My Page',
     icon: 'page',
     route: '/my-page'
   }
   ```

## Customization Guide

### Changing the Logo
Edit [navbar/navbar.html](src/app/layout/navbar/navbar.html):
```html
<span class="navbar__logo-text">YourAppName</span>
```

### Adding Menu Items
Edit [sidebar/sidebar.ts](src/app/layout/sidebar/sidebar.ts):
```typescript
protected readonly menuItems: MenuItem[] = [
  {
    label: 'My Section',
    icon: 'custom-icon',
    route: '/my-route'
  },
  {
    label: 'Nested Menu',
    icon: 'folder',
    children: [
      { label: 'Sub Item 1', icon: 'item', route: '/sub1' },
      { label: 'Sub Item 2', icon: 'item', route: '/sub2' }
    ]
  }
];
```

### Modifying Colors
Update variables in component SCSS files or create a `_variables.scss` file.

### Changing Layout Widths
Edit [main-layout/main-layout.scss](src/app/layout/main-layout/main-layout.scss):
```scss
// Sidebar width
.sidebar { width: 240px; } // Change to desired width

// Chat panel width
.chat-panel { width: 320px; } // Change to desired width
```

## Usage Examples

### Creating a New Dashboard Card
```html
<div class="stat-card">
  <div class="stat-card__icon stat-card__icon--blue">
    <!-- Your icon SVG -->
  </div>
  <div class="stat-card__content">
    <h3 class="stat-card__value">1,234</h3>
    <p class="stat-card__label">Label</p>
    <span class="stat-card__change stat-card__change--positive">+5%</span>
  </div>
</div>
```

### Using Page Template
```html
<div class="page">
  <div class="page__header">
    <h1 class="page__title">Page Title</h1>
    <p class="page__subtitle">Description</p>
  </div>

  <div class="page__content">
    <div class="content-section">
      <h2 class="content-section__title">Section</h2>
      <!-- Your content -->
    </div>
  </div>
</div>
```

## Running the Application

### Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`

### Build
```bash
npm run build
```

### Production Build
```bash
ng build --configuration=production
```

## Best Practices

### 1. Component Organization
- Keep components focused and single-purpose
- Use standalone components (already configured)
- Leverage Angular signals for reactivity

### 2. Styling
- Use BEM naming convention
- Keep component styles scoped
- Use shared styles from `styles/pages.scss`
- Mobile-first approach

### 3. Performance
- Lazy load routes for large applications
- Use `OnPush` change detection where appropriate
- Optimize images and assets

### 4. Accessibility
- All interactive elements have `aria-label`
- Proper heading hierarchy
- Keyboard navigation support
- Semantic HTML

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- [ ] Add dark mode toggle
- [ ] Implement actual chat functionality
- [ ] Add user authentication
- [ ] Integrate with backend API
- [ ] Add more page templates
- [ ] Implement state management (NgRx/signals)
- [ ] Add unit and E2E tests
- [ ] PWA support

## File Reference

### Core Layout Files
| File | Purpose |
|------|---------|
| [main-layout/main-layout.ts](src/app/layout/main-layout/main-layout.ts) | Main layout orchestrator |
| [navbar/navbar.ts](src/app/layout/navbar/navbar.ts) | Top navigation |
| [sidebar/sidebar.ts](src/app/layout/sidebar/sidebar.ts) | Left menu |
| [chat-panel/chat-panel.ts](src/app/layout/chat-panel/chat-panel.ts) | Right chat panel |
| [footer/footer.ts](src/app/layout/footer/footer.ts) | Page footer |

### Configuration
| File | Purpose |
|------|---------|
| [app.routes.ts](src/app/app.routes.ts) | Routing configuration |
| [app.config.ts](src/app/app.config.ts) | App providers |
| [angular.json](angular.json) | Angular CLI configuration |

### Styles
| File | Purpose |
|------|---------|
| [styles.css](src/styles.css) | Global styles |
| [styles/pages.scss](src/styles/pages.scss) | Shared page components |
| Component `.scss` files | Component-specific styles |

## Support
For issues or questions about this layout system, please refer to the Angular documentation at [angular.dev](https://angular.dev)

---

**Built with Angular 21 | Production-Ready | Enterprise-Grade**
