import { createTheme } from '@shopify/restyle';

const palette = {
    purple: '#6135FE',
    purpleLight: "#7254DC",
    dark: "#1F242C",
    white: '#FFFFFF',
    neutral: "#4A5568",
    muted: "#7C8289",
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        mainText: palette.neutral,
        headingText: palette.dark,
        mutedText: palette.muted,
        border: palette.muted,
        primary: palette.purple,
        primaryFaded: palette.purpleLight,
        white: palette.white,
        dark: palette.dark,
    },
    spacing: {
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
            fontSize: 30,
            color: "headingText",
            lineHeight: 40,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: 26,
            color: 'headingText',
            lineHeight: 32
        },
        h3: {
            fontWeight: "bold",
            fontSize: 22,
            color: "headingText",
            lineHeight: 26
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            color: "mainText"
        },
        small: {
            fontSize: 14,
            lineHeight: 20,
            color: "mutedText"
        },
        defaults: {
            fontSize: 16,
            lineHeight: 24,
            color: "mainText"
        },
    },
});

export type Theme = typeof theme;
export default theme;