"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Calendar } from '@/components/ui/calendar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Toggle } from '@/components/ui/toggle';
import { AlertCircle, Info, CheckCircle2, XCircle, Bell, Mail, User, Settings, Menu, ChevronDown, Bold, Underline, Strikethrough } from 'lucide-react';
import { ParticleCircle } from '@/components/ui/particle-circle';

export default function ComponentTestbed() {
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option-one');

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              shadCN Components Gallery
            </h1>
            <Button variant="outline" asChild>
              <a href="/backgroundEffects">View Background Effects →</a>
            </Button>
          </div>
          <p className="text-gray-400 text-lg">
            A comprehensive showcase of all available shadCN UI components
          </p>
        </div>

        <div className="grid gap-12">
          {/* Buttons Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Buttons & Badges</h2>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>All button styles and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-400">Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-400">Sizes</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-400">Badges</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Components Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Form Components</h2>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Inputs & Controls</CardTitle>
                <CardDescription>Form input components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={checkboxChecked}
                    onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="cursor-pointer">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="notifications"
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Label htmlFor="notifications" className="cursor-pointer">Enable notifications</Label>
                </div>
                <div className="space-y-2">
                  <Label>Radio Group</Label>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one" className="cursor-pointer">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" className="cursor-pointer">Option Two</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Select</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Slider: {sliderValue[0]}</Label>
                  <Slider 
                    value={sliderValue} 
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Progress & Indicators Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Progress & Indicators</h2>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Progress Bars</CardTitle>
                <CardDescription>Loading and progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      Decrease
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      Increase
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the card content area where you can place any content.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>With different content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cards are great for organizing content into sections.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle>Third Card</CardTitle>
                  <CardDescription>More examples</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You can have multiple cards in a grid layout.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Tabs</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>
                          Manage your settings here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Settings content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Accordion Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Accordion</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
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
                      Yes. It comes with default styles that matches the other components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Alerts Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Alerts</h2>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Dialogs Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Dialogs</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your
                          account and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Popover Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Popover</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Max. width</Label>
                          <Input
                            id="maxWidth"
                            defaultValue="300px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </section>

          {/* Tooltip Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Tooltip</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Another tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tooltips provide additional context</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avatar Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Avatar</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skeleton Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Skeleton</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <Skeleton className="h-32 w-full" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Separator Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Separator</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Horizontal</h4>
                    <div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                        <p className="text-sm text-muted-foreground">
                          An open-source UI component library.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>Blog</div>
                        <Separator orientation="vertical" />
                        <div>Docs</div>
                        <Separator orientation="vertical" />
                        <div>Source</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Table Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Table</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV003</TableCell>
                      <TableCell>Unpaid</TableCell>
                      <TableCell>Bank Transfer</TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV004</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Alert Dialog Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Alert Dialog</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
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
          </section>

          {/* Dropdown Menu Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Dropdown Menu</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        With Checkboxes
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>Show Status Bar</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked>Show Activity Bar</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Show Panel</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        With Radio Group
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Position</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value="bottom">
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sheet Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Sheet</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Right Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Profile</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </div>
                      </div>
                      <SheetFooter>
                        <Button>Save changes</Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calendar Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Calendar</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Calendar className="rounded-md border" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Collapsible Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Collapsible</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <Collapsible className="w-full space-y-2">
                  <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                      @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </section>

          {/* Toggle Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Toggle</h2>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Toggle aria-label="Toggle italic">
                    <Settings className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle bold" variant="outline">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle underline" size="sm">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle strikethrough" size="lg" variant="outline">
                    <Strikethrough className="h-4 w-4" />
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
