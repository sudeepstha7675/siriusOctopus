"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { FileText, Settings, Database, CheckCircle, Hash, Shield, Trash2, Edit, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const templateSteps = [
  {
    title: "Select <Table ID>",
    description:
      "Choose the list of tables (table ID) which you want to synchronize from the <master data company> to other entities.",
    highlight: ["Table ID", "master data company"],
  },
  {
    title: "Set <Priority>",
    description: "Enter the priority number that defines the priority for <synchronizing tables>.",
    highlight: ["Priority", "synchronizing tables"],
  },
  {
    title: "Configure <Permissions>",
    description:
      "Set the appropriate permissions for <insert>, <modify>, and <delete> operations on synchronized tables.",
    highlight: ["Permissions", "insert", "modify", "delete"],
  },
]

const fieldInformation = [
  {
    field: "No of Fields available",
    description: "Specifies the number of fields available in the table",
    icon: Hash,
    color: "blue",
  },
  {
    field: "No of fields enable",
    description: "Specifies the number of enabled fields",
    icon: CheckCircle,
    color: "green",
  },
  {
    field: "No of fields to validate",
    description: "Specifies the number of validated fields",
    icon: Shield,
    color: "purple",
  },
  {
    field: "No of database records",
    description: "Specifies the number of records available in the database",
    icon: Database,
    color: "orange",
  },
]

export default function TemplateConfigPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileText className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Template Configuration</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure templates and define tables for data synchronization.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Templates define which tables are synchronized from the master data company to other entities. Configure
            permissions and priorities for optimal data flow.
          </AlertDescription>
        </Alert>

        {/* Configuration Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Template Configuration Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {templateSteps.map((step, index) => (
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
          </CardContent>
        </Card>

        {/* Field Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              Field Configuration Options
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Priority */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-purple-600" />
                  <h3 className="font-semibold">Priority</h3>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Enter the priority number that defines the priority for synchronizing tables.
                  </p>
                </div>
              </div>

              {/* Enable */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <h3 className="font-semibold">Enable</h3>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Tick the box to enable the synchronization of the table to different entities.
                  </p>
                </div>
              </div>

              {/* Allow Manual Insert */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Edit className="h-4 w-4 text-blue-600" />
                  <h3 className="font-semibold">Allow Manual Insert</h3>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Tick the box to allow the insert permission in the synchronized table.
                  </p>
                </div>
              </div>

              {/* Allow Manual Modify */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-orange-600" />
                  <h3 className="font-semibold">Allow Manual Modify</h3>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Tick the box to allow the modify permission in the synchronized table.
                  </p>
                </div>
              </div>

              {/* Allow Manual Delete */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4 text-red-600" />
                  <h3 className="font-semibold">Allow Manual Delete</h3>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Tick the box to allow the delete permission in the synchronized table.
                  </p>
                </div>
              </div>

              {/* Skip Table Triggers */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-indigo-600" />
                  <h3 className="font-semibold">Skip Table Triggers</h3>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    Tick the box to skip table event triggers (Insert, Modify, Delete, Rename).
                  </p>
                </div>
              </div>
            </div>

            {/* Delete Records Before Processing */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Trash2 className="h-4 w-4 text-yellow-600" />
                <h3 className="font-semibold">Delete Records Before Processing</h3>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Tick the box to allow data deletion in entities before synchronizing data from the master data
                  company.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field Information */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Additional Field Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fieldInformation.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <item.icon className={`h-4 w-4 text-${item.color}-600`} />
                    <h3 className="font-semibold">{item.field}</h3>
                  </div>
                  <div
                    className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 p-4 rounded-lg border border-${item.color}-200 dark:border-${item.color}-800`}
                  >
                    <p className={`text-sm text-${item.color}-800 dark:text-${item.color}-200`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last Date of Synchronization */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-slate-600" />
                <h3 className="font-semibold">Last Date of Synchronization</h3>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  Specifies the last date of synchronization for tracking purposes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field Level Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Field Level Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 mb-3">
                Click on <strong>manage and fields action</strong> to configure the field level synchronization setup
                within the table selected. This action is available in the template configuration interface.
              </p>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Access: Template List → Select Template → Manage and Fields Action
                </span>
              </div>
            </div>

            {/* Field Level Configuration Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Field Level Configuration Interface"
                className="w-full object-contain"
              />
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-3">Next Steps</h3>
              <p className="text-muted-foreground mb-4">
                After configuring your templates, proceed to field management for granular control over data
                synchronization.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/master-data-setup/field-management">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure Field Management
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
