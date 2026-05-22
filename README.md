# Portfolio Website Template

A modern, reusable portfolio website template built with HTML5, CSS3, JavaScript, Supabase, Telegram notifications, and Vercel serverless functions. Clone this repository and customize it with your own information to create your personal portfolio.

---

## Features

### Frontend
- Responsive design for all devices
- Modern glassmorphism UI with neon effects
- Animated hero section
- About page with biography
- Projects/portfolio gallery
- Services section
- Contact form
- Mobile-friendly navigation
- Easy-to-customize profile system

### Backend
- Serverless API routes (Vercel)
- Supabase database integration for contact forms
- Telegram notifications for form submissions and CV downloads
- CV/resume download tracking
- Environment variable-based configuration

### Notifications
Receive instant Telegram alerts when:
- Someone submits the contact form
- Someone downloads your CV

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js Serverless Functions (Vercel)
- **Database:** Supabase
- **Notifications:** Telegram Bot API
- **Hosting:** Vercel

---

## Quick Start

### 1. Clone This Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your own values:
- Supabase URL and API key
- Telegram bot token and chat ID

### 4. Customize Your Profile

Edit `Script/profile.js` with your information:
- Full name and title
- About section and biography
- Email, location, phone
- Profile image
- Resume/CV file
- Social media links
- Services offered
- Portfolio projects
- Blog posts

### 5. Replace Demo Images

Replace the placeholder images in `assets/images/` with your own:
- Profile photo
- Project screenshots
- Blog post images

### 6. Test Locally

```bash
npm install -g vercel
vercel dev
```

Visit `http://localhost:3000` in your browser.

### 7. Deploy to Vercel

```bash
vercel deploy --prod
```

---

## Configuration Guide

### Editing Your Profile

All your portfolio content is stored in **`Script/profile.js`**. Edit this single file to customize:

```javascript
const profile = {
  brand: "YP",                    // Your initials/brand
  fullName: "Your Name",
  title: "Your Professional Title",
  about: "Your introduction",
  email: "your@email.com",
  location: "Your City, Country",
  phoneText: "+1234567890",
  profileImage: "assets/images/your-photo.jpg",
  resume: "/api/download-cv",     // Link to your CV
  
  socials: [
    // Add your social media links
  ],
  
  services: [
    // Add services you offer
  ],
  
  portfolio: [
    // Add your projects
  ],
  
  blogs: [
    // Add your blog posts
  ]
};
```

### Setting Up Supabase

1. Create a free Supabase project at https://supabase.com
2. Create a table called `contact_form` with columns:
   - `id` (auto-increment primary key)
   - `full_name` (text)
   - `email` (text)
   - `subject` (text)
   - `message` (text)
   - `created_at` (timestamp, auto-set to now)
3. Copy your Supabase URL and anon key to `.env`

### Setting Up Telegram Notifications

1. Open Telegram and message @BotFather
2. Create a new bot with `/newbot`
3. Copy the bot token to `.env`
4. Message your new bot and note your chat ID
5. Update `TELEGRAM_CHAT_ID` in `.env`

You'll now receive notifications for form submissions and CV downloads.

---

## Project Structure

```
portfolio-template/
├── api/
│   ├── contact.js           # Contact form endpoint
│   ├── download-cv.js       # CV download endpoint
│   └── telegram.js          # Telegram notification utility
├── assets/
│   ├── images/              # Your photos and project images
│   └── docs/                # Your CV/resume
├── css/
│   └── style.css            # All styling
├── Script/
│   ├── profile.js           # MAIN FILE: Edit this to customize
│   ├── script.js            # Main JavaScript logic
│   ├── about.js             # About page scripts
│   ├── gallery.js           # Portfolio gallery
│   └── gallery.js           # Profile scripts
├── sections/
│   ├── blogs-section.html
│   └── projects-section.html
├── index.html               # Home page
├── about.html               # About page
├── projects.html            # Projects/blogs page
├── package.json
├── vercel.json              # Vercel configuration
├── .env.example             # Template for environment variables
├── .env                     # Your actual environment variables (DO NOT COMMIT)
└── .gitignore              # Prevents committing sensitive files
```

---

## Before Pushing to GitHub

### Security Checklist

✅ **Created `.env` file with your actual credentials**
✅ **`.gitignore` includes `.env` to prevent accidental commits**
✅ **Removed all demo data from `profile.js`**
✅ **Replaced profile images with your own**
✅ **Updated `Script/profile.js` with your information**
✅ **Verified Supabase credentials are in `.env`, not in code**
✅ **Verified Telegram credentials are in `.env`, not in code**
✅ **All API files use `process.env` for sensitive data**

### What Gets Committed to GitHub

**Safe to commit:**
- `index.html`, `about.html`, `projects.html`
- `css/style.css`
- `Script/profile.js` (with YOUR demo data, not personal)
- `api/` files (they use environment variables)
- `package.json`, `vercel.json`
- `.env.example` (template only, no real values)
- `.gitignore` (ensures `.env` is NOT committed)
- `README.md`

**Do NOT commit:**
- `.env` (has real API keys)
- `node_modules/`
- `.vercel/`
- Personal images
- Personal CVs

---

## Customization Examples

### Change Color Scheme

Edit `css/style.css` to modify colors:
```css
--primary: #3b82f6;
--secondary: #8b5cf6;
--accent: #ec4899;
```

### Add New Service

In `Script/profile.js`, add to the `services` array:
```javascript
{
  title: "Your Service",
  description: "Description of what you offer."
}
```

### Add New Project

In `Script/profile.js`, add to the `portfolio` array:
```javascript
{
  category: "Web Development",
  title: "Project Name",
  description: "What this project does.",
  image: "assets/images/projects/your-project.jpg",
  tags: ["HTML5", "CSS3", "JavaScript"],
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/yourusername/project"
}
```

---

## Troubleshooting

### Contact form not sending notifications?
- Check that `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are in `.env`
- Verify you've messaged your Telegram bot at least once
- Check Supabase table `contact_form` exists with correct columns

### Images not loading?
- Ensure image paths in `profile.js` are correct relative to root
- Verify image files exist in `assets/images/`
- Check browser console for 404 errors

### Environment variables not working?
- Restart your development server after editing `.env`
- Verify `.env` is in the root directory (not in subdirectories)
- On Vercel, add environment variables in project settings, not in `.env`

---

## Deployment

### Deploy to Vercel

1. Push your repository to GitHub
2. Connect your repo to Vercel at https://vercel.com
3. Add environment variables in Vercel project settings
4. Vercel will automatically deploy on each push

### Custom Domain

In Vercel project settings:
1. Go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed

---

## Tips & Best Practices

- **Keep profile.js organized:** Group related data together
- **Use relative image paths:** `assets/images/project.jpg` not absolute URLs
- **Test contact form locally:** Use `vercel dev` before deploying
- **Update regularly:** Keep your projects and skills current
- **Backup your data:** Keep `.env` credentials saved somewhere safe (but not in git)
- **Never commit `.env`:** This file contains your API keys

---

## Getting Help

- Supabase docs: https://supabase.com/docs
- Telegram Bot API: https://core.telegram.org/bots/api
- Vercel docs: https://vercel.com/docs
- Portfolio issues: Check the API responses in browser console

---

## License

This template is open source and free to use. Feel free to modify and deploy it as your own portfolio.

---

## Support This Project

If you found this template helpful, please:
- Star this repository ⭐
- Share it with others
- Leave feedback or suggestions

Happy building! 🚀

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
* Admin dashboard
* Picture Gallery
* WhatsApp Notifications
* Email notifications
* Analytics integration

---

# License

This project is licensed under the MIT License. Feel free to use this template for your own portfolio.

---

Happy building! 🚀
