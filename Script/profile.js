// ============================================
// PORTFOLIO PROFILE CONFIGURATION
// ============================================
// Edit this file to customize your portfolio.
// Replace all demo data with your own information.
// !! IMPORTANT: Do not place API keys in this file.
//    Use environment variables (.env) instead.
// ============================================

const profile = {
  // Your personal branding
  brand: "FP",
  fullName: "Fake Person",
  title: "Creative Professional · Developer · Designer",

  // About and biography sections
  about: "This is a demo portfolio template. Replace this text with your own personal introduction.",
  biography: "This is a sample biography for the portfolio template. Edit this section in profile.js to add your real background, education, experience, and story.",

  // Contact information (Replace with your own)
  email: "fakeperson@example.com",
  location: "Your City, Your Country",
  phoneText: "+1234567890",

  // Profile image (Replace with your own photo)
  profileImage: "assets/images/profile 2.jpg",

  // Resume/CV download link (Replace with your own)
  resume: "/api/download-cv",

  // Social media links (Update these with your profiles)
  socials: [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/yourusername"
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/yourusername"
    },
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      url: "https://wa.me/1234567890"
    },
    {
      name: "Telegram",
      icon: "fa-brands fa-telegram",
      url: "https://t.me/yourusername"
    }
  ],

  // Services offered (Edit these to match your services)
  services: [
    {
      title: "Web Development",
      description: "Edit this service. Replace with a description of your web development work."
    },
    {
      title: "Graphic Design",
      description: "Edit this service. Replace with a description of your graphic design work."
    },
    {
      title: "Logo Design",
      description: "Edit this service. Replace with a description of your logo design work."
    },
    {
      title: "ICT Support",
      description: "Edit this service. Replace with a description of your support services."
    },
    {
      title: "Digital Marketing",
      description: "Edit this service. Replace with a description of your marketing services."
    },
    {
      title: "Data Entry",
      description: "Edit this service. Replace with a description of your data entry services."
    }
  ],

  // Portfolio projects (Replace with your own projects)
  portfolio: [
    {
      category: "Web Development",
      title: "Demo Portfolio Website",
      description: "A sample web development project. Replace this with your own project details.",
      image: "assets/images/projects/demo-web-project.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      category: "Graphic Design",
      title: "Demo Flyer Design",
      description: "A sample graphic design project. Replace this with your own design work.",
      image: "assets/images/projects/demo-flyer.jpg",
      tags: ["Graphic Design", "Poster", "Branding"],
      liveLink: "#",
      githubLink: ""
    },
    {
      category: "Logo Design",
      title: "Demo Logo Concept",
      description: "A sample logo design project. Replace this with your own logo or branding work.",
      image: "assets/images/projects/demo-logo.jpg",
      tags: ["Logo Design", "Brand Identity"],
      liveLink: "#",
      githubLink: ""
    }
  ],

  // Blog posts (Replace with your own blog content)
  blogs: [
    {
      id: "demo-blog-post",
      title: "Demo Blog Post",
      excerpt: "This is a sample blog post preview. Replace it with your own blog article.",
      image: "assets/images/blogs/demo-blog.jpg",
      date: "January 1, 2026",
      author: "Fake Person",
      link: "blog-preview.html?post=demo-blog-post",
      content: `
        <p>This is demo blog content. Edit this section in profile.js and replace it with your own writing.</p>
        <p>You can add multiple paragraphs, images, links, and formatted content here.</p>
      `
    }
  ]
};
