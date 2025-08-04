"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Power, Play, Pause, Settings, CheckCircle, XCircle, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const syncControlSteps = [
  {
    title: "Stop Synchronization",
    description:
      "Click on <execute and set status on hold> if you want to stop the synchronization process (Disabled field is <true>).",
    highlight: ["execute and set status on hold", "true"],
  },
  {
    title: "Start Synchronization",
    description:
      "If you want to start the synchronization process, click on <execute and set the status to ready> (Disabled field is <false>).",
    highlight: ["execute and set the status to ready", "false"],
  },
]

export default function SyncControlPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Power className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Sync Control</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Manage synchronization execution, monitoring, and status control.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Sync control allows you to start, stop, and monitor data synchronization processes across all configured
            entities and templates.
          </AlertDescription>
        </Alert>

        {/* Sync Control Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Synchronization Control
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {syncControlSteps.map((step, index) => (
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

        {/* Execution Control */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Power className="h-5 w-5 text-primary" />
              </div>
              Execution Control Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Stop Synchronization */}
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                    <Pause className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Stop Synchronization</h3>
                    <Badge variant="destructive" className="mt-1">
                      Hold Status
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                  Click on <strong>execute and set status on hold</strong> if you want to stop the synchronization
                  process (Disabled field is true).
                </p>
                <div className="bg-white dark:bg-background p-4 rounded-md border border-red-300 dark:border-red-700">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800 dark:text-red-200">Action Location:</span>
                  </div>
                  <p className="text-xs text-red-700 dark:text-red-300">
                    Available in the Sirius Octopus interface under Sync Control → Execute Actions
                  </p>
                </div>
              </div>

              {/* Start Synchronization */}
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Start Synchronization</h3>
                    <Badge className="bg-green-600 text-white hover:bg-green-700 mt-1">Ready Status</Badge>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                  If you want to start the synchronization process, then click on{" "}
                  <strong>execute and set the status to ready</strong> (Disabled field is false).
                </p>
                <div className="bg-white dark:bg-background p-4 rounded-md border border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">Action Location:</span>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    Available in the Sirius Octopus interface under Sync Control → Execute Actions
                  </p>
                </div>
              </div>
            </div>

            {/* Access Information */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                How to Access Sync Control Actions
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                These execution control actions are available within the Sirius Octopus 365 application interface.
                Navigate to the sync control section to access these functions.
              </p>
              <div className="flex items-center gap-2">
                <Power className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Access Path: Sirius Octopus → Sync Management → Execution Control
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Overview */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Synchronization Status Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  <Info className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Status Monitoring</p>
                  <p className="text-xs text-muted-foreground">Real-time sync status</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Ready State</p>
                  <p className="text-xs text-muted-foreground">Active synchronization</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  <XCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Hold State</p>
                  <p className="text-xs text-muted-foreground">Paused synchronization</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  <Settings className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Configuration</p>
                  <p className="text-xs text-muted-foreground">Setup management</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary and Next Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-3">Sync Control Summary</h3>
              <p className="text-muted-foreground mb-4">
                Sync control provides centralized management of all synchronization processes, allowing you to start,
                stop, and monitor data flow across your configured entities and templates.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm border border-border">
                  <Play className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Start Sync</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm border border-border">
                  <Pause className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">Stop Sync</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm border border-border">
                  <Info className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Monitor Status</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm border border-border">
                  <Settings className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Manage Config</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/support">
                    <Info className="h-4 w-4 mr-2" />
                    Get Support
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/introduction">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Back to Overview
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
