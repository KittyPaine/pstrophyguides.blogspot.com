// 1. Trophy Filtering System (#trophySearch)
// What it does: Dynamically filters trophy cards, DLC overview nodes, and category sections in real time based on user input, matching by trophy name, DLC group name, or DLC pricing status ("paid" or "free").
// Updated Trophy Filtering System (#trophySearch) with Physical DLC Containers
function filterTrophies() {
  const input = document.querySelector("#trophySearch");
  if (!input) return;

  const query = input.value.toLowerCase().trim();
  const isStatusSearch = query === "paid" || query === "free";
  const wantedStatus = query === "paid" ? "true" : "false";

  // 1. Process physical DLC containers (the parent wrappers)
  const dlcContainers = document.querySelectorAll(".dlc-container");
  const matchingGroups = new Set();

  for (const container of dlcContainers) {
    const group = (container.dataset.group || "").toLowerCase().trim();
    const paidStatus = container.dataset.paid;

    const groupMatches = !isStatusSearch && query !== "" && group.includes(query);
    const matches = !query || (isStatusSearch ? paidStatus === wantedStatus : groupMatches);

    // If the DLC container matches, keep it visible; otherwise hide it entirely
    container.classList.toggle("is-hidden", !matches);
    container.style.setProperty("display", matches ? "block" : "none", "important");

    if (matches && group) matchingGroups.add(group);
  }

  // 2. Process individual base-game / loose trophies outside DLC wrappers
  for (const trophy of document.querySelectorAll(".trophy, .dlc-trophy")) {
    // Skip trophies already safely nested inside a DLC container (handled by container visibility)
    if (trophy.closest(".dlc-container")) continue;

    const name = (trophy.dataset.name || "").toLowerCase();
    const matches = !query || name.includes(query);

    trophy.classList.toggle("is-hidden", !matches);
    trophy.style.setProperty("display", matches ? "flex" : "none", "important");
  }

  // 3. Category Section Containment Check (protecting videos, tables, and isolated elements)
  for (const section of document.querySelectorAll(".category-section")) {
    const hasVisibleContent = section.querySelector(".dlc-container:not(.is-hidden), .trophy:not(.is-hidden), .dlc-trophy:not(.is-hidden)");

    section.style.setProperty("display", !query || hasVisibleContent ? "block" : "none", "important");
  }
}

function initializeTrophySearch() {
  const input = document.querySelector("#trophySearch");

  if (input) {
    input.placeholder = "Filter by Trophy Name, DLC Name, Paid or Free for DLC";
    filterTrophies();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTrophySearch);
} else {
  initializeTrophySearch();
}

document.addEventListener("input", function (event) {
  if (event.target && event.target.id === "trophySearch") {
    filterTrophies();
  }
});

// 2. SEO Post Title Heading Fix (h3.post-title -> h1.post-title)
// What it does: Instantly transforms Blogger's default h3 post headlines into semantic h1 tags on page load while preserving existing CSS classes and styling.
document.addEventListener("DOMContentLoaded", function () {
  var postTitles = document.querySelectorAll("h3.post-title");
  postTitles.forEach(function (oldH3) {
    var h1 = document.createElement("h1");
    h1.className = oldH3.className;
    h1.innerHTML = oldH3.innerHTML;
    oldH3.parentNode.replaceChild(h1, oldH3);
  });
});

// 3. Mobile Desktop Viewport Override (1360px @ 0.28 Scale)
// What it does: Removes Blogger's hardcoded width=1100 mobile viewport tag and forces mobile browsers to render the full 1360px desktop layout zoomed out to 28% by default while keeping pinch-to-zoom enabled.
document.querySelectorAll('meta[name="viewport"]').forEach(function (tag) {
  tag.remove();
});
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=1360, initial-scale=0.28, maximum-scale=5.0, user-scalable=yes";
document.head.appendChild(meta);

// 4. Canonical URL Hygiene (?m=1 Parameter Stripper)
// What it does: Silently strips Blogger's ?m=1 / &m=1 mobile redirect parameter from the browser address bar via history.replaceState without reloading the page.
if (window.location.search.indexOf("m=1") > -1) {
  let cleanUrl = window.location.href.replace("?m=1", "").replace("&m=1", "");
  window.history.replaceState(null, null, cleanUrl);
}
