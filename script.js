const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const profileImage = document.getElementById('profileImage');
const profilePlaceholder = document.getElementById('profilePlaceholder');
function updateProfile() {
  if (profileImage.complete && profileImage.naturalWidth > 0) {
    profileImage.classList.remove('hidden');
    profilePlaceholder.classList.add('hidden');
  } else {
    profileImage.classList.add('hidden');
    profilePlaceholder.classList.remove('hidden');
  }
}
profileImage?.addEventListener('load', updateProfile);
profileImage?.addEventListener('error', updateProfile);
updateProfile();

const toast = document.getElementById('toast');
document.getElementById('copyEmail')?.addEventListener('click', async () => {
  const email = 'aniketsinghsonu123@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email address copied!';
  } catch {
    toast.textContent = 'Email: ' + email;
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}
