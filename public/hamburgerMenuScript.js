(function () {
  // Handling event for close and open hamburger menu
  let isMenuOpen = false;
  const menuElement = document.querySelector(".menu");
  const hamburgerIcon = document.querySelector(".hamburger");



  const toggleMenu = (status) => {
    console.log('toggling')
    console.log('status', status, 'isMenuOpen', isMenuOpen)
    if (status === "open") {
      isMenuOpen = true;
    } else if (status === "close") {
      isMenuOpen = false;
    } else {
      isMenuOpen = !isMenuOpen;
    }

    if (isMenuOpen) {
      menuElement.classList.add("open");
      hamburgerIcon.classList.add('open')
    } else {
      menuElement.classList.remove("open");
      hamburgerIcon.classList.remove("open");
    }
  };

  hamburgerIcon.addEventListener("click", () => toggleMenu());

  const viewsName = ["home", "about", "projects", "contact"];

  const viewsElements = viewsName.reduce((theViewsSelector, viewName) => {
    const selectorElement = document.getElementById(`${viewName}-selector`);
    const viewElement = document.getElementById(viewName);

    selectorElement.addEventListener("click", () => {
      setSelected(selectorElement);
      scrollIntoView(viewElement);
      setTimeout(() => toggleMenu("close"), 500);
    });

    theViewsSelector[viewName] = {
      view: viewElement,
      selector: selectorElement,
    };
    return theViewsSelector;
  }, {});

  window.addEventListener("scroll", (e) => {
    let closestViewToNavName = viewsName[0];
    viewsName.forEach((viewName) => {
      if (viewsElements[viewName].view.getBoundingClientRect().y < 85) {
        closestViewToNavName = viewName;
      }
    });
    if (window.innerHeight + window.scrollY >= (document.body.offsetHeight - 50)) {
      closestViewToNavName = viewsName[viewsName.length - 1];
    }

    setSelected(viewsElements[closestViewToNavName].selector);
  });

  let currentViewSelector = viewsElements.home.selector;
  setSelected(currentViewSelector);

  function setSelected(viewSelector) {
    currentViewSelector.classList.remove("selected");
    viewSelector.classList.add("selected");
    currentViewSelector = viewSelector;
  }

  function scrollIntoView(element) {
    const offset = 80;

    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const scrollToPosition = absoluteElementTop - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
})();
