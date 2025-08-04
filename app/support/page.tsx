"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileQuestion, Mail, Phone, Globe, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const faqItems = [
  {
    question: "How do I set up the master company?",
    answer:
      "Navigate to General Setup and set the Master Company field to 'true'. This designates the entity as the primary data source for synchronization.",
  },
  {
    question: "What's the difference between Real Time and Scheduler sync?",
    answer:
      "Real Time sync updates data immediately after changes, while Scheduler sync runs at predetermined intervals. Hybrid mode combines both approaches.",
  },
  {
    question: "How do I configure field-level filters?",
    answer:
      "Go to Filter & Scenarios page and use the 'manage and filter action' to set up field-level filters like range filters (e.g., '10000..20000').",
  },
  {
    question: "Can I stop synchronization temporarily?",
    answer:
      "Yes, use the Sync Control page to set the status to 'Hold' which will disable synchronization temporarily without losing your configuration.",
  },
  {
    question: "What authorization methods are available?",
    answer:
      "There are two methods: 'None' for single tenant synchronization within entities, and 'Basic & AAD' for multi-tenant synchronization between different tenants.",
  },
  {
    question: "How do I configure scenario-based conditions?",
    answer:
      "In the Filter & Scenarios section, use 'manage and scenario action' to set up conditions based on field values and company entities for complex business logic.",
  },
]

export default function SupportPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileQuestion className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Help & Support</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Get assistance with Sirius Octopus setup and configuration.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Our support team is here to help you with any questions about Sirius Octopus 365 setup and configuration.
          </AlertDescription>
        </Alert>

        {/* Contact Information */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            <p className="text-muted-foreground mt-2">Reach out to our support team for assistance</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Website</h3>
                  <p className="text-blue-700">www.siriusapp.co.uk</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-green-800">Email</h3>
                  <p className="text-green-700">info@siriusapp.co.uk</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">Phone</h3>
                  <p className="text-purple-700">01296 328689</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="text-xl text-primary">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              About Sirius Octopus
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">About Sirius Octopus 365</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sirius Octopus 365 is a product of SiriusApp, part of the Dogma Group family of companies
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
