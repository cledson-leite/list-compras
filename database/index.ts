import { ConvexClient } from "convex/browser"
import Constants from 'expo-constants'
export const convexClient = new ConvexClient(Constants.expoConfig?.extra?.EXPO_PUBLIC_CONVEX_URL!)