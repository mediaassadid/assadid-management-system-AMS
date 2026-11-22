const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => sidebar.classList.remove('open')));
document.getElementById('notificationButton').addEventListener('click', () => showToast('Anda memiliki 3 notifikasi baru.'));
const studentForm = document.getElementById('studentForm');
function syncConditionalFields() {
  const nationality = document.querySelector('input[name="kewarganegaraan"]:checked')?.value;
  const countryField = document.getElementById('countryField');
  countryField.hidden = nationality !== 'WNA';
  countryField.querySelector('input').required = nationality === 'WNA';
  if (nationality !== 'WNA') countryField.querySelector('input').value = '';
  const specialNeeds = document.querySelector('input[name="kebutuhan_khusus"]:checked')?.value;
  const specialNeedsField = document.getElementById('specialNeedsField');
  specialNeedsField.hidden = specialNeeds !== 'Ya';
  specialNeedsField.required = specialNeeds === 'Ya';
  if (specialNeeds !== 'Ya') specialNeedsField.value = '';
  const guardianType = document.querySelector('input[name="jenis_wali"]:checked')?.value;
  const otherGuardianFields = document.getElementById('otherGuardianFields');
  otherGuardianFields.hidden = guardianType !== 'Lainnya';
  otherGuardianFields.querySelectorAll('input').forEach(input => { input.required = guardianType === 'Lainnya' && input.name === 'nama_wali'; });
  if (guardianType !== 'Lainnya') otherGuardianFields.querySelectorAll('input').forEach(input => { input.value = ''; });
}
document.querySelectorAll('input[name="kewarganegaraan"], input[name="kebutuhan_khusus"], input[name="jenis_wali"]').forEach(input => input.addEventListener('change', syncConditionalFields));
syncConditionalFields();
studentForm.addEventListener('submit', event => { event.preventDefault(); const name = new FormData(studentForm).get('nama_lengkap'); showToast(`Data siswa ${name} tersimpan sebagai data mock.`); studentForm.reset(); syncConditionalFields(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
const formDialog = document.querySelector('.student-form-page');
const formSections = Array.from(document.querySelectorAll('.form-section-anchor'));
const scrollButtons = Array.from(document.querySelectorAll('[data-scroll-section]'));
scrollButtons.forEach(button => button.addEventListener('click', () => {
  const section = formSections[Number(button.dataset.scrollSection)];
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
if (formDialog && formSections.length) {
  const updateActiveSection = () => {
    const dialogTop = formDialog.getBoundingClientRect().top;
    let activeIndex = 0;
    formSections.forEach((section, index) => {
      if (section.getBoundingClientRect().top - dialogTop <= 140) activeIndex = index;
    });
    scrollButtons.forEach((button, index) => button.classList.toggle('active', index === activeIndex));
  };
  formDialog.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}
const pageSections = Array.from(document.querySelectorAll('.form-section-anchor'));
const pageScrollButtons = Array.from(document.querySelectorAll('[data-scroll-section]'));
pageScrollButtons.forEach(button => button.addEventListener('click', () => {
  const section = pageSections[Number(button.dataset.scrollSection)];
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
if (pageSections.length) {
  const updatePageSection = () => {
    let activeIndex = 0;
    pageSections.forEach((section, index) => { if (section.getBoundingClientRect().top <= 140) activeIndex = index; });
    pageScrollButtons.forEach((button, index) => button.classList.toggle('active', index === activeIndex));
  };
  window.addEventListener('scroll', updatePageSection, { passive: true });
  updatePageSection();
}
