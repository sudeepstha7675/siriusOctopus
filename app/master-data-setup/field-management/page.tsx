"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Info, Settings, CheckCircle, Filter, Layers, Hash, Edit, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fieldConfigSteps = [
  {
    title: "Access <manage and fields action>",
    description:
      "Click on <manage and fields action> to configure the field level synchronization setup within the table selected.",
    highlight: ["manage and fields action"],
  },
  {
    title: "Configure <Enable> fields",
    description:
      "Select fields one by one and enable (tick) for synchronization or use <Toggle> to enable/disable all fields at once.",
    highlight: ["Enable", "Toggle"],
  },
  {
    title: "Set <Validation> rules",
    description:
      "Enable field validation for synchronization or use <Toggle> to enable/disable validation for all fields.",
    highlight: ["Validation", "Toggle"],
  },
]

export default function FieldManagementPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Settings className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Field Management</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure field-level synchronization, validation, and filtering for precise data control.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Field management provides granular control over data synchronization, allowing you to specify exactly which
            fields sync, how they're validated, and under what conditions.
          </AlertDescription>
        </Alert>

        {/* Configuration Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Field Configuration Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {fieldConfigSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-border/30 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">
                      <HighlightedText text={step.title} highlights={step.highlight || []} />
                    </h3>
                    <p className="text-muted-foreground">
                      <HighlightedText text={step.description} highlights={step.highlight || []} />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Field Level Configuration Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Field Level Configuration Interface"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Field Configuration Options */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Field Configuration Options
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enable Fields */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  >
                    Field Control
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary">Enable</h3>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Fields can be selected individually and enabled (tick) for synchronization or use "Toggle" to
                    enable/disable all fields at once.
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Bulk toggle available</span>
                  </div>
                </div>
              </div>

              {/* Validate Field */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    Validation
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary">Validate Field</h3>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Fields can be selected individually and enabled (tick) for validation or use "Toggle" to
                    enable/disable validation for all fields.
                  </p>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Data validation control</span>
                  </div>
                </div>
              </div>

              {/* Priority */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                  >
                    Ordering
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary">Priority</h3>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Enter the priority number that defines the priority for synchronizing fields.
                  </p>
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Numeric priority (1 = highest)</span>
                  </div>
                </div>
              </div>

              {/* Allow Manual Modify */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
                  >
                    Permissions
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary">Allow Manual Modify</h3>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Fields can be selected to allow/disallow modification after data synchronization or use "Toggle" to
                    control all fields at once.
                  </p>
                  <div className="flex items-center gap-2">
                    <Edit className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">Post-sync modification control</span>
                  </div>
                </div>
              </div>

              {/* Constant Value */}
              <div className="space-y-4 lg:col-span-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
                    Data Override
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary">Constant Value</h3>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Enter specific values in respective fields to synchronize the same specified values from the master
                    data company to different entities.
                  </p>
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium">Override field values with constants</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-green-800">Filter Configuration</h3>
              </div>
              <p className="text-green-700 text-sm mb-4">Set up field-level filters for selective synchronization</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
              >
                <Link href="/filter-scenarios">Configure Filters</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-800">Scenario Management</h3>
              </div>
              <p className="text-purple-700 text-sm mb-4">Configure scenario-based synchronization conditions</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
              >
                <Link href="/filter-scenarios">Manage Scenarios</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
