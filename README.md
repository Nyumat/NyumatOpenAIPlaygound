# Nyumat's Open AI Playground

## Introduction

Open AI has taken the world by storm with their GPT-3 model. I always see the [examples](https://platform.openai.com/examples) page and want to test them out in a low-risk, sandbox sort of enviornment.

That's where this app comes in. I'm building a playground to allow users to test these examples out, freely!

## Quick Specs

- [React](https://beta.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [OpenAI](https://openai.com/api/)

## Getting Started

Clone the repo

```zsh
git clone https://github.com/Nyumat/NyumatOpenAIPlaygound.git
```

Get an enviornment variable from Open AI, and format it like so:

```zsh
PORT=8080
OPENAI_API_KEY=[YOUR KEY HERE]
```

Start the dev server (from the root directory):

```zsh
cd backend && npm run dev
cd frontend && npm run dev
```

Now you're good to go!

## Project Wishlist

- User authorization and authenetication
- More animations with framer-motion
- Begin first example integration
- Mobile Support
- Develop Layout
- More custom hooks
