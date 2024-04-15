const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuMd = document.getElementById("menu-md");
const logo = document.getElementById("logo");
const tabFaqs = document
  .getElementById("faq-accordion")
  .querySelectorAll(".faq-tab");

window.onresize = () => {
  if (menu.classList.contains("flex")) {
    btn.classList.replace("md:hidden", "md:visible");
    menuMd.classList.remove("md:flex");
  } else {
    menuMd.classList.add("md:flex");

    if (btn.classList.contains("md:visible")) {
      btn.classList.replace("md:visible", "md:hidden");
    }
  }
};

const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    document.body.classList.add("overflow-hidden");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
    document.body.classList.remove("overflow-hidden");
  }
};

// Handle clicks on tabs features
function handleClickTab(e) {
  // Change color for the tab actived
  tabs.forEach((tab) => {
    tab.children[0].classList.replace("border-softRed", "border-transparent");
  });
  // Hide for all panel
  panels.forEach((panel) => panel.classList.add("hidden"));
  // If tab that was clicked wasn't previously selected
  if (!e.target.parentElement.getAttribute("data-target")) {
    e.target.children[0].classList.replace(
      "border-transparent",
      "border-softRed"
    );
  } else {
    e.target.classList.replace("border-transparent", "border-softRed");
  }

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.replace("hidden", "flex");
}

tabs.forEach((tab) => tab.addEventListener("click", handleClickTab));

btn.onclick = () => {
  if (menu.classList.contains("flex")) {
    btn.classList.replace("md:visible", "md:hidden");
    menuMd.classList.add("md:flex");
  } else {
    menuMd.classList.remove("md:flex");
  }
  navToggle();
};

menu.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", navToggle);
});

// Test
tabFaqs.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.matches(":focus")) {
      tab.classList.toggle("active");
    }
  });
});
