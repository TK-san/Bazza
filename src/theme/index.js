/**
 * Bazza Theme Configuration (Chakra UI v3)
 * Mobile-first theme with Malaysian-inspired colors
 */
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Custom theme configuration for Bazza
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f7ff' },
          100: { value: '#b3e0ff' },
          200: { value: '#80caff' },
          300: { value: '#4db3ff' },
          400: { value: '#1a9dff' },
          500: { value: '#0080e6' },
          600: { value: '#0066b3' },
          700: { value: '#004d80' },
          800: { value: '#00334d' },
          900: { value: '#001a26' },
        },
        offer: {
          50: { value: '#e6fff2' },
          100: { value: '#b3ffd9' },
          500: { value: '#00cc66' },
          600: { value: '#00b359' },
        },
        request: {
          50: { value: '#fff2e6' },
          100: { value: '#ffd9b3' },
          500: { value: '#ff8533' },
          600: { value: '#e67300' },
        },
      },
    },
  },
});

// Create the theme system
export const system = createSystem(defaultConfig, config);

export default system;
