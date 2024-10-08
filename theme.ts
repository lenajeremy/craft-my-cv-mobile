import { createTheme } from '@shopify/restyle';
import { Font } from './constants';

const palette = {
    purple: '#6135FE',
    purple2: "#7254DC",
    purpleLight: "#CEC0FF",
    dark: "#1F242C",
    white: '#FFFFFF',
    neutral: "#4A5568",
    muted: "#7C8289",
    lightGray: "#EAEEF2"
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        mainText: palette.neutral,
        headingText: palette.dark,
        mutedText: palette.muted,
        border: palette.lightGray,
        primary: palette.purple,
        primary2: palette.purple2,
        primaryFaded: palette.purpleLight,
        white: palette.white,
        dark: palette.dark,
    },
    spacing: {
        none: 0,
        line: 2,
        xs: 4,
        s: 8,
        m: 16,
        default: 20,
        l: 28,
        xl: 40,
    },
    textVariants: {
        h1: {
            fontWeight: 'bold',
            fontSize: 28,
            color: "headingText",
            lineHeight: 36,
            fontFamily: "Manrope-ExtraBold" satisfies Font,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: 22,
            color: 'headingText',
            lineHeight: 26,
            fontFamily: "Manrope-Bold" as Font
        },
        h3: {
            fontWeight: "bold",
            fontSize: 20,
            color: "headingText",
            lineHeight: 26,
            fontFamily: "Manrope-Bold" as Font
        },
        title: {
            fontSize: 18,
            fontWeight: 'normal',
            color: "headingText",
            lineHeight: 26,
            fontFamily: "Manrope-SemiBold" as Font
        },
        body: {
            fontSize: 17,
            lineHeight: 20,
            color: "mainText",
            fontFamily: "Manrope-Regular"
        },
        small: {
            fontSize: 13,
            lineHeight: 18,
            color: "mutedText"
        },
        defaults: {
            fontSize: 16,
            lineHeight: 20,
            color: "mainText",
            fontFamily: "Manrope-Regular" as Font
        }
    },
});

const darkTheme = {
    ...theme,
    colors: {
        mainBackground: "#000000",
        mainText: "#A8A8A8",
        headingText: "#F5F5F5",
        mutedText: "#737373",
        border: "#262626",
        primary: palette.purple,
        primary2: palette.purple2,
        primaryFaded: palette.purpleLight,
        white: palette.white,
        dark: "#000000",
    }
}

type Theme = typeof theme;
export {
    type Theme,
    darkTheme
}
export default theme;