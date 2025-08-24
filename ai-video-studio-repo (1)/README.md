# 🎬 AI Video Studio Pro

AI-powered Video + Audio Studio built with Next.js 14, Tailwind CSS, and mock APIs.
Deploy easily to Vercel 🚀

## Features
- Video Generation (mock mode)
- Image → Video
- Story → Video
- Speech Synthesis (mock, ElevenLabs ready)
- Templates, Transitions, Fusion effects
- Gallery of generated content
- SRS Documentation Page
- Tailwind + Shadcn UI

## Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/YOUR-USERNAME/ai-video-studio-pro.git
cd ai-video-studio-pro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Deploy to Vercel
- Go to [https://vercel.com/new](https://vercel.com/new)
- Import this repo
- Framework: **Next.js**
- Done ✅

## Environment Variables
When you want to enable real APIs, add these in Vercel Project Settings → Environment Variables:
- `OPENAI_API_KEY`
- `ELEVENLABS_API_KEY`
- `GOOGLE_VEO_API_KEY`

Until then, mock mode will work (fake/demo data).

---
Made with ❤️ for AI-powered creativity.
