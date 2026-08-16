/**
 * Tatros global navigation.
 *
 * Provides sticky-header scroll state, desktop dropdowns, tablet/mobile panel
 * behavior, accordion submenus, focus containment, and scroll locking.
 */

(() => {
  "use strict";

  /* ------------------------------------------------------------------------
     Configuration and DOM references
     ------------------------------------------------------------------------ */

  const navigation = document.querySelector("[data-navigation]");

  if (!navigation) {
    return;
  }

  const menuToggle = navigation.querySelector("[data-navigation-toggle]");
  const menuPanel = navigation.querySelector("[data-navigation-panel]");
  const overlay = navigation.querySelector("[data-navigation-overlay]");
  const submenuToggles = Array.from(
    navigation.querySelectorAll("[data-submenu-toggle]"),
  );
  const desktopQuery = window.matchMedia("(min-width: 75rem)");
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  let menuOpen = false;
  let scrollFrame = 0;

  navigation.classList.add("navigation--enhanced");

  /* ------------------------------------------------------------------------
     Shared state helpers
     ------------------------------------------------------------------------ */

  const getSubmenu = (toggle) => {
    const submenuId = toggle.getAttribute("aria-controls");
    return submenuId ? document.getElementById(submenuId) : null;
  };

  const getNavigationItem = (toggle) => toggle.closest("[data-navigation-item]");

  const setToggleLabel = (toggle, expanded) => {
    const menuName = toggle
      .getAttribute("aria-label")
      ?.replace(/^(Show|Hide)\s+/i, "")
      .replace(/\s+menu$/i, "");

    if (menuName) {
      toggle.setAttribute(
        "aria-label",
        `${expanded ? "Hide" : "Show"} ${menuName} menu`,
      );
    }
  };

  const closeSubmenu = (toggle, restoreFocus = false) => {
    const item = getNavigationItem(toggle);

    toggle.setAttribute("aria-expanded", "false");
    setToggleLabel(toggle, false);
    item?.classList.remove("is-submenu-open");

    if (restoreFocus) {
      toggle.focus();
    }
  };

  const closeAllSubmenus = (exception = null) => {
    submenuToggles.forEach((toggle) => {
      if (toggle !== exception) {
        closeSubmenu(toggle);
      }
    });
  };

  const openSubmenu = (toggle) => {
    const item = getNavigationItem(toggle);

    closeAllSubmenus(toggle);
    toggle.setAttribute("aria-expanded", "true");
    setToggleLabel(toggle, true);
    item?.classList.add("is-submenu-open");
  };

  const toggleSubmenu = (toggle) => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";

    if (expanded) {
      closeSubmenu(toggle);
    } else {
      openSubmenu(toggle);
    }
  };

  /* ------------------------------------------------------------------------
     Body scroll lock
     ------------------------------------------------------------------------ */

  const lockBodyScroll = () => {
    document.body.classList.add("navigation-lock");
  };

  const unlockBodyScroll = () => {
    document.body.classList.remove("navigation-lock");
  };

  /* ------------------------------------------------------------------------
     Tablet and mobile panel
     ------------------------------------------------------------------------ */

  const openMenu = () => {
    if (menuOpen || desktopQuery.matches) {
      return;
    }

    menuOpen = true;
    navigation.classList.add("is-menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
    overlay.removeAttribute("tabindex");
    lockBodyScroll();

    const firstFocusable = menuPanel.querySelector(focusableSelector);
    firstFocusable?.focus();
  };

  const closeMenu = ({ restoreFocus = true } = {}) => {
    if (!menuOpen) {
      return;
    }

    menuOpen = false;
    navigation.classList.remove("is-menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    overlay.setAttribute("tabindex", "-1");
    closeAllSubmenus();
    unlockBodyScroll();

    if (restoreFocus) {
      menuToggle.focus();
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /* ------------------------------------------------------------------------
     Focus containment for the open slide panel
     ------------------------------------------------------------------------ */

  const containPanelFocus = (event) => {
    if (!menuOpen || event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      menuPanel.querySelectorAll(focusableSelector),
    ).filter((element) => element.getClientRects().length > 0);

    if (focusableElements.length === 0) {
      event.preventDefault();
      menuToggle.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  /* ------------------------------------------------------------------------
     Desktop submenu keyboard behavior
     ------------------------------------------------------------------------ */

  const handleSubmenuKeydown = (event, toggle) => {
    const submenu = getSubmenu(toggle);

    if (!submenu) {
      return;
    }

    const submenuLinks = Array.from(submenu.querySelectorAll("a[href]"));

    if ((event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") &&
        desktopQuery.matches) {
      event.preventDefault();
      openSubmenu(toggle);
      submenuLinks[0]?.focus();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeSubmenu(toggle, true);
    }
  };

  const handleSubmenuLinkKeydown = (event) => {
    if (!desktopQuery.matches) {
      return;
    }

    const submenu = event.currentTarget.closest("[data-submenu]");
    const links = Array.from(submenu?.querySelectorAll("a[href]") ?? []);
    const currentIndex = links.indexOf(event.currentTarget);
    const ownerToggle = navigation.querySelector(
      `[aria-controls="${submenu?.id}"]`,
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      links[(currentIndex + 1) % links.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      links[(currentIndex - 1 + links.length) % links.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      links[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      links.at(-1)?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      ownerToggle && closeSubmenu(ownerToggle, true);
    }
  };

  /* ------------------------------------------------------------------------
     Smooth, frame-limited scroll-state detection
     ------------------------------------------------------------------------ */

  const updateScrollState = () => {
    navigation.classList.toggle("is-scrolled", window.scrollY > 8);
    scrollFrame = 0;
  };

  const handleScroll = () => {
    if (scrollFrame === 0) {
      scrollFrame = window.requestAnimationFrame(updateScrollState);
    }
  };

  /* ------------------------------------------------------------------------
     Global keyboard, pointer, and breakpoint behavior
     ------------------------------------------------------------------------ */

  const handleDocumentKeydown = (event) => {
    if (event.key === "Escape") {
      if (menuOpen) {
        closeMenu();
      } else {
        const openToggle = submenuToggles.find(
          (toggle) => toggle.getAttribute("aria-expanded") === "true",
        );
        openToggle && closeSubmenu(openToggle, true);
      }
      return;
    }

    containPanelFocus(event);
  };

  const handleDocumentPointerDown = (event) => {
    if (menuOpen || navigation.contains(event.target)) {
      return;
    }

    closeAllSubmenus();
  };

  const handleBreakpointChange = (event) => {
    if (event.matches) {
      closeMenu({ restoreFocus: false });
    } else {
      closeAllSubmenus();
    }
  };

  /* ------------------------------------------------------------------------
     Event registration
     ------------------------------------------------------------------------ */

  menuToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", () => closeMenu());

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => toggleSubmenu(toggle));
    toggle.addEventListener("keydown", (event) =>
      handleSubmenuKeydown(event, toggle),
    );

    getNavigationItem(toggle)?.addEventListener("focusout", (event) => {
      if (
        desktopQuery.matches &&
        !event.currentTarget.contains(event.relatedTarget)
      ) {
        closeSubmenu(toggle);
      }
    });
  });

  navigation.querySelectorAll("[data-submenu] a[href]").forEach((link) => {
    link.addEventListener("keydown", handleSubmenuLinkKeydown);
  });

  menuPanel.addEventListener("click", (event) => {
    if (!desktopQuery.matches && event.target.closest("a[href]")) {
      closeMenu({ restoreFocus: false });
    }
  });

  document.addEventListener("keydown", handleDocumentKeydown);
  document.addEventListener("pointerdown", handleDocumentPointerDown);
  window.addEventListener("scroll", handleScroll, { passive: true });
  desktopQuery.addEventListener("change", handleBreakpointChange);

  /* ------------------------------------------------------------------------
     Initial state
     ------------------------------------------------------------------------ */

  updateScrollState();
})();
