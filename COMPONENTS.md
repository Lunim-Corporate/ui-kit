# Lunim Design System - Complete Component Library

## 🎨 **64 Rebranded Components**

All Shadcn/ui components have been rebranded with Lunim's sophisticated design system featuring:
- **Lunim Purple** primary color
- **Lunim Teal** accent color
- **Inter Bold** typography for headings
- **Noto Sans Display** for body text
- **Complete dark mode** support

---

## 📋 **Component Categories**

### **Form Components (17 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Button` | Primary action buttons | Main CTAs, form submissions |
| `Input` | Text input fields | Forms, search, data entry |
| `Label` | Form field labels | Accessibility, form structure |
| `Textarea` | Multi-line text input | Comments, descriptions |
| `Select` | Dropdown selection | Options, categories |
| `Checkbox` | Boolean input | Settings, agreements |
| `RadioGroup` | Single choice selection | Options, preferences |
| `Switch` | Toggle switch | Settings, on/off states |
| `Slider` | Range input | Values, preferences |
| `InputOTP` | One-time password | Authentication, verification |
| `Toggle` | Toggle button | States, modes |
| `ToggleGroup` | Multiple toggles | Toolbars, options |
| `Form` | Form wrapper | Form validation, structure |
| `Field` | Form field wrapper | Validation, error handling |
| `InputGroup` | Grouped inputs | Related form fields |
| `ButtonGroup` | Button groups | Related actions |
| `DropdownMenu` | Context menu | Actions, options |

### **Layout Components (6 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Card` | Content container | Information display |
| `Separator` | Visual divider | Content separation |
| `AspectRatio` | Maintain ratios | Images, videos |
| `Resizable` | Adjustable panels | Layouts, dashboards |
| `ScrollArea` | Custom scrollbars | Long content |
| `Skeleton` | Loading placeholder | Loading states |

### **Navigation Components (5 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Breadcrumb` | Navigation breadcrumbs | Page hierarchy |
| `NavigationMenu` | Complex navigation | Main navigation |
| `Pagination` | Page navigation | Data pagination |
| `Menubar` | Application menu | Desktop apps |
| `Sidebar` | Side navigation | App layouts |

### **Data Display Components (6 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Table` | Data tables | Tabular data |
| `Tabs` | Tabbed content | Content organization |
| `Accordion` | Collapsible content | FAQs, details |
| `Collapsible` | Simple collapsible | Expandable content |
| `Carousel` | Image/content slider | Galleries, features |
| `Empty` | No data state | Empty states |
| `Chart` | Data visualization | Analytics, metrics |

### **Feedback Components (7 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Alert` | Notification messages | Status, warnings |
| `Spinner` | Loading indicator | Loading states |
| `Badge` | Status indicators | Labels, counts |
| `Avatar` | User profile images | User representation |
| `Kbd` | Keyboard shortcuts | Help, shortcuts |
| `Tooltip` | Hover information | Help, details |
| `Progress` | Progress indicators | Loading, completion |

### **Overlay Components (9 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Dialog` | Modal dialogs | Confirmations, forms |
| `AlertDialog` | Confirmation dialogs | Destructive actions |
| `Sheet` | Slide-out panels | Mobile-friendly modals |
| `Popover` | Floating content | Additional info |
| `HoverCard` | Hover-triggered content | User cards, previews |
| `Drawer` | Mobile drawer | Mobile navigation |
| `ContextMenu` | Right-click menu | Contextual actions |
| `Command` | Command palette | Search, commands |
| `Calendar` | Date picker | Date selection |

### **Additional Components (4 components)**
| Component | Description | Usage |
|-----------|-------------|-------|
| `Item` | Generic item wrapper | List items |
| `Sonner` | Toast notifications | Success, error messages |
| `ThemeToggle` | Dark/light mode | Theme switching |
| `Calendar` | Date picker | Date selection |

---

## 🚀 **Quick Start**

### **Import All Components**
```tsx
import { 
  Button, 
  Card, 
  Input, 
  Dialog,
  // ... import any components you need
} from "@/components"
```

### **Import Individual Components**
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

### **Use Theme Toggle**
```tsx
import { ThemeToggle } from "@/components/theme-toggle"

function App() {
  return (
    <div>
      <ThemeToggle />
      {/* Your app content */}
    </div>
  )
}
```

---

## 🎨 **Theme Integration**

All components automatically inherit the Lunim theme:

### **Colors**
- **Primary**: Lunim Purple (`oklch(0.45 0.15 264.376)`)
- **Accent**: Lunim Teal (`oklch(0.65 0.12 162.48)`)
- **Background**: Warm White (`oklch(0.99 0.005 106.423)`)
- **Foreground**: Deep Charcoal (`oklch(0.15 0.02 106.423)`)

### **Typography**
- **Headings**: Inter Bold (700) - 22pt/18pt
- **Body**: Noto Sans Display Regular (400) - 14pt
- **Captions**: Noto Sans Display Light (300) - 12pt

### **Dark Mode**
All components support dark mode with enhanced contrast and consistent branding.

---

## 📱 **Responsive Design**

All components are mobile-first and responsive:
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch-friendly**: Optimized for mobile interactions
- **Flexible layouts**: Adapt to different screen sizes

---

## ♿ **Accessibility**

Every component follows accessibility best practices:
- **Keyboard navigation**: Full keyboard support
- **Screen readers**: Proper ARIA labels
- **Color contrast**: WCAG AA compliant
- **Focus management**: Clear focus indicators

---

## 🔧 **Customization**

Since components are copied into your project, you have full control:
- **Modify styling**: Edit component files directly
- **Add variants**: Create new component variants
- **Extend functionality**: Add new features
- **Theme consistency**: All changes inherit Lunim branding

---

## 📦 **Project Structure**

```
src/
├── components/
│   ├── ui/                 # All 64 Shadcn components
│   ├── theme-toggle.tsx   # Dark mode toggle
│   └── index.ts           # Complete export file
├── app/
│   ├── globals.css        # Lunim theme variables
│   ├── layout.tsx         # Font configuration
│   └── page.tsx           # Component showcase
└── lib/
    └── utils.ts           # Utility functions
```

---

## 🎯 **Usage Examples**

### **Form with Validation**
```tsx
import { Button, Input, Label, Card, CardContent, CardHeader, CardTitle } from "@/components"

function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <Button className="w-full">Send Message</Button>
      </CardContent>
    </Card>
  )
}
```

### **Data Table**
```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Badge } from "@/components"

function UserTable({ users }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Badge variant={user.active ? "default" : "secondary"}>
                {user.active ? "Active" : "Inactive"}
              </Badge>
            </TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

---

## 🎉 **Ready to Use**

The Lunim Design System is now complete with all 64 components rebranded and ready for production use. Each component maintains Shadcn/ui's functionality while sporting Lunim's sophisticated design aesthetic.

**Preview**: Visit `http://localhost:3000` to see all components in action!
