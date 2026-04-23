AdDU Alumni Career Hub - PWA Integration

This project is a Nuxt 3 application enhanced with Progressive Web App (PWA) capabilities as part of Activity 15.

The Master Prompt

I used the following prompt to guide the AI in the PWA conversion:

"I am using Nuxt 3. Help me convert my project into a PWA using the @vite-pwa/nuxt module. I need a configuration that includes custom AdDU branding, specific icons (192x192 and 512x512), and a service worker that supports offline caching for my assets."

AI Hallucinations & Manual Fixes

During the process, I had to manually intervene to fix the following AI errors:
1.	TypeScript Configuration Conflict:
o	The Error: The AI suggested a manual compilerOptions list that broke Nuxt's auto-imports.
o	The Fix: I manually restored "extends": "./.nuxt/tsconfig.json" to ensure the PWA module and Nuxt 3 remained compatible.
2.	Environment Pathing (OneDrive Sync Error):
o	The Error: Running the project inside a OneDrive-synced folder caused ENOENT errors during the PWA build process.
o	The Fix: I migrated the project to a local root directory to prevent file-locking issues.
3.	Manifest UI Warnings:
o	The Error: The AI generated a manifest missing purpose: 'any maskable' and screenshots, causing Chrome DevTools warnings.
o	The Fix: I manually updated nuxt.config.ts with these properties to ensure a "Richer Install UI" and full PWA compliance.

How to Run
1.	npm install
2.	npm run dev
3.	Open http://localhost:3004 (or your assigned port)
4.	Use Chrome DevTools > Application > Manifest to verify.


