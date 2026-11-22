const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => sidebar.classList.remove('open')));
document.getElementById('notificationButton').addEventListener('click', () => showToast('Anda memiliki 3 notifikasi baru.'));
document.getElementById('importButton').addEventListener('click', () => showToast('Fitur import data siswa akan tersedia setelah database terhubung.'));
document.getElementById('exportButton').addEventListener('click', () => showToast('Export data siswa masih menggunakan data mock.'));
const search = document.getElementById('studentSearch');
const unitFilter = document.getElementById('unitFilter');
const statusFilter = document.getElementById('statusFilter');
const rows = Array.from(document.querySelectorAll('#studentBody tr'));
function filterStudents() { const query = search.value.toLowerCase(); const unit = unitFilter.value; const status = statusFilter.value; let visible = 0; rows.forEach(row => { const matches = row.textContent.toLowerCase().includes(query) && (!unit || row.dataset.unit === unit) && (!status || row.dataset.status === status); row.hidden = !matches; if (matches) visible += 1; }); document.getElementById('resultCount').textContent = `Menampilkan ${visible} data mock dari 1.248 siswa`; }
[search, unitFilter, statusFilter].forEach(control => control.addEventListener('input', filterStudents));
document.getElementById('resetFilters').addEventListener('click', () => { search.value = ''; unitFilter.value = ''; statusFilter.value = ''; filterStudents(); });
document.querySelectorAll('.row-action').forEach(button => button.addEventListener('click', () => showToast(`Detail ${button.dataset.name} akan dibuka pada modul profil siswa.`)));
document.querySelectorAll('.page-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.page-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); showToast('Halaman data siswa ' + button.textContent + ' dipilih.'); }));
const studentModal = document.getElementById('studentModal');
const studentForm = document.getElementById('studentForm');
function openStudentModal() { studentModal.hidden = false; document.body.style.overflow = 'hidden'; document.querySelector('[data-scroll-section="0"]')?.classList.add('active'); studentModal.querySelector('input')?.focus(); }
function closeStudentModal() { studentModal.hidden = true; document.body.style.overflow = ''; }
document.getElementById('addStudentButton').addEventListener('click', event => { event.preventDefault(); openStudentModal(); });
document.querySelectorAll('[data-close-student-modal]').forEach(button => button.addEventListener('click', closeStudentModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !studentModal.hidden) closeStudentModal(); });
studentForm.addEventListener('submit', event => { event.preventDefault(); const name = new FormData(studentForm).get('nama_lengkap'); closeStudentModal(); showToast(`Data siswa ${name} tersimpan sebagai data mock.`); studentForm.reset(); syncStudentConditionalFields(); });
const modalSections = Array.from(studentModal.querySelectorAll('.form-section-anchor'));
const modalScrollButtons = Array.from(studentModal.querySelectorAll('[data-scroll-section]'));
modalScrollButtons.forEach(button => button.addEventListener('click', () => { const section = modalSections[Number(button.dataset.scrollSection)]; if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
studentModal.querySelector('.student-modal-dialog')?.addEventListener('scroll', () => { const dialog = studentModal.querySelector('.student-modal-dialog'); let active = 0; modalSections.forEach((section, index) => { if (section.getBoundingClientRect().top - dialog.getBoundingClientRect().top <= 120) active = index; }); modalScrollButtons.forEach((button, index) => button.classList.toggle('active', index === active)); }, { passive: true });
function syncStudentConditionalFields() {
  const nationality = document.querySelector('input[name="kewarganegaraan"]:checked')?.value;
  const countryField = document.getElementById('countryField');
  const countryInput = countryField?.querySelector('input');
  if (countryField && countryInput) {
    countryField.hidden = nationality !== 'WNA';
    countryInput.required = nationality === 'WNA';
    if (nationality !== 'WNA') countryInput.value = '';
  }

  const specialNeeds = document.querySelector('input[name="kebutuhan_khusus"]:checked')?.value;
  const specialNeedsField = document.getElementById('specialNeedsField');
  if (specialNeedsField) {
    specialNeedsField.hidden = specialNeeds !== 'Ya';
    specialNeedsField.required = specialNeeds === 'Ya';
    if (specialNeeds !== 'Ya') specialNeedsField.value = '';
  }

  const guardianType = document.querySelector('input[name="jenis_wali"]:checked')?.value;
  const guardianFields = document.getElementById('otherGuardianFields');
  if (guardianFields) {
    guardianFields.hidden = guardianType !== 'Lainnya';
    guardianFields.querySelectorAll('input').forEach(input => {
      input.required = guardianType === 'Lainnya' && input.name === 'nama_wali';
      if (guardianType !== 'Lainnya') input.value = '';
    });
  }
}
document.querySelectorAll('input[name="kewarganegaraan"], input[name="kebutuhan_khusus"], input[name="jenis_wali"]').forEach(input => input.addEventListener('change', syncStudentConditionalFields));
syncStudentConditionalFields();

