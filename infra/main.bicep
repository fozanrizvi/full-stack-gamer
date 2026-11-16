// Static Web App (Free tier) for the marketing site. Deploy into an existing resource group:
//   az deployment group create -g <rg> -f infra/main.bicep
targetScope = 'resourceGroup'

@description('Static Web Apps are only available in a few regions; this is the content origin, assets are served from the edge.')
@allowed(['westus2', 'centralus', 'eastus2', 'westeurope', 'eastasia'])
param location string = 'westus2'

param name string = 'swa-fullstackgamer'

resource swa 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    // Deployed from GitHub Actions with a deployment token; no repo link or build on the Azure side.
    provider: 'None'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
  }
}

output defaultHostname string = swa.properties.defaultHostname
output name string = swa.name
