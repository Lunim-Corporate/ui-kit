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

### Typography
- **Headings**: Inter Bold (700 weight)
- **Body Text**: Noto Sans Display (14pt)
- **Font Sizes**: 12pt minimum, 96pt maximum

### Color Palette
- **Primary**: Lunim Blue (`oklch(0.8172 0.1251 222.0133)`)
- **Background**: Clean whites and subtle grays
- **Dark Mode**: Professional dark theme with proper contrast

## 📦 Components

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