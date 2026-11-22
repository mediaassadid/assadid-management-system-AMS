const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => sidebar.classList.remove('open')));
document.getElementById('notificationButton').addEventListener('click', () => showToast('Anda memiliki 3 notifikasi baru.'));
document.getElementById('importStaffButton').addEventListener('click', () => showToast('Fitur import guru dan pegawai akan tersedia setelah database terhubung.'));
document.getElementById('exportStaffButton').addEventListener('click', () => showToast('Export guru dan pegawai masih menggunakan data mock.'));
const staffModal = document.getElementById('staffModal');
const staffForm = document.getElementById('staffForm');
function closeStaffModal() { staffModal.hidden = true; document.body.style.overflow = ''; }
function updateStaffFormNav(activeId) { document.querySelectorAll('.staff-form-nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`)); }
function openStaffModal() { staffModal.hidden = false; document.body.style.overflow = 'hidden'; updateStaffFormNav('staff-personal'); staffModal.querySelector('input, select, textarea').focus(); }
const staffFormBody = document.querySelector('.staff-form-body');
document.querySelectorAll('.staff-form-nav a').forEach(link => link.addEventListener('click', () => updateStaffFormNav(link.getAttribute('href').slice(1))));
staffFormBody.addEventListener('scroll', () => { const sections = [...staffFormBody.querySelectorAll('fieldset')]; const current = sections.reduce((active, section) => section.offsetTop - staffFormBody.scrollTop <= 40 ? section : active, sections[0]); if (current) updateStaffFormNav(current.id); });
document.getElementById('addStaffButton').addEventListener('click', openStaffModal);
document.querySelectorAll('[data-close-staff-modal]').forEach(control => control.addEventListener('click', closeStaffModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !staffModal.hidden) closeStaffModal(); });
staffForm.addEventListener('submit', event => { event.preventDefault(); const name = staffForm.elements.fullName.value.trim() || 'Personel baru'; closeStaffModal(); showToast(`${name} berhasil disimpan sebagai data mock.`); staffForm.reset(); });
const search = document.getElementById('staffSearch');
const typeFilter = document.getElementById('staffTypeFilter');
const statusFilter = document.getElementById('staffStatusFilter');
const rows = Array.from(document.querySelectorAll('#staffBody tr'));
function filterStaff() { const query = search.value.toLowerCase(); const type = typeFilter.value; const status = statusFilter.value; let visible = 0; rows.forEach(row => { const matches = row.textContent.toLowerCase().includes(query) && (!type || row.dataset.type === type) && (!status || row.dataset.status === status); row.hidden = !matches; if (matches) visible += 1; }); document.getElementById('staffResultCount').textContent = `Menampilkan ${visible} data mock dari 186 personel`; }
[search, typeFilter, statusFilter].forEach(control => control.addEventListener('input', filterStaff));
document.getElementById('resetStaffFilters').addEventListener('click', () => { search.value = ''; typeFilter.value = ''; statusFilter.value = ''; filterStaff(); });
document.querySelectorAll('.staff-detail').forEach(button => button.addEventListener('click', () => showToast('Detail personel akan dibuka pada modul profil guru dan pegawai.')));
document.querySelectorAll('.page-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.page-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); showToast('Halaman data guru dan pegawai ' + button.textContent + ' dipilih.'); }));
