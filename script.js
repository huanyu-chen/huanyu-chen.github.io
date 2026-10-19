"use strict";

document.getElementById("year").textContent = new Date().getFullYear().toString();

const visitCountElement = document.getElementById("visit-count");

if (visitCountElement) {
  const storageKey = "academic-profile-visit-count";
  let visitCount = 1;

  try {
    const storedCount = Number.parseInt(localStorage.getItem(storageKey) ?? "0", 10);
    visitCount = Number.isNaN(storedCount) ? 1 : storedCount + 1;
    localStorage.setItem(storageKey, visitCount.toString());
  } catch {
    visitCount = 1;
  }

  visitCountElement.textContent = visitCount.toLocaleString("zh-TW");
}

