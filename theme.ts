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
        primaryFaded: palette.purpleLight
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        h1: {
            fontWeight: 'bold',
            fontSize: 28,
            color: "headingText",
            lineHeight: 32,
        },
        h3: {
            fontWeight: "600",
            fontSize: 20,
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