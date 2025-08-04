"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Database, CheckCircle, Search, Settings, Shield, Building, FileText, Info, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const setupSteps = [
  {
    title: "Search for <octopus setup>",
    description: "Users can search for octopus setup by clicking on the <search icon> in the navigation bar.",
    highlight: ["octopus setup", "search icon"],
  },
  {
    title: "Configure <Master Company>",
    description: "Set the <Master Company> field as <true> to define the entity as a master company.",
    highlight: ["Master Company", "true"],
  },
  {
    title: "Set <Disabled> status",
    description: "If you want to disable the synchronization for the company, mark the <Disabled> field as <true>.",
    highlight: ["Disabled", "true"],
  },
]

export default function MasterDataSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Database className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">General Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure basic octopus setup for master data management.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Search className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            <strong>Quick Search:</strong> Users can search for octopus setup by clicking on the search icon in the
            navigation bar.
          </AlertDescription>
        </Alert>

        {/* How to Access Setup */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              How to Access Octopus Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {setupSteps.map((step, index) => (
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

            {/* Setup Overview Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Octopus Setup Search Interface"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Basic Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Basic Configuration Fields
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Master Company */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Master Company
                  </h3>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Required</Badge>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    This field is set as <code className="bg-green-200 dark:bg-green-800 px-1 rounded">true</code> to
                    define the entity as a master company.
                  </p>
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-600" />
                    Disabled
                  </h3>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    If you want to disable the synchronization for the company, mark this{" "}
                    <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">true</code>.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-3">Next: Configure Synchronization Mode</h3>
              <p className="text-muted-foreground mb-4">
                After setting up the basic configuration, proceed to configure the synchronization mode and settings.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/sync-configuration">
                  Configure Sync Mode
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Environment Setup</h3>
              </div>
              <p className="text-blue-700 text-sm mb-4">Configure entity connections and authorization</p>
              <Link
                href="/master-data-setup/environment-config"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-medium"
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-green-800">Template Management</h3>
              </div>
              <p className="text-green-700 text-sm mb-4">Create and manage sync templates</p>
              <Link
                href="/master-data-setup/template-config"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 text-sm font-medium"
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-800">Field Configuration</h3>
              </div>
              <p className="text-purple-700 text-sm mb-4">Setup field-level sync rules</p>
              <Link
                href="/master-data-setup/field-management"
                className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 text-sm font-medium"
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
