/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semânticas - serão mapeadas do Figma no PROMPT 2
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        'bg-primary': 'var(--color-background-primary)',
        'bg-secondary': 'var(--color-background-secondary)',
        'bg-dark': 'var(--color-background-dark)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
      },
      spacing: {
        // Espaçamentos semânticos - serão mapeados do Figma no PROMPT 2
        container: 'var(--spacing-container)',
        card: 'var(--spacing-card)',
        section: 'var(--spacing-section)',
      },
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        full: 'var(--border-radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      fontFamily: {
        primary: 'var(--font-family-primary)',
      },
      screens: {
        'md': '768px',   // Tablet
        'lg': '1280px',  // Desktop
        'xl': '1920px',  // Wide / 4K
      },
    },
  },
  plugins: [],
}
