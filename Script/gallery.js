document.addEventListener('DOMContentLoaded', () => {
  const galleryContent = document.getElementById("galleryContent");
  const tabButtons = document.querySelectorAll(".tab-btn");

  if (!galleryContent) return;

  function renderProjects() {
    const portfolio = Array.isArray(profile.portfolio) ? profile.portfolio : [];
    galleryContent.classList.remove('show');
    galleryContent.innerHTML = `
      <div class="carousel-wrapper">
        <button class="carousel-control carousel-prev" aria-label="Scroll left"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="carousel-track">
          ${portfolio.map(item => `
            <article class="portfolio-card carousel-card">
              ${item.image ? `<img src="${item.image}" alt="${item.title}" class="portfolio-img">` : ''}

              <div class="portfolio-body">
                <span class="portfolio-category">${item.category || ''}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>

                <div class="portfolio-tags">
                  ${Array.isArray(item.tags) ? item.tags.map(tag => `<span>${tag}</span>`).join("") : ''}
                </div>

                <div class="portfolio-links">
                  ${item.liveLink ? `${/graphic\s*design|logo\s*design|branding|poster|creative|ui\/ux/i.test(item.category) ? `<button type="button" class="btn small view-design" data-index="${portfolio.indexOf(item)}">View Design</button>` : `<a href="${item.liveLink}" target="_blank" rel="noopener">View Project</a>`}` : `<span class="dev-badge">Still developing</span>`}
                  ${item.githubLink ? `<a href="${item.githubLink}" target="_blank" rel="noopener">GitHub</a>` : ""}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
        <button class="carousel-control carousel-next" aria-label="Scroll right"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    `;
    setTimeout(() => {
      const designButtons = galleryContent.querySelectorAll('.view-design');
      designButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          openDesignModal(idx);
        });
      });
      attachCarouselControls();
      galleryContent.classList.add('show');
    }, 20);
  }

  function renderBlogs() {
    const blogs = Array.isArray(profile.blogs) ? profile.blogs : [];
    galleryContent.classList.remove('show');
    galleryContent.innerHTML = `
      <div class="carousel-wrapper">
        <button class="carousel-control carousel-prev" aria-label="Scroll left"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="carousel-track">
          ${blogs.map(blog => `
          <article class="blog-card carousel-card">
            ${blog.image ? `<img src="${blog.image}" alt="${blog.title}" class="blog-img">` : ''}

            <div class="blog-body">
              <span class="blog-date">${blog.date}</span>
              <h3>${blog.title}</h3>
              <p>${blog.excerpt}</p>
              <small>By ${blog.author}</small>

              ${blog.link ? `<button class="btn small view-blog" data-index="${blogs.indexOf(blog)}">View Blog</button>` : `<span class="dev-badge">Link coming</span>`}
            </div>
          </article>
        `).join("")}
        </div>
        <button class="carousel-control carousel-next" aria-label="Scroll right"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    `;
    // attach event listeners for blog view buttons
    setTimeout(() => {
      const viewButtons = galleryContent.querySelectorAll('.view-blog');
      viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.dataset.index, 10);
          openBlogModal(idx);
        });
      });

      const viewDesignButtons = galleryContent.querySelectorAll('.view-design');
      viewDesignButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          openDesignModal(idx);
        });
      });
      attachCarouselControls();
    }, 30);
    setTimeout(() => galleryContent.classList.add('show'), 20);
  }

  // Blog modal creation and handlers
  function ensureBlogModal() {
    let modal = document.getElementById('blogModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'blogModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <button class="modal-close" aria-label="Close">×</button>
        <div class="modal-content">
          <div class="modal-body"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (ev) => {
      if (ev.target === modal || ev.target.classList.contains('modal-close')) {
        modal.classList.remove('open');
        const iframe = modal.querySelector('iframe');
        if (iframe) iframe.src = '';
      }
    });

    return modal;
  }

  function openBlogModal(index) {
    const blogs = Array.isArray(profile.blogs) ? profile.blogs : [];
    const blog = blogs[index];
    if (!blog) return;

    const modal = ensureBlogModal();
    const body = modal.querySelector('.modal-body');
    body.innerHTML = '';

    if (blog.link) {
      const iframe = document.createElement('iframe');
      iframe.src = blog.link;
      iframe.className = 'modal-iframe';
      iframe.setAttribute('title', blog.title || 'Blog');
      iframe.setAttribute('sandbox', 'allow-scripts allow-forms');
      iframe.setAttribute('referrerpolicy', 'no-referrer');
      body.appendChild(iframe);
    } else {
      body.innerHTML = `<h2>${blog.title}</h2><p>${blog.excerpt}</p>`;
    }

    setTimeout(() => modal.classList.add('open'), 20);
  }

  function openDesignModal(index) {
    const portfolio = Array.isArray(profile.portfolio) ? profile.portfolio : [];
    const item = portfolio[index];
    if (!item) return;

    const modal = ensureBlogModal();
    const body = modal.querySelector('.modal-body');
    body.innerHTML = '';

    if (item.liveLink) {
      const iframe = document.createElement('iframe');
      iframe.src = item.liveLink;
      iframe.className = 'modal-iframe';
      iframe.setAttribute('title', item.title || 'Design Preview');
      iframe.setAttribute('sandbox', 'allow-scripts allow-forms');
      iframe.setAttribute('referrerpolicy', 'no-referrer');
      body.appendChild(iframe);
    } else {
      body.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
    }

    setTimeout(() => modal.classList.add('open'), 20);
  }

  function attachCarouselControls() {
    const wrapper = galleryContent.querySelector('.carousel-wrapper');
    if (!wrapper) return;
    const track = wrapper.querySelector('.carousel-track');
    const prev = wrapper.querySelector('.carousel-prev');
    const next = wrapper.querySelector('.carousel-next');
    if (!track) return;

    const scrollAmount = Math.max(track.clientWidth * 0.7, 320);
    if (prev) {
      prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    }
    if (next) {
      next.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    }
  }

  if (tabButtons && tabButtons.length) {
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const tab = button.dataset.tab;

        if (tab === "projects") renderProjects();
        if (tab === "blogs") renderBlogs();
      });
    });
  }

  renderProjects();
});