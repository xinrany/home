// ----- Portfolio hover (safe if none present)
document.querySelectorAll(".portfolio-item-wrapper").forEach((item) => {
  item.addEventListener("mouseover", () => {
    // childNodes[3] is brittle; prefer a class if possible
    item.childNodes[3]?.classList?.add("img-darken");
  });
  item.addEventListener("mouseout", () => {
    item.childNodes[3]?.classList?.remove("img-darken");
  });
});

// ----- Accordion (safe if none present)
document.querySelectorAll(".accordion-item-header").forEach((hdr) => {
  hdr.addEventListener("click", () => {
    hdr.classList.toggle("active");
    const body = hdr.nextElementSibling;
    if (!body) return;
    if (hdr.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  });
});

// ----- Back-to-top (guarded)
(() => {
  const btn = document.querySelector("#back-to-top-btn");
  if (!btn) return; // no button on this page

  function onScroll() {
    if (window.pageYOffset > 100) {
      if (!btn.classList.contains("btnEntrance")) {
        btn.classList.remove("btnExit");
        btn.classList.add("btnEntrance");
        btn.style.display = "block";
      }
    } else {
      if (btn.classList.contains("btnEntrance")) {
        btn.classList.remove("btnEntrance");
        btn.classList.add("btnExit");
        setTimeout(() => { btn.style.display = "none"; }, 250);
      }
    }
  }

  function backToTop() { window.scrollTo(0, 0); }

  window.addEventListener("scroll", onScroll);
  btn.addEventListener("click", backToTop);
})();

// ----- Theme toggle (persistent; shows appropriate icon)
(() => {
  const root = document.documentElement;
  const key = "theme"; // 'light' | 'dark'
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme (if any)
  const saved = localStorage.getItem(key);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  // Helpers
  const prefersDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = () => {
    const explicit = root.getAttribute("data-theme");
    return explicit ? explicit === "dark" : prefersDark();
  };

  const updateToggleIcon = () => {
    if (!toggle) return;
    // Show the icon for the *other* theme (what clicking will do)
    toggle.textContent = isDark() ? "☀️" : "🌙";
    toggle.setAttribute("title", isDark() ? "Switch to light" : "Switch to dark");
    toggle.setAttribute("aria-label", toggle.getAttribute("title"));
  };

  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(key, next);
      updateToggleIcon();
    });
  }

  // If following system (no explicit choice), update icon when system changes
  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  mq?.addEventListener?.("change", () => {
    if (!localStorage.getItem(key)) updateToggleIcon();
  });
})();
