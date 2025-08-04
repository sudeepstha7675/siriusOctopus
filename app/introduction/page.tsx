"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Info, BookOpen, Database, Zap, Shield, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <BookOpen className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Sirius Octopus 365 Setup Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              A comprehensive guide for configuring Sirius Octopus 365 Master Data Management.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide will walk you through the complete setup and configuration process for Sirius Octopus 365,
            including master data management, environment configuration, and synchronization settings.
          </AlertDescription>
        </Alert>

        {/* What is Sirius Octopus Section */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              What is Sirius Octopus 365?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              Sirius Octopus 365 is a comprehensive Master Data Management solution that enables seamless
              synchronization of data across multiple entities in Microsoft Dynamics 365 Business Central. It automates
              data consistency, reduces manual errors, and ensures all your entities stay perfectly synchronized with
              real-time or scheduled updates.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Real-Time Sync</h3>
                <p className="text-sm text-muted-foreground">Instant data synchronization across all entities</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Smart Configuration</h3>
                <p className="text-sm text-muted-foreground">Field-level control with advanced filtering</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Enterprise Ready</h3>
                <p className="text-sm text-muted-foreground">Multi-tenant support with robust security</p>
              </div>
            </div>

            {/* Setup Guide Image */}
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Sirius Octopus 365 Setup Overview"
                className="w-full object-contain"
              />
            </div>

            {/* Integration Information */}
            <div className="mt-8 bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium text-primary mb-3">Seamless Integration</h3>
              <p className="text-muted-foreground mb-4">
                Sirius Octopus 365 integrates perfectly with Microsoft Dynamics 365 Business Central, providing
                comprehensive master data management while maintaining data integrity and compliance across all your
                business entities.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">D365</span>
                  </div>
                  <span className="text-sm font-medium">Dynamics 365</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">BC</span>
                  </div>
                  <span className="text-sm font-medium">Business Central</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-background px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">MDM</span>
                  </div>
                  <span className="text-sm font-medium">Master Data</span>
                </div>
              </div>
            </div>

            {/* Quick Start Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Button asChild size="lg" className="h-14 text-base font-semibold">
                <Link href="/master-data-setup/general" className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5" />
                  Start Setup Process
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 text-base font-semibold bg-transparent">
                <Link href="/support" className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5" />
                  Get Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              About Sirius Octopus 365
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">About Sirius Octopus 365</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sirius Octopus 365 is a product of SiriusApp. Dogma Group is the new Parent of SiriusApp.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-primary">SiriusApp</h3>
                  <p className="text-sm text-muted-foreground">Leading provider of Microsoft Dynamics 365 solutions</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-primary">Dogma Group</h3>
                  <p className="text-sm text-muted-foreground">
                    Parent company including Dogma Consultancy, Dogma International, and DynamicAI
                  </p>
                </div>
              </div>

              {/* Company Logos Placeholder */}
              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img
                  src="/placeholder.svg?height=200&width=600"
                  alt="Dogma Group Company Logos"
                  className="w-full object-contain"
                />
              </div>

              <div className="pt-6 border-t border-border/20 space-y-2">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span>www.siriusapp.co.uk</span>
                  <span>info@siriusapp.co.uk</span>
                  <span>01296 328689</span>
                  <span>483 Green Lanes, London, N13 4BS</span>
                </div>
                <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                  Dogma Group Limited is registered at 6 Portal Business Park, West Cheshire & Chester, UK, CW6 9DL. VAT
                  Registration No: 330460638. Company No: 12096627
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
