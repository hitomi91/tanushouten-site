const currentYearTargets = document.querySelectorAll("[data-current-year]");
const currentYear = new Date().getFullYear();

currentYearTargets.forEach((target) => {
  target.textContent = currentYear;
});

document.querySelectorAll("[data-mail-user][data-mail-domain]").forEach((link) => {
  const address = `${link.dataset.mailUser}@${link.dataset.mailDomain}`;
  link.textContent = address;
  link.href = `mailto:${address}`;
});
