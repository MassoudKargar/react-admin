import type { SimplePaletteColorOptions } from '@mui/material';
import type { Theme, ThemeOptions } from '@mui/material/styles';

// MUI Module Types to create theme

declare module '@mui/material/styles' {
    // Theme interface
    interface CustomTheme extends Theme {
        [key: string]: any;
    }
    interface Palette {
        [key: string]: any;
        custom: SimplePaletteColorOptions;
    }
    interface PaletteOptions {
        [key: string]: any;
        custom: SimplePaletteColorOptions;
    }
    // ThemeOptions interface
    interface CustomThemeOptions extends ThemeOptions {
        [key: string]: any;
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}