/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
   darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "error": "#ba1a1a",
                "on-tertiary-fixed": "#1b1c1c",
                "inverse-on-surface": "#f2f1ec",
                "surface-container-highest": "#e4e2dd",
                "tertiary": "#5e5e5e",
                "on-error-container": "#93000a",
                "secondary-fixed-dim": "#c8c6c5",
                "primary-fixed": "#ffdf91",
                "secondary-fixed": "#e5e2e1",
                "on-error": "#ffffff",
                "outline": "#7e7667",
                "primary-fixed-dim": "#e2c377",
                "surface-dim": "#dcdad5",
                "secondary-container": "#e2dfde",
                "inverse-primary": "#e2c377",
                "on-secondary": "#ffffff",
                "on-secondary-container": "#636262",
                "tertiary-fixed": "#e4e2e2",
                "on-secondary-fixed": "#1c1b1b",
                "on-primary-fixed-variant": "#584401",
                "on-primary-fixed": "#241a00",
                "on-surface-variant": "#4c4639",
                "primary": "#725c1a",
                "outline-variant": "#cfc5b4",
                "surface": "#fbf9f4",
                "primary-container": "#af944d",
                "inverse-surface": "#30312e",
                "on-tertiary-fixed-variant": "#464747",
                "surface-container-high": "#eae8e3",
                "background": "#fbf9f4",
                "surface-variant": "#e4e2dd",
                "on-background": "#1b1c19",
                "on-tertiary-container": "#2f3030",
                "on-primary": "#ffffff",
                "tertiary-fixed-dim": "#c7c6c6",
                "error-container": "#ffdad6",
                "on-surface": "#1b1c19",
                "on-secondary-fixed-variant": "#474746",
                "surface-container-low": "#f5f3ee",
                "secondary": "#5f5e5e",
                "on-primary-container": "#3c2d00",
                "surface-bright": "#fbf9f4",
                "surface-container-lowest": "#ffffff",
                "surface-tint": "#725c1a",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#979797",
                "surface-container": "#f0eee9"
        },
        "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
        },
        "spacing": {
                "unit": "4px",
                "gutter": "24px",
                "xs": "4px",
                "margin-mobile": "16px",
                "lg": "24px",
                "xl": "40px",
                "margin-desktop": "64px",
                "sm": "8px",
                "md": "16px",
                "stack-md": "40px",
                "stack-xl": "120px",
                "stack-lg": "80px",
                "container-max": "1280px",
                "stack-sm": "24px"
        },
        "fontFamily": {
                "headline-lg": [
                        "Bodoni Moda"
                ],
                "headline-md": [
                        "Bodoni Moda"
                ],
                "label-md": [
                        "Hanken Grotesk"
                ],
                "display-lg": [
                        "Bodoni Moda"
                ],
                "body-lg": [
                        "Hanken Grotesk"
                ],
                "caption": [
                        "Hanken Grotesk"
                ],
                "headline-lg-mobile": [
                        "Bodoni Moda"
                ],
                "body-md": [
                        "Hanken Grotesk"
                ],
                "label-caps": ["Hanken Grotesk"],
                "headline-sm": ["Bodoni Moda"],
                "display-xl": ["Bodoni Moda"],
                "display-lg-mobile": ["Bodoni Moda"]
        },
        "fontSize": {
                "headline-lg": [
                        "40px",
                        {
                                "lineHeight": "1.2",
                                "letterSpacing": "-0.01em",
                                "fontWeight": "600"
                        }
                ],
                "headline-md": [
                        "28px",
                        {
                                "lineHeight": "1.3",
                                "fontWeight": "500"
                        }
                ],
                "label-md": [
                        "14px",
                        {
                                "lineHeight": "1.4",
                                "letterSpacing": "0.05em",
                                "fontWeight": "600"
                        }
                ],
                "display-lg": [
                        "64px",
                        {
                                "lineHeight": "1.1",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "1.6",
                                "fontWeight": "400"
                        }
                ],
                "caption": [
                        "12px",
                        {
                                "lineHeight": "1.4",
                                "fontWeight": "400"
                        }
                ],
                "headline-lg-mobile": [
                        "32px",
                        {
                                "lineHeight": "1.2",
                                "fontWeight": "600"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "1.6",
                                "fontWeight": "400"
                        }
                ],
                "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.15em", "fontWeight": "600" }],
                "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "500" }],
                "display-xl": ["80px", { "lineHeight": "90px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "display-lg-mobile": ["40px", { "lineHeight": "48px", "fontWeight": "700" }]
        }
},
    },
  plugins: [],
}

