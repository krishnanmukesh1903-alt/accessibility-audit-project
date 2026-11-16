(() => {
  "use strict";
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menu && nav) menu.addEventListener("click", () => {
    const expanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
  document.querySelectorAll("[data-open-dialog]").forEach((button) => button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.openDialog);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  }));
  const save = document.querySelector("#save-report");
  const form = document.querySelector("#report-form");
  const dialog = document.querySelector("#report-dialog");
  const feedback = document.querySelector("#dialog-feedback");
  if (save && form && dialog && feedback) save.addEventListener("click", () => {
    if (!form.reportValidity()) return;
    const name = document.querySelector("#report-name").value.trim();
    feedback.textContent = `Draft "${name}" is ready for review.`;
    window.setTimeout(() => { dialog.close(); form.reset(); feedback.textContent = ""; }, 1000);
  });
  const settings = document.querySelector("#settings-form");
  const settingsFeedback = document.querySelector("#settings-feedback");
  if (settings && settingsFeedback) settings.addEventListener("submit", (event) => {
    event.preventDefault();
    if (settings.reportValidity()) settingsFeedback.textContent = "Your settings have been saved for this demo.";
  });
})();
