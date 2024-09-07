import { createTheme } from '@shopify/restyle';

const palette = {
    purple: '#6135FE',
    purple2: "#7254DC",
    purpleLight: "#CEC0FF",
    dark: "#1F242C",
    white: '#FFFFFF',
    neutral: "#4A5568",
    muted: "#7C8289",
    lightGray: "#CBD5E0"
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
            lineHeight: 30,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: 22,
            color: 'headingText',
            lineHeight: 26
        },
        h3: {
            fontWeight: "bold",
            fontSize: 20,
            color: "headingText",
            lineHeight: 26
        },
        title: {
            fontSize: 18,
            fontWeight: 'normal',
            color: "headingText",
            lineHeight: 26
        },
        body: {
            fontSize: 17,
            lineHeight: 20,
            color: "mainText"
        },
        small: {
            fontSize: 13,
            lineHeight: 18,
            color: "mutedText"
        },
        defaults: {
            fontSize: 17,
            lineHeight: 20,
            color: "mainText"
        },
    },
});

const darkTheme = {
    ...theme,
    colors: {
        mainBackground: palette.dark,
        mainText: palette.muted,
        headingText: palette.white,
        mutedText: palette.muted,
        border: palette.muted,
        primary: palette.purple,
        primary2: palette.purple2,
        primaryFaded: palette.purple2,
        white: palette.white,
        dark: palette.dark,
    }
}

type Theme = typeof theme;
export {
    type Theme,
    darkTheme
}
export default theme;