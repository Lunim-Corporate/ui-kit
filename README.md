# Lunim Design System

A complete component library built with Next.js, TypeScript, and Tailwind CSS, featuring 56+ rebranded Shadcn/ui components with the Lunim design system.

## 🚀 Features

- **56+ Components**: Complete set of UI components including forms, layouts, navigation, data display, and overlays
- **Lunim Branding**: Custom color palette and typography system
- **Dark Mode Support**: Full dark/light theme switching
- **TypeScript**: Fully typed components for better development experience
- **Accessible**: Built on Radix UI primitives for accessibility
- **Search Functionality**: Built-in component search and filtering
- **Responsive Design**: Mobile-first responsive components

## 🎨 Design System

### Color Palette & Theme Tokens
Lunim uses OKLCH for perceptually-uniform color. Core tokens are defined in `src/app/globals.css` and mapped to Tailwind via CSS variables.

```css
/* Light theme */
:root {
  --primary: oklch(0.8172 0.1251 222.0133);
  --primary-foreground: oklch(0 0 0);
  --background: oklch(0.9551 0 0);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(0.9702 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --muted: oklch(0.8853 0 0);
  --muted-foreground: oklch(0.5103 0 0);
  --accent: oklch(0.8078 0 0);
  --accent-foreground: oklch(0.3211 0 0);
  --border: oklch(0.8576 0 0);
  --input: oklch(0.9067 0 0);
  --ring: oklch(0.4891 0 0);
}

/* Dark theme */
.dark {
  --background: oklch(0.1374 0.0464 255.7321);
  --foreground: oklch(0.8853 0 0);
  --card: oklch(0.2435 0 0);
  --card-foreground: oklch(0.8853 0 0);
  --primary: oklch(0.8172 0.1251 222.0133);
  --primary-foreground: oklch(0 0 0);
  --muted: oklch(0.2850 0 0);
  --muted-foreground: oklch(0.5999 0 0);
  --accent: oklch(0.3715 0 0);
  --accent-foreground: oklch(0.8853 0 0);
  --border: hsl(0 0% 20%);
  --input: oklch(0.3092 0 0);
  --ring: oklch(0.7058 0 0);
}
```

Notes:
- **Brand Blue**: `--primary` is the Lunim blue used for focus, hover, and selected states.
- **Contrast**: Text on dark surfaces inherits light foreground; primary foreground remains black for legibility on primary surfaces.

### Typography System
- **Fonts**: Headings use `Inter` (700). Body uses `Noto Sans Display`.
- **Base size**: `14px` body with `clamp(12px, 1rem, 96px)` safety.
- **Utilities**:
  - Headings: `h1` 22px, `h2` 18px, `h3` 16px, `h4` 15px, `h5` 14px, `h6` 13px
  - Body: `.text-small` 12px, `.text-large` 16px, `.text-caption` 12px/300

### Spacing & Layout Rules
- **Spacing scale**: quarter-rem base (`--spacing: 0.25rem`) aligned with Tailwind `p-1`, `p-2`, etc.
- **Radii**: `--radius` = 0.35rem; derived tokens `--radius-sm|md|lg|xl` drive component rounding.
- **Shadows**: tokenized `--shadow-2xs` → `--shadow-2xl` for consistent elevation.
- **Containers**: prefer responsive width utilities (`max-w-screen-lg`/`xl`) and `grid`/`flex` layouts.
- **Focus & Rings**: rely on `--ring` for accessible outlines; interactive states use the brand blue.

## 📦 Components

### Component Reference
High-level guidance on notable components and Lunim-specific variants.

- **Button**: `primary` (blue, white text), `secondary` (transparent, blue text + border), `inactive` (light gray, no border), `ghost` (subtle). All adopt blue hover/active.
- **Menus**: `Menubar`, `DropdownMenu`, `Select`, `ContextMenu` — items highlight with blue on hover/focus/selected. Built on Radix states.
- **Navigation**: `Tabs`, `Pagination`, `NavigationMenu`, `Sidebar` — selected and active states use brand blue; dark mode text inherits light foreground.
- **Forms**: `Field`, `InputGroup`, `NativeSelect`, `Combobox`, `Checkbox`, `Switch` — consistent spacing and validation surfaces; `FieldContent` and `FieldError` are available.
- **Data**: `DataTable` with sorting/filtering; null-safe sorts; simplified checkbox selection (no indeterminate).
- **Overlays**: `Dialog`, `Popover`, `Sheet`, `AlertDialog`, `HoverCard` — unified elevations and border tokens.

Customization notes:
- Prefer tokens over hard-coded colors. Use Tailwind classes like `text-primary`, `bg-primary`, `text-foreground` which resolve to tokens.
- In dark mode, text defaults to light foreground; primary foreground remains black for legibility on primary surfaces.

### Form Components
- Buttons (Primary, Secondary, Inactive, Ghost, Destructive)
- Inputs (Text, Email, Password, Textarea)
- Form Controls (Checkboxes, Radio Groups, Switches, Sliders)
- Selects (Dropdown, Native Select, Combobox)
- Toggles and Progress Indicators
- Input Groups with addons
- Field layouts with validation

### Layout Components
- Cards and Separators
- Aspect Ratio and Resizable Panels
- Scroll Areas and Skeletons
- Calendar and Chart components

### Navigation Components
- Breadcrumbs and Navigation Menus
- Pagination and Menubars
- Sidebar with collapsible functionality

### Data Display Components
- Tables with sorting and filtering
- Tabs and Accordions
- Carousels and Empty States
- Badges and Avatars

### Feedback Components
- Alerts and Spinners
- Tooltips and Progress bars
- Keyboard shortcuts display

### Overlay Components
- Dialogs and Alert Dialogs
- Sheets and Popovers
- Hover Cards and Drawers
- Context Menus and Command Palettes

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Lunim-Corporate/ui-kit.git
cd ui-kit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Import Components
```tsx
import { Button, Card, Input } from '@/components/ui'
```

### Use Components
```tsx
<Button variant="primary">Click me</Button>
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Example Patterns
Common JSX/Tailwind snippets that reflect Lunim branding.

```tsx
// Secondary button: transparent with blue text and border
<Button variant="secondary">Learn more</Button>

// Inactive button: light gray, no border
<Button variant="inactive">Disabled</Button>

// Menu item: Radix state-driven highlight (handled by component styles)
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
  </DropdownMenuContent>
 </DropdownMenu>

// Card spacing and layout
<div className="grid gap-4 md:grid-cols-2">
  <Card className="p-4 shadow-sm">
    <CardHeader>
      <CardTitle>Analytics</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">...</CardContent>
  </Card>
  <Card className="p-4 shadow-sm">...</Card>
</div>
```

### Theme Toggle
```tsx
import { ThemeToggle } from '@/components/theme-toggle'

<ThemeToggle />
```

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js app directory
├── components/          # Component library
│   ├── ui/             # Base UI components
│   └── demos/          # Component demonstrations
├── lib/                # Utilities and configurations
└── hooks/              # Custom React hooks
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Modify the color palette in `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.8172 0.1251 222.0133);
  --primary-foreground: oklch(0 0 0);
  /* ... other colors */
}
```

### Typography
Update font families and sizes in `src/app/globals.css`:
```css
body {
  font-family: var(--font-noto-sans-display), system-ui, sans-serif;
  font-size: 14px;
}
```

## 📱 Responsive Design

All components are built with mobile-first responsive design principles and work seamlessly across all device sizes.

## ♿ Accessibility

Built on Radix UI primitives ensuring:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Color contrast compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the component foundation
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework