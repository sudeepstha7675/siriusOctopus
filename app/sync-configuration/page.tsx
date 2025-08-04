"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HighlightedText } from "@/components/highlighted-text"
import { Clock, Zap, Network, Settings, Calendar, Info, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const syncModes = [
  {
    title: "Real Time",
    description:
      "The data is synchronized from the master data company to the other entities immediately after the data is created/modified in the master data company.",
    icon: Zap,
    color: "green",
    highlight: ["Real Time", "immediately"],
  },
  {
    title: "Scheduler",
    description: "The data is synchronized from the master data company to the other entities on a scheduler basis.",
    icon: Clock,
    color: "blue",
    highlight: ["Scheduler", "scheduler basis"],
  },
  {
    title: "Real Time & Scheduler",
    description:
      "The data is synchronized from the master data company to the other entities both on a real-time and scheduler basis.",
    icon: Network,
    color: "purple",
    highlight: ["Real Time & Scheduler", "real-time and scheduler"],
  },
]

const schedulerSteps = [
  {
    title: "Open Scheduler",
    description: "The open scheduler option is populated if the <scheduler> mode is selected.",
    highlight: ["scheduler"],
  },
  {
    title: "Setup & Connection",
    description: "Click on <setup and connection action> to configure the list of entities for data synchronization.",
    highlight: ["setup and connection action"],
  },
  {
    title: "Create New Entity",
    description: "Click on the <New> action to create and configure the new entity for data synchronization.",
    highlight: ["New"],
  },
]

export default function SyncConfigurationPage() {
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
            <h1 className="text-3xl font-black text-primary">Sync Configuration</h1>
            <p className="text-muted-foreground text-lg mt-1">Configure synchronization modes and timing settings.</p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Choose the appropriate synchronization mode based on your business requirements and data update frequency.
          </AlertDescription>
        </Alert>

        {/* Synchronization Modes */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              Synchronization Modes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-6">
              {syncModes.map((mode, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-${mode.color}-100 dark:bg-${mode.color}-900 flex items-center justify-center`}
                    >
                      <mode.icon className={`h-5 w-5 text-${mode.color}-600 dark:text-${mode.color}-400`} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{mode.title}</h3>
                  </div>
                  <div
                    className={`bg-${mode.color}-50 dark:bg-${mode.color}-950/20 p-4 rounded-lg border border-${mode.color}-200 dark:border-${mode.color}-800`}
                  >
                    <p className={`text-sm text-${mode.color}-800 dark:text-${mode.color}-200`}>
                      <HighlightedText text={mode.description} highlights={mode.highlight || []} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real Time Latency */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              Real Time Latency Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold">Real Time Latency (Minutes)</h3>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Timing Control</Badge>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Enter the latency time based on which data synchronization starts from the master data company to
                  other entities. This setting controls the delay before synchronization begins.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduler Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              Scheduler Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {schedulerSteps.map((step, index) => (
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

            {/* Scheduler Configuration Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Scheduler Configuration Interface"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-3">Next: Environment Configuration</h3>
              <p className="text-muted-foreground mb-4">
                After configuring synchronization modes, set up entity connections and authorization methods.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/master-data-setup/environment-config">
                  Configure Environment
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
