import path from 'path';

import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const manifest = defineManifest({
  manifest_version: 3,
  name: '<Your chrome extension name>',
  version: '1.0.0',
  author: 'shooooori0128',
  permissions: [],
  action: {
    default_icon: {
      '16': 'src/assets/icon_16x16.png',
      '48': 'src/assets/icon_48x48.png',
      '128': 'src/assets/icon_128x128.png',
    },
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/index.tsx'],
      run_at: 'document_idle',
    },
  ],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
