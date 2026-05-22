# Portfolio Website Template

A modern, reusable portfolio website template built with HTML5, CSS3, JavaScript, Supabase, Telegram notifications, and Vercel serverless functions. Clone this repository and customize it with your own information to create your personal portfolio.

This project includes:

* Responsive portfolio website
* Contact form backend
* Supabase database integration
* Telegram notifications
* CV download tracking
* Vercel deployment support
* Animated modern UI

---

# Features

## Frontend

* Responsive design
* Modern neon/glassmorphism UI
* Animated hero section
* About page
* Projects section
* Skills section
* Contact section
* Mobile-friendly navigation

## Backend

* Serverless API routes
* Supabase integration
* Contact form storage
* Telegram notifications
* CV download tracking

## Notifications

Receive instant Telegram alerts when:

* Someone submits the contact form
* Someone downloads your CV

---

# Tech Stack

* HTML5
* CSS3
* JavaScript
* Node.js Serverless Functions
* Supabase
* Telegram Bot API
* Vercel

---

# Project Structure

```bash
project/
│
├── api/
│   ├── contact.js
│   └── download-cv.js
│
├── assets/
├── css/
├── js/
├── images/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── cv.pdf
├── package.json
├── vercel.json
└── .env
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/alexngwenya/Alex-ngwenya-portfolio-website.git
```

## Navigate Into Project

```bash
cd your-repository
```

## Install Dependencies

```bash
npm install
```

---

# Required Dependencies

```bash
npm install @supabase/supabase-js
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

---

# Local Development

## Run Local Server

```bash
vercel dev
```

Open:

```text
http://localhost:3000
```

---

# Telegram Notifications

## Create Telegram Bot

1. Open Telegram
2. Search for `@BotFather`
3. Create a new bot
4. Copy the bot token

## Get Chat ID

Send a message to your bot, then open:

```text
https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
```

Copy your `chat.id`.

---

# Deployment

Deploy easily using:

[Vercel](https://vercel.com?utm_source=chatgpt.com)

## Recommended Vercel Settings

| Setting          | Value       |
| ---------------- | ----------- |
| Framework Preset | Other       |
| Root Directory   | ./          |
| Build Command    | Leave Empty |
| Output Directory | Leave Empty |
| Install Command  | npm install |

---

# API Endpoints

```text
/api/contact
```

Handles:

* Form submission
* Database storage
* Telegram notifications

---

## CV Download Tracking

```text
/api/download-cv
```

Handles:

* CV download tracking
* Telegram alerts
* Redirect to CV PDF

---

# Security Recommendations

Recommended future improvements:

* CAPTCHA protection
* Rate limiting
* Picture Gallery
* WhatsApp Notifications
* Email notifications
* Analytics integration

---

# License

This project is licensed under the MIT License.

---

# Author

Developed by Alexandra Ngwenya
Founder of CrocTech Innovations
