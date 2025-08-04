"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Building, Settings, CheckCircle, Users, Database, Shield, Globe, ArrowRight, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const environmentSteps = [
  {
    title: "Configure <Company Code>",
    description:
      "Put the respective entity name in which you are going to synchronize data from the <master data company>.",
    highlight: ["Company Code", "master data company"],
  },
  {
    title: "Select <Authorization Method>",
    description: "Choose one of the authorization methods from the drop-down list based on your <tenant requirements>.",
    highlight: ["Authorization Method", "tenant requirements"],
  },
  {
    title: "Verify <Status>",
    description:
      "The status is auto-updated as <connected> when you choose the company name in the environment configuration.",
    highlight: ["Status", "connected"],
  },
]

export default function EnvironmentConfigPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Building className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Environment Configuration</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure entity connections and environment settings for data synchronization.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Environment configuration allows you to set up connections between entities and define authorization methods
            for secure data synchronization.
          </AlertDescription>
        </Alert>

        {/* Configuration Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Configuration Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {environmentSteps.map((step, index) => (
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

        {/* Configuration Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General Tab */}
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                General Tab
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Company Code */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Company Code
                  </h3>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">Required</Badge>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    Put the respective entity name in which you are going to synchronize data from the master data
                    company.
                  </p>
                  <code className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                    Example: SUBSIDIARY-001, BRANCH-UK
                  </code>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Status
                  </h3>
                  <Badge variant="outline" className="border-green-200 text-green-800">
                    Auto-Updated
                  </Badge>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    The status is auto-updated as{" "}
                    <code className="bg-green-200 dark:bg-green-800 px-1 rounded">connected</code> when you choose the
                    company name in the environment configuration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authorization */}
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                Authorization Method
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                Choose one of the authorization methods from the drop-down list:
              </p>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Building className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">None</p>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      Synchronize data between entities within a tenant
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-800 dark:text-blue-200">Basic & AAD</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      Synchronize data between multi-tenant environments
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environment Details */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              Environment Configuration Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <h3 className="font-semibold">Company Name</h3>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border">
                  <p className="text-sm text-muted-foreground">
                    Choose one of the companies from the list of companies
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-green-600" />
                  <h3 className="font-semibold">Environment Name</h3>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border">
                  <p className="text-sm text-muted-foreground">This field auto-populates</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-600" />
                  <h3 className="font-semibold">Domain Name</h3>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border">
                  <p className="text-sm text-muted-foreground">This field auto-populates</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stream Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              Stream Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              Click on <strong>prepare and stream action</strong> to open the SiriusOctopus365 stream page and view the
              list of templates.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Template Management</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                Click on <strong>new</strong> and configure the templates where tables are defined which need to be
                synchronized from the master data company to other entities.
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                This will redirect to Template Configuration where you can manage sync templates.
              </div>
            </div>

            {/* Stream Templates Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Stream Templates View"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-3">Next: Template Configuration</h3>
              <p className="text-muted-foreground mb-4">
                After configuring the environment, proceed to set up synchronization templates and table selection.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/master-data-setup/template-config">
                  Configure Templates
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
