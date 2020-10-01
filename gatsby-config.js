module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Colorado Sun Projects Home`,
    description: `A starter that includes react-bootstrap and react-icons, along with SASS compilation.`,
    author: `Billy Jacoby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Franklin:300,400,700,800,900', 'Martel:300,400,700,800,900', 'IBM Plex Mono', 'Martel Sans:200,400,700,800,900']
        }
      }
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "1E2rhBYsupapyATKo2O8tl1J-EEJpWc4P4gYDQo9d4KE",
    
        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        spreadsheetName: "OutsideMoney",
    
        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: "GoogleSpreadsheet",
    
        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        credentials: {
				  client_email: "gatsby@candidate-explorer.iam.gserviceaccount.com",
				  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoRvS3YbuGkx6o\nmAgcQoQULnfLgyzEOYkxR9U7p0O4EbTUTTlgq//R4aeqyATcw2rpPtO4qjOTQzZ4\nlJzajP11CTsH/pdXE75G2+HcwRpdALia744tO8CBvEP/S/AyAQTKthSF6KLAR9v0\npatjt/Fd5CfjBTw8/BD1uuUyB9z2CPizQr0dvdPrWxt87jOchEyZeqXHV4S8LIXA\nfd3jgMrmrygMbICuW6X00GJOASpd/M5oWq68iHOplt+qnnb5KRycrxrCsO/U9eMv\nLL99QZVeOmct2Ur5U8fcgglwW3tZ1dYuPekJi/pW7Ba5y2pySn1OopZIkBRHwty0\nneTwC2v9AgMBAAECggEADZLTpdXN+41Ibs78myhJC8ZdHAmzsGGiYwWT+fYvAdz5\nGhrfOEtcx5WNIbsf8UgYtUG/xZMtCoGPFkDej3PJ9LPO6CvYEfUMvHMmD9l1AprO\nnpNuLiXgtwD0TIEtRHX36KYGl8VBGNjIXD6KHvFfwx6755Ws2zp138G4lRrfRD/T\n/xXjjm71NnhAyYParDzH6MWbcfwENcipwFJzZod50kQvXPnm3Nh5nl3c3lxTqjNd\npvJpiwwYoD/BGmyoaNBPVx9ibn6bjEac7WBP1ngSTt6Jlh+kO4EZHdX7kJ9ymq3x\nw1FDQhb24x/tcooDZO2+5rmGF9heHXIHrF+Hq7e7PQKBgQDnPoRuwFj8I0XhEkwj\nNeMOeZUwzALnb95D4D6UdP5bsggdYoRlPJZ2JSPA0FqMoNVm8UgN8eZGNOeAc/tl\nttwi86CFmiIGPzZL1EXH1EYh9e88Fw6SeN6LHj+F7S7pl+upFgfUQ44Y0bmnVFOY\ntZbmScuQ07U6nwFTPAGnmTdcowKBgQC6SsNPuKdJEDdbSxvEft6kBR+jpxPwbJip\n0RBPZ8B8ALj6PT2GD2INBCVIZBJx98PUaQJ+kFhb1PioJtAg5OYoYyyg+vyc9pw6\n2CeO8JPYL7TUX4SQvIHc3IWQvGGy2+z2pnSe4rbS6EE9/p6cwtQsWCEnxe5mgmk/\nz4bIz/j+3wKBgCr65riDDccHc1SLBxXATUyCcqVYNe34T/KDun3zZNd8Np/nkL4U\nTc71xjhvQXVD64YvsHnPDULdUG4CoKZeH3prl9ldNZe9pgTgFnw2yzZCtM2RZ4b3\n6j0nSR1GYWLPduC9lITybXXVfVFJjiQjFEIHU0u+3b9gkGl9DL2u76hLAoGAL9zh\njWv93vHBpz0G51dJUI7YcC2PG+hq2MaUEDKx66or3G87jWQKZxm3kn/TlWB4+ev4\n7heb/AwdzuYZ9zmYQKwqXTnfCVz7Cstabok1Ewg+x4m6/4zPOLWXw3YDC/chTMW7\nlM7e9hUiHhF7Iv+Tj8kcy6E4/TFoZTKmiJWWfbUCgYA6pdmJjmXPPfWRBTJ4erHF\n8+T46am2Vk29BAY2jpECUEEFE4+VqVolD7U44u5avM6EFAfJ8enGkBXpwdzXppJ+\nEhHYctQbZRzL8g88re6etCjjEB4FPycU/XWzv2kRsj0yh0WrzGpha32owKD/i3RO\nSrZGg2tIkB8hkcN0+kTtwg==\n-----END PRIVATE KEY-----\n"
			  },
    
        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,
    
        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
