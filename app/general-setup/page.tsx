import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings2, CheckCircle, Shield, Info, Building } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function GeneralSetupPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
          <Settings2 className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold sirius-text-gradient">General Setup</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Configure basic entity settings for master data management
        </p>
      </div>

      {/* Search Info */}
      <Alert className="border-primary/20 bg-primary/5">
        <Info className="h-5 w-5 text-primary" />
        <AlertDescription>
          <strong>Quick Access:</strong> Users can search for octopus setup by clicking on the search icon in the
          navigation bar
        </AlertDescription>
      </Alert>

      {/* Configuration Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Master Company Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-primary">Master Company</CardTitle>
                <p className="text-sm text-muted-foreground">Define entity as master company</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg border-2 border-green-200 bg-green-50">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Enable Master Company</span>
                </div>
                <p className="text-sm text-green-700">
                  Set as <code className="bg-green-200 px-2 py-1 rounded">true</code> to define this entity as the
                  master company
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-3">
              <Badge className="bg-green-100 text-green-800">Required Setting</Badge>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">What this does:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Designates this entity as the primary data source</li>
                  <li>• Enables data synchronization to other entities</li>
                  <li>• Establishes central data management control</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Synchronization Control Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-primary">Synchronization Control</CardTitle>
                <p className="text-sm text-muted-foreground">Enable or disable sync for this company</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg border-2 border-orange-200 bg-orange-50">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Disable Sync</span>
                </div>
                <p className="text-sm text-orange-700">
                  Mark as <code className="bg-orange-200 px-2 py-1 rounded">true</code> to disable synchronization for
                  this company
                </p>
              </div>
              <Switch />
            </div>

            <div className="space-y-3">
              <Badge variant="outline" className="border-orange-200 text-orange-800">
                Optional Setting
              </Badge>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">When to use:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Temporarily stop all sync operations</li>
                  <li>• Maintenance or troubleshooting periods</li>
                  <li>• Testing configurations without affecting data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <Card className="sirius-gradient text-white">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Configuration Summary</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              These fundamental settings establish your entity's role in the master data management ecosystem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Master Company = True</h3>
                <p className="text-sm text-white/80">
                  This entity becomes the authoritative source for master data across all connected entities
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Disabled = False</h3>
                <p className="text-sm text-white/80">
                  Synchronization is active and data will flow from this master company to other entities
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
