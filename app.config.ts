import 'dotenv/config'

export default {
  "expo": {
    "name": "list-compras",
    "slug": "list-compras",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "listcompras",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.cledsonleite.listcompras"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.cledsonleite.listcompras",
      "versionCode": 1
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "3bcc400d-62ad-483e-a0ca-4d5c432118fd"
      },
      "EXPO_PUBLIC_CONVEX_URL": process.env.EXPO_PUBLIC_CONVEX_URL
    },
    "owner": "cledsonleite"
  }
}