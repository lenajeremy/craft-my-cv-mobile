export const FONTS = {
    "Manrope-Bold": require("@/assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("@/assets/fonts/Manrope-ExtraBold.ttf"),
    "Manrope-ExtraLight": require("@/assets/fonts/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("@/assets/fonts/Manrope-Light.ttf"),
    "Manrope-Medium": require("@/assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("@/assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("@/assets/fonts/Manrope-SemiBold.ttf"),
}

export type Font = keyof typeof FONTS

export const BASE_URL = "https://2c19-102-88-37-74.ngrok-free.app"