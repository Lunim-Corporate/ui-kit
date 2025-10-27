"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Kbd } from "@/components/ui/kbd"
import { Empty } from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ButtonGroup } from "@/components/ui/button-group"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Combobox } from "@/components/ui/combobox"
import { DataTable, Column } from "@/components/ui/data-table"
import { DatePicker } from "@/components/ui/date-picker"
import { Typography } from "@/components/ui/typography"
import { CalendarDemo } from "@/components/calendar-demo"
import { ChartDemo } from "@/components/chart-demo"
import { DatePickerDemo } from "@/components/date-picker-demo"
import { ComboboxDemo } from "@/components/combobox-demo"
import { DialogDemo } from "@/components/dialog-demo"
import { CheckboxDemo } from "@/components/checkbox-demo"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const componentSections = [
    {
      title: "Custom Lunim Components",
      components: [
        { name: "Combobox", description: "Searchable dropdown with Lunim styling" },
        { name: "Date Picker", description: "Calendar-based date selection" },
        { name: "Typography", description: "Consistent text styling" },
        { name: "Data Table", description: "Advanced table with sorting, searching, and selection" }
      ]
    },
    {
      title: "Form Components",
      components: [
        { name: "Buttons", description: "Button variants and states" },
        { name: "Inputs", description: "Text input fields" },
        { name: "Form Controls", description: "Checkboxes, radios, switches" },
        { name: "Selects", description: "Dropdown selections" },
        { name: "Toggles", description: "Toggle buttons and groups" },
        { name: "Progress", description: "Progress indicators" },
        { name: "Radio Group", description: "Radio button groups" },
        { name: "Slider", description: "Range sliders" },
        { name: "Input OTP", description: "One-time password input" },
        { name: "Field", description: "Structured form field layouts" },
        { name: "Input Group", description: "Input with addons and buttons" },
        { name: "Item", description: "Flexible list items with media and content" },
        { name: "Label", description: "Form labels and descriptions" }
      ]
    },
    {
      title: "Layout Components",
      components: [
        { name: "Cards", description: "Content containers" },
        { name: "Separators", description: "Visual dividers" },
        { name: "Skeleton", description: "Loading placeholders" },
        { name: "Tabs", description: "Tabbed navigation" },
        { name: "Accordion", description: "Collapsible content" },
        { name: "Calendar", description: "Interactive date range picker calendar" },
        { name: "Chart", description: "Interactive data visualization" },
        { name: "Command", description: "Command palette interface" },
        { name: "Sidebar", description: "Navigation sidebar" }
      ]
    },
    {
      title: "Navigation Components",
      components: [
        { name: "Breadcrumbs", description: "Navigation breadcrumbs" },
        { name: "Navigation Menu", description: "Main navigation menu" },
        { name: "Pagination", description: "Page navigation" },
        { name: "Menubar", description: "Menu bar navigation" }
      ]
    },
    {
      title: "Data Display Components",
      components: [
        { name: "Tables", description: "Data tables" },
        { name: "Badges", description: "Status indicators" },
        { name: "Avatars", description: "User profile images" },
        { name: "Alerts", description: "Notification messages" }
      ]
    },
    {
      title: "Feedback Components",
      components: [
        { name: "Tooltips", description: "Hover information" },
        { name: "Progress", description: "Progress indicators" },
        { name: "Skeleton", description: "Loading placeholders" }
      ]
    },
    {
      title: "Overlay Components",
      components: [
        { name: "Dialogs", description: "Modal dialogs" },
        { name: "Sheets", description: "Slide-out panels" },
        { name: "Popovers", description: "Floating content" },
        { name: "Tooltips", description: "Hover information" }
      ]
    }
  ]

  const filteredSections = componentSections.map(section => ({
    ...section,
    components: section.components.filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.components.length > 0)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Lunim Design System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
              
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete Lunim Component Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            
             Rebranded components.
          </p>
        </div>

        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {filteredSections.reduce((total, section) => total + section.components.length, 0)} component(s) found
              </p>
            )}
          </div>
        </div>

        {searchQuery ? (
          filteredSections.map((section, index) => (
            <section key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.components.map((component, compIndex) => (
                  <Card key={compIndex}>
                    <CardHeader>
                      <CardTitle>{component.name}</CardTitle>
                      <CardDescription>{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Component found by searching for: &ldquo;{searchQuery}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))
        ) : (
          <>
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Custom Lunim Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Combobox</CardTitle>
                <CardDescription>Searchable dropdown with Lunim styling</CardDescription>
              </CardHeader>
              <CardContent>
                <ComboboxDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Date Picker</CardTitle>
                <CardDescription>Calendar-based date selection</CardDescription>
              </CardHeader>
              <CardContent>
                <DatePickerDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>Consistent text styling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="p">Regular paragraph text</Typography>
                <Typography variant="lead">Lead text for emphasis</Typography>
                <Typography variant="muted">Muted text for subtle information</Typography>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Advanced table with sorting, searching, and selection</CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={[
                    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
                    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
                    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "User" },
                  ]}
                  columns={[
                    { key: "name", label: "Name", sortable: true },
                    { key: "email", label: "Email", sortable: true },
                    { 
                      key: "status", 
                      label: "Status", 
                      sortable: true
                    },
                    { key: "role", label: "Role", sortable: true },
                  ]}
                  searchKey="name"
                  searchPlaceholder="Search users..."
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <nav className="mb-8">
          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-2">
              <Button variant="outline" size="sm">All Components</Button>
              <Button variant="ghost" size="sm">Form Elements</Button>
              <Button variant="ghost" size="sm">Layout</Button>
              <Button variant="ghost" size="sm">Navigation</Button>
              <Button variant="ghost" size="sm">Data Display</Button>
              <Button variant="ghost" size="sm">Feedback</Button>
              <Button variant="ghost" size="sm">Overlays</Button>
            </div>
          </ScrollArea>
        </nav>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Form Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Button variants and states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Primary</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Inactive</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
                <Button variant="destructive" className="w-full">Destructive</Button>
                <div className="flex gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>Text input fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Enter text..." />
                <Input type="email" placeholder="Email address" />
                <Input type="password" placeholder="Password" />
                <Textarea placeholder="Enter message..." />
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>Checkboxes, radios, switches</CardDescription>
              </CardHeader>
              <CardContent>
                <CheckboxDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selects</CardTitle>
                <CardDescription>Dropdown selections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
                
                <NativeSelect defaultValue="option1">
                  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
                  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
                  <NativeSelectOption value="option3">Option 3</NativeSelectOption>
                </NativeSelect>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toggles</CardTitle>
                <CardDescription>Toggle buttons and groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Toggle>Toggle</Toggle>
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>Progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={33} className="w-full" />
                <Progress value={66} className="w-full" />
                <Progress value={100} className="w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Radio Group</CardTitle>
                <CardDescription>Radio button groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">Option 3</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Slider</CardTitle>
                <CardDescription>Range sliders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input OTP</CardTitle>
                <CardDescription>One-time password input</CardDescription>
              </CardHeader>
              <CardContent>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Field </CardTitle>
                <CardDescription>Structured form field layouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field orientation="vertical">
                  <FieldLabel>Email Address</FieldLabel>
                  <FieldContent>
                    <Input type="email" placeholder="Enter your email" />
                    <FieldDescription>We&apos;ll never share your email with anyone else.</FieldDescription>
                  </FieldContent>
                </Field>

                <Field orientation="horizontal">
                  <FieldLabel>Full Name</FieldLabel>
                  <FieldContent>
                    <Input type="text" placeholder="Enter your full name" />
                  </FieldContent>
                </Field>

                <Field orientation="vertical" data-invalid="true">
                  <FieldLabel>Password</FieldLabel>
                  <FieldContent>
                    <Input type="password" placeholder="Enter password" />
                    <FieldError>Password must be at least 8 characters long</FieldError>
                  </FieldContent>
                </Field>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input Group</CardTitle>
                <CardDescription>Input with addons and buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <span className="text-muted-foreground">$</span>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="0.00" />
                </InputGroup>

                <InputGroup>
                  <InputGroupInput placeholder="Enter amount" />
                  <InputGroupAddon align="inline-end">
                    <span className="text-muted-foreground">USD</span>
                  </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                  <InputGroupInput placeholder="Enter email" />
                  <InputGroupAddon align="inline-end">
                    <Button size="sm" variant="outline">Subscribe</Button>
                  </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <span className="text-muted-foreground">@</span>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="username" />
                  <InputGroupAddon align="inline-end">
                    <span className="text-muted-foreground">.com</span>
                  </InputGroupAddon>
                </InputGroup>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Layout Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Content containers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards provide a flexible container for content with consistent styling.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separators</CardTitle>
                <CardDescription>Visual dividers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>Content above</div>
                <Separator />
                <div>Content below</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Item Component</CardTitle>
                <CardDescription>Flexible list items with media and content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Basic Item */}
                <Item>
                  <ItemMedia variant="icon">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Basic Item</ItemTitle>
                    <ItemDescription>Simple item with icon and text</ItemDescription>
                  </ItemContent>
                </Item>

                {/* Item with Image */}
                <Item>
                  <ItemMedia variant="image">
                    <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-xs">IMG</div>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Item with Image</ItemTitle>
                    <ItemDescription>Item featuring an image placeholder</ItemDescription>
                  </ItemContent>
                </Item>

                {/* Item with Actions */}
                <Item>
                  <ItemMedia variant="icon">
                    <div className="w-4 h-4 bg-accent rounded"></div>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Item with Actions</ItemTitle>
                    <ItemDescription>Item that includes action buttons</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </ItemActions>
                </Item>

                {/* Small Item */}
                <Item size="sm">
                  <ItemMedia variant="icon">
                    <div className="w-3 h-3 bg-secondary rounded"></div>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Small Item</ItemTitle>
                    <ItemDescription>Compact item variant</ItemDescription>
                  </ItemContent>
                </Item>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aspect Ratio</CardTitle>
                <CardDescription>Maintain aspect ratios</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                  <div className="flex items-center justify-center text-muted-foreground">
                    16:9 Aspect Ratio
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resizable Panels</CardTitle>
                <CardDescription>Adjustable layouts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">Panel 1</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">Panel 2</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scroll Area</CardTitle>
                <CardDescription>Custom scrollbars</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32 w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="text-sm">Item {i + 1}</div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>Loading placeholders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Interactive date range picker calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarDemo />
              </CardContent>
            </Card>

            {/* Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Chart</CardTitle>
                <CardDescription>Interactive data visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartDemo />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Components */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Navigation Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Breadcrumbs */}
            <Card>
              <CardHeader>
                <CardTitle>Breadcrumbs</CardTitle>
                <CardDescription>Navigation breadcrumbs</CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>

            {/* Pagination */}
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
                <CardDescription>Page navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu</CardTitle>
                <CardDescription>Complex navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Introduction</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>All Components</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* Menubar */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar</CardTitle>
                <CardDescription>Application menu bar</CardDescription>
              </CardHeader>
              <CardContent>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New</MenubarItem>
                      <MenubarItem>Open</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Save</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>

            {/* Context Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Context Menu</CardTitle>
                <CardDescription>Right-click context menu</CardDescription>
              </CardHeader>
              <CardContent>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Back</ContextMenuItem>
                    <ContextMenuItem>Forward</ContextMenuItem>
                    <ContextMenuItem>Reload</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>

            {/* Command */}
            <Card>
              <CardHeader>
                <CardTitle>Command</CardTitle>
                <CardDescription>Command palette</CardDescription>
              </CardHeader>
              <CardContent>
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Display Components */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Data Display Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tables */}
            <Card>
              <CardHeader>
                <CardTitle>Tables</CardTitle>
                <CardDescription>Data tables</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell><Badge>Active</Badge></TableCell>
                      <TableCell>Admin</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                      <TableCell>User</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Tabbed content</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <p className="text-sm text-muted-foreground">Account settings content</p>
                  </TabsContent>
                  <TabsContent value="password">
                    <p className="text-sm text-muted-foreground">Password settings content</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Collapsible content</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other components.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Collapsible */}
            <Card>
              <CardHeader>
                <CardTitle>Collapsible</CardTitle>
                <CardDescription>Simple collapsible content</CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Can I use this in my project?
                      <span>▼</span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                      Yes. Free to use for personal and commercial projects.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Carousel */}
            <Card>
              <CardHeader>
                <CardTitle>Carousel</CardTitle>
                <CardDescription>Image/content carousel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="flex aspect-square items-center justify-center p-6 bg-muted rounded-md">
                          <span className="text-4xl font-semibold">1</span>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex aspect-square items-center justify-center p-6 bg-muted rounded-md">
                          <span className="text-4xl font-semibold">2</span>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex aspect-square items-center justify-center p-6 bg-muted rounded-md">
                          <span className="text-4xl font-semibold">3</span>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </CardContent>
            </Card>

            {/* Empty State */}
            <Card>
              <CardHeader>
                <CardTitle>Empty State</CardTitle>
                <CardDescription>No data placeholder</CardDescription>
              </CardHeader>
              <CardContent>
                <Empty>
                  <div className="text-center py-8">
                    <h3 className="text-lg font-semibold mb-2">No data found</h3>
                    <p className="text-muted-foreground">There are no items to display at this time.</p>
                  </div>
                </Empty>
              </CardContent>
            </Card>

            {/* Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
                <CardDescription>Multi-line text input</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Type your message here..." />
              </CardContent>
            </Card>

            {/* Button Group */}
            <Card>
              <CardHeader>
                <CardTitle>Button Group</CardTitle>
                <CardDescription>Grouped buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex">
                  <Button variant="outline" className="rounded-r-none">Left</Button>
                  <Button variant="outline" className="rounded-none border-l-0">Middle</Button>
                  <Button variant="outline" className="rounded-l-none border-l-0">Right</Button>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
                <CardDescription>Form with validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                    <p className="text-sm text-muted-foreground mt-1">We&apos;ll never share your email.</p>
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button className="w-full">Submit</Button>
                </div>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <Card>
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
                <CardDescription>Application sidebar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-xs border rounded-md bg-sidebar">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Sidebar</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-sidebar-foreground mb-2">Navigation</div>
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-sm hover:bg-sidebar-accent rounded-md cursor-pointer">Dashboard</div>
                        <div className="px-3 py-2 text-sm hover:bg-sidebar-accent rounded-md cursor-pointer">Settings</div>
                        <div className="px-3 py-2 text-sm hover:bg-sidebar-accent rounded-md cursor-pointer">Profile</div>
                        <div className="px-3 py-2 text-sm hover:bg-sidebar-accent rounded-md cursor-pointer">Help</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feedback Components */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Feedback Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Notification messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Spinner */}
            <Card>
              <CardHeader>
                <CardTitle>Spinner</CardTitle>
                <CardDescription>Loading indicator</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <Spinner />
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>User profile images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>LU</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Kbd */}
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Shortcuts</CardTitle>
                <CardDescription>Keyboard key display</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span>Press</span>
                  <Kbd>⌘</Kbd>
                  <span>+</span>
                  <Kbd>K</Kbd>
                  <span>to search</span>
                </div>
              </CardContent>
            </Card>

            {/* Tooltip */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltips</CardTitle>
                <CardDescription>Hover information</CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Overlay Components */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Overlay Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Dialogs */}
            <Card>
              <CardHeader>
                <CardTitle>Dialogs</CardTitle>
                <CardDescription>Modal dialogs with proper cancel functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <DialogDemo />
              </CardContent>
            </Card>

            {/* Alert Dialogs */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Dialogs</CardTitle>
                <CardDescription>Confirmation dialogs</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Alert</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* Sheets */}
            <Card>
              <CardHeader>
                <CardTitle>Sheets</CardTitle>
                <CardDescription>Slide-out panels</CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Sheet content goes here.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            {/* Popovers */}
            <Card>
              <CardHeader>
                <CardTitle>Popovers</CardTitle>
                <CardDescription>Floating content</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Popover Title</h4>
                      <p className="text-sm text-muted-foreground">
                        This is the popover content.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Hover Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Hover Cards</CardTitle>
                <CardDescription>Hover-triggered content</CardDescription>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* Drawer */}
            <Card>
              <CardHeader>
                <CardTitle>Drawer</CardTitle>
                <CardDescription>Mobile-friendly drawer</CardDescription>
              </CardHeader>
              <CardContent>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Drawer Title</DrawerTitle>
                      <DrawerDescription>Drawer description</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Drawer content goes here.
                      </p>
                    </div>
                    <DrawerFooter>
                      <Button>Submit</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>
          </div>
        </section>

          </>
        )}

        <footer className="border-t border-border bg-card py-8 mt-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Lunim Design System</h3>
            <p className="text-muted-foreground mb-4">
              Complete component library with 56+ rebranded Shadcn/ui components
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>Inter Bold Typography</span>
              <span>•</span>
              <span>Noto Sans Display</span>
              <span>•</span>
              <span>Lunim Color Palette</span>
              <span>•</span>
              <span>Dark Mode Support</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}