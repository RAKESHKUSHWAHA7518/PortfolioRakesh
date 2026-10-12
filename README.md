# Rakesh's portfolio

React + TypeScript portfolio for a Gen AI & Full-Stack Developer specialising in end-to-end voice AI.

## Run locally

```sh
npm install
npm run dev -- --host 127.0.0.1
```

Open the Local URL printed by Vite. `npm run build` runs TypeScript checks before the production build. `npm run lint` checks the active source.

## Current preview

- Responsive dark/light design, selected projects, filters, expandable technical details, experience, skills, education, and contact.
- Project voice walkthroughs and an introduction use browser SpeechSynthesis with play/pause, reset, speed, progress, prepared explanations, and readable transcripts. They do not call an LLM, clone a voice, or record microphone audio.
- Contact opens an email client; copy-email includes feedback and a fallback. No fake message-delivery confirmation.
- Profile links are not presented as project-specific code or demos. Company and unfinished projects state when no public demo is provided.
- Original UI components are preserved in `legacy/`; the active UI is `src/App.tsx` and `src/portfolio.css`. Project and experience content is in `src/portfolioData.ts`.

## Before publication

- Confirm employment dates and concurrent roles, the total experience, and project descriptions. Unexplained outcome metrics are not displayed.
- Supply approved voice AI project details, real screenshots for company work, and verified results or engineering trade-offs for richer case studies.
- Confirm the exact tool names supplied as “critana” and “wherpflow” before listing them.
- Supply approved recordings or a voice-cloning setup for personal narration. A model-backed assistant requires a server integration with credentials, factual grounding, limits, and error handling.
- Confirm the final domain. Social metadata uses a local preview image; absolute production URLs should be added when the domain is confirmed.
- Check actual email delivery through the visitor's mail client, resume permissions, third-party project functionality, and rendered desktop/mobile layouts.

Social preview generation: run `scripts/create-social-preview.py` with Python and Pillow.
