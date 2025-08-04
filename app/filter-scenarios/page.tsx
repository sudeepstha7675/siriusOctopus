"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Filter, Layers, Settings, Hash, Eye, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const filterSteps = [
  {
    title: "Access <manage and filter action>",
    description:
      "Click on <manage and filter action> to configure the filter level synchronization setup within the table selected.",
    highlight: ["manage and filter action"],
  },
  {
    title: "Configure <Field Filters>",
    description:
      "Set up filters like <10000..20000> to synchronize only records within specified ranges from the master data company.",
    highlight: ["Field Filters", "10000..20000"],
  },
  {
    title: "Apply <Range Filters>",
    description:
      "Use range notation to filter data based on field values, ensuring only relevant records are synchronized.",
    highlight: ["Range Filters"],
  },
]

const scenarioSteps = [
  {
    title: "Access <manage and scenario action>",
    description: "Click on <manage and scenario action> to configure scenario-wise filter level synchronization setup.",
    highlight: ["manage and scenario action"],
  },
  {
    title: "Define <Conditions>",
    description: "Click on <action and conditions> to define scenario-wise conditions for data synchronization.",
    highlight: ["Conditions", "action and conditions"],
  },
  {
    title: "Configure <Field-Based Rules>",
    description: "Set up conditions based on field values, company entities, and business logic requirements.",
    highlight: ["Field-Based Rules"],
  },
]

export default function FilterScenariosPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Filter className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Filter & Scenarios</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure advanced filtering and scenario-based synchronization conditions.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Filters and scenarios provide precise control over which data gets synchronized and under what conditions,
            enabling complex business logic implementation.
          </AlertDescription>
        </Alert>

        {/* Filter Management */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              Filter Management
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {filterSteps.map((step, index) => (
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

            {/* Filter Example */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Filter Example</h3>
              <div className="bg-white dark:bg-background p-4 rounded-md border border-green-300 dark:border-green-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Field:</p>
                    <p className="text-sm text-green-600 dark:text-green-400">"No." field</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Filter:</p>
                    <p className="text-sm text-green-600 dark:text-green-400">"10000..20000"</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Type:</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Range Filter</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Result:</strong> Only records with "No." field values between 10000 and 20000 will be
                    synchronized to different entities from the master data company.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Note:</strong> Filter level configuration within a field can be customized as per
                  requirements.
                </p>
              </div>
            </div>

            {/* Filter Configuration Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Filter Configuration Interface"
                className="w-full object-contain"
              />
            </div>

            {/* Filter Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardContent className="p-6 text-center">
                  <Hash className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Range Filters</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Filter by value ranges like "1000..5000"</p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-6 text-center">
                  <Eye className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Exact Match</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Filter by specific values or patterns</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Conditional</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Filter based on field conditions</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Scenario Management */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              Scenario Management
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {scenarioSteps.map((step, index) => (
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

            {/* Scenario Configuration */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                Scenario Configuration Access
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                Click on <strong>action and conditions</strong> to define scenario-wise conditions to synchronize data.
                This action is available within the field management interface when configuring specific templates.
              </p>
              <div className="bg-white dark:bg-background p-4 rounded-md border border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Access Method:</span>
                </div>
                <p className="text-xs text-purple-700 dark:text-purple-300">
                  Navigate to Template Configuration → Select Template → Manage Fields → Action and Conditions
                </p>
              </div>
            </div>

            {/* Scenario Example */}
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-3">Example Scenario: SC-B</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-background p-4 rounded-md border">
                  <p className="text-sm mb-2">
                    <strong>Condition:</strong> Based on field and company
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <span className="font-medium">Field No:</span> 1
                    </div>
                    <div>
                      <span className="font-medium">Field Value Type:</span> Fixed Value
                    </div>
                    <div>
                      <span className="font-medium">Fixed Value:</span> 40000 (GL No)
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Result:</strong> Global dimension 1 code: The Business unit will be synchronized to the GL
                      no. 40000 in entity A.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario Configuration Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Scenario Configuration Interface"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-green-800">Sync Control</h3>
              </div>
              <p className="text-green-700 text-sm mb-4">Manage synchronization execution and monitoring</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
              >
                <Link href="/sync-control">Configure Sync Control</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Support</h3>
              </div>
              <p className="text-blue-700 text-sm mb-4">Get help with advanced configuration</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
              >
                <Link href="/support">Get Support</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
