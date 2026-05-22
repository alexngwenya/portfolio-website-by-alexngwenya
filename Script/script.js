document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector) => document.querySelector(selector);

  const setText = (selector, value) => {
    const el = $(selector);
    if (el) el.textContent = value;
  };

  const setAttribute = (selector, name, value) => {
    const el = $(selector);
    if (el) el.setAttribute(name, value);
  };

  setText('#brandText', profile.brand);
  setText('#fullName', profile.fullName);
  setText('#title', profile.title);
  setText('#about', profile.about);
  setText('#aboutText', profile.about);
  setText('#emailText', profile.email);
  setText('#locationText', profile.location);
  setText('#phoneText', profile.phoneText);
  setText('#footerText', `© ${new Date().getFullYear()} ${profile.fullName}. All rights reserved.`);

  const profileImage = $('#profileImage');
  if (profileImage) {
    try {
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'image';
      preload.href = profile.profileImage;
      document.head.appendChild(preload);
    } catch (e) {}

    profileImage.loading = 'eager';
    profileImage.decoding = 'async';
    profileImage.width = 420;
    profileImage.height = 420;
    profileImage.style.objectFit = 'cover';
    profileImage.onerror = () => {
      profileImage.src = 'assets/images/profile 1.jpg';
    };
    profileImage.src = profile.profileImage;
  }

  const aboutImage = $('#aboutProfileImage');
  if (aboutImage) {
    aboutImage.loading = 'eager';
    aboutImage.decoding = 'async';
    aboutImage.width = 360;
    aboutImage.height = 360;
    aboutImage.style.objectFit = 'cover';
    aboutImage.onerror = () => {
      aboutImage.src = profile.profileImage || 'assets/images/profile 1.jpg';
    };
    // prefer profile image to keep things consistent
    aboutImage.src = profile.profileImage || aboutImage.src;
  }

  const resumeBtn = $('#resumeBtn');
  if (resumeBtn) resumeBtn.href = profile.resume;

  const socialLinks = $('#socialLinks');
  if (socialLinks) {
    socialLinks.innerHTML = profile.socials.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener" aria-label="${item.name}">
        <i class="${item.icon}"></i>
      </a>
    `).join('');
  }

  const servicesGrid = $('#servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = profile.services.map(service => `
      <article class="card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `).join('');
  }

  const projectsGrid = $('#projectsGrid');
  if (projectsGrid) {
    const portfolio = Array.isArray(profile.portfolio) ? profile.portfolio : [];
    projectsGrid.innerHTML = portfolio.map(item => `
      <article class="card portfolio-card">
        <div class="card-media">
          ${item.image ? `<img src="${item.image}" alt="${item.title}" />` : ''}
        </div>
        <div class="card-body">
          <span class="category">${item.category || ''}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tags">
            ${Array.isArray(item.tags) ? item.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
          </div>
          <div class="links">
            ${item.liveLink ? `<a class="btn small" href="${item.liveLink}" target="_blank" rel="noopener">Live</a>` : ''}
            ${item.githubLink ? `<a class="btn small ghost" href="${item.githubLink}" target="_blank" rel="noopener">Code</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  const menuBtn = $('#menuBtn');
  const navLinks = $('#navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  revealItems.forEach(item => observer.observe(item));

  const form = $('#contact_Form');
  const feedback = $('#formFeedback');

  const setFeedback = (element, text, isError = false) => {
    if (!element) return;
    element.textContent = text;
    element.classList.toggle('error', isError);
    element.classList.toggle('success', !isError);
  };

  if (resumeBtn) {
    resumeBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      const downloadUrl = resumeBtn.href;

      try {
        fetch('/api/download-cv').catch((error) => {
          console.error('Download tracking failed:', error);
        });
      } catch (error) {
        console.error('Download tracking error:', error);
      }

      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = '';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    });
  }

  if (form && feedback) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      setFeedback(feedback, 'Sending message...');

      const formData = Object.fromEntries(new FormData(form).entries());

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const responseBody = await response.json();
        if (!response.ok) {
          throw new Error(responseBody.error || 'Message failed');
        }

        setFeedback(feedback, 'Message sent successfully!');
        form.reset();
      } catch (error) {
        console.error(error);
        setFeedback(feedback, 'Could not send message. Please try again later.', true);
      }
    });
  }
});
