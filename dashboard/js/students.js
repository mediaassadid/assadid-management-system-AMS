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
const selectAllStudents = document.querySelector('thead input[type="checkbox"]');
const bulkActions = document.getElementById('bulkActions');
const selectedCount = document.getElementById('selectedCount');
const bulkStatus = document.getElementById('bulkStatus');
const selectedRows = () => rows.filter(row => row.querySelector('td:first-child input[type="checkbox"]')?.checked);
function refreshBulkActions() { const selected = selectedRows(); selectedCount.textContent = selected.length; bulkActions.hidden = selected.length === 0; selectAllStudents.checked = selected.length > 0 && selected.length === rows.length; selectAllStudents.indeterminate = selected.length > 0 && selected.length < rows.length; }
rows.forEach(row => row.querySelector('td:first-child input[type="checkbox"]')?.addEventListener('change', refreshBulkActions));
selectAllStudents.addEventListener('change', () => { rows.forEach(row => { const checkbox = row.querySelector('td:first-child input[type="checkbox"]'); if (checkbox) checkbox.checked = selectAllStudents.checked; }); refreshBulkActions(); });
document.getElementById('clearSelection').addEventListener('click', () => { rows.forEach(row => { const checkbox = row.querySelector('td:first-child input[type="checkbox"]'); if (checkbox) checkbox.checked = false; }); refreshBulkActions(); });
document.getElementById('applyBulkStatus').addEventListener('click', () => { const value = bulkStatus.value; if (!value) { showToast('Pilih status baru terlebih dahulu.'); return; } selectedRows().forEach(row => { row.dataset.status = value; const badge = row.querySelector('.status'); badge.textContent = value; badge.className = 'status'; const statusClass = { Alumni: 'alumni', Nonaktif: 'inactive', Pindah: 'moved', Dikeluarkan: 'expelled' }[value]; if (statusClass) badge.classList.add(statusClass); }); showToast(`Status ${selectedRows().length} siswa berhasil diubah menjadi ${value}.`); bulkStatus.value = ''; refreshBulkActions(); });
document.getElementById('exportSelected').addEventListener('click', () => { const selected = selectedRows(); if (!selected.length) return; showToast(`${selected.length} siswa siap diexport sebagai data mock.`); });
function filterStudents() { const query = search.value.toLowerCase(); const unit = unitFilter.value; const status = statusFilter.value; let visible = 0; rows.forEach(row => { const matches = row.textContent.toLowerCase().includes(query) && (!unit || row.dataset.unit === unit) && (!status || row.dataset.status === status); row.hidden = !matches; if (matches) visible += 1; }); document.getElementById('resultCount').textContent = `Menampilkan ${visible} data mock dari 1.248 siswa`; }
[search, unitFilter, statusFilter].forEach(control => control.addEventListener('input', filterStudents));
document.getElementById('resetFilters').addEventListener('click', () => { search.value = ''; unitFilter.value = ''; statusFilter.value = ''; filterStudents(); });
const studentDetailModal = document.getElementById('studentDetailModal');
const detailFormData = document.getElementById('detailFormData');
const detailFields = { name: document.getElementById('detailName'), id: document.getElementById('detailId'), avatar: document.getElementById('detailAvatar'), status: document.getElementById('detailStatus'), statusText: document.getElementById('detailStatusText'), nisn: document.getElementById('detailNisn'), studentClass: document.getElementById('detailClass'), gender: document.getElementById('detailGender') };
let activeStudentData = null;
let lastSubmittedStudentData = null;
let editingStudentData = null;
let activeStudentRow = null;
const detailSections = [
  { title: 'A. Data pribadi siswa', fields: [['Nama lengkap', 'nama_lengkap'], ['Nama panggilan', 'nama_panggilan'], ['Jenis kelamin', 'jenis_kelamin'], ['Tempat lahir', 'tempat_lahir'], ['Tanggal lahir', 'tanggal_lahir'], ['NIK', 'nik'], ['Nomor KK', 'nomor_kk'], ['NISN', 'nisn'], ['Agama', 'agama'], ['Kewarganegaraan', 'kewarganegaraan'], ['Negara', 'negara'], ['Anak ke-', 'anak_ke'], ['Dari bersaudara', 'jumlah_bersaudara']] },
  { title: 'B. Data tempat tinggal', fields: [['Alamat rumah lengkap', 'alamat', true], ['RT', 'rt'], ['RW', 'rw'], ['Desa / Kelurahan', 'desa'], ['Kecamatan', 'kecamatan'], ['Kabupaten / Kota', 'kabupaten_kota'], ['Kode pos', 'kode_pos']] },
  { title: 'C. Data kesehatan & keselamatan', fields: [['Golongan darah', 'golongan_darah'], ['Tinggi badan (cm)', 'tinggi_badan'], ['Berat badan (kg)', 'berat_badan'], ['Riwayat penyakit', 'riwayat_penyakit', true], ['Riwayat alergi', 'riwayat_alergi', true], ['Berkebutuhan khusus / disabilitas', 'kebutuhan_khusus'], ['Detail kebutuhan khusus', 'detail_kebutuhan_khusus', true]] },
  { title: 'D. Pendidikan sebelumnya & bantuan', fields: [['Asal sekolah', 'asal_sekolah'], ['Kota sekolah asal', 'kota_sekolah_asal'], ['Tahun lulus', 'tahun_lulus']] },
  { title: 'E. Data orang tua / wali', fields: [['Nama lengkap ayah', 'nama_ayah'], ['NIK ayah', 'nik_ayah'], ['TTL ayah', 'ttl_ayah'], ['Pendidikan ayah', 'pendidikan_ayah'], ['Pekerjaan ayah', 'pekerjaan_ayah'], ['Penghasilan ayah', 'penghasilan_ayah'], ['No. HP ayah', 'telepon_ayah'], ['Nama lengkap ibu', 'nama_ibu'], ['NIK ibu', 'nik_ibu'], ['TTL ibu', 'ttl_ibu'], ['Pendidikan ibu', 'pendidikan_ibu'], ['Pekerjaan ibu', 'pekerjaan_ibu'], ['Penghasilan ibu', 'penghasilan_ibu'], ['No. HP ibu', 'telepon_ibu'], ['Jenis wali', 'jenis_wali'], ['Nama lengkap wali', 'nama_wali'], ['Hubungan wali', 'hubungan_wali'], ['NIK wali', 'nik_wali'], ['Pekerjaan wali', 'pekerjaan_wali'], ['No. HP wali', 'telepon_wali']] },
  { title: 'F. Dokumen siswa', fields: [['Foto', 'foto'], ['Akta lahir', 'akta_lahir'], ['Kartu Keluarga', 'kartu_keluarga'], ['Ijazah terakhir', 'ijazah_terakhir']] }
];
function formDataToObject(formData) { const data = {}; formData.forEach((value, key) => { if (value instanceof File) data[key] = value.name || ''; else if (data[key]) data[key] += `, ${value}`; else data[key] = value; }); return data; }
function displayValue(value) { return value || 'Belum diisi'; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]); }
function renderDetailFormData(data) { detailFormData.innerHTML = detailSections.map(section => `<section class="detail-data-section"><h4>${section.title}</h4><div class="detail-data-grid">${section.fields.map(([label, key, full]) => `<div class="detail-data-item${full ? ' full' : ''}"><span>${label}</span><strong>${escapeHtml(displayValue(data?.[key]))}</strong></div>`).join('')}</div></section>`).join(''); }
function getCurrentFormData() { return formDataToObject(new FormData(studentForm)); }
function setFormValue(name, value) {
  const fields = Array.from(studentForm.elements).filter(field => field.name === name);
  if (!fields.length) return;
  if (fields[0].type === 'radio') fields.forEach(field => { field.checked = field.value === value; });
  else if (fields[0].type !== 'file') fields[0].value = value || '';
}
function populateStudentForm(data) { Object.entries(data || {}).forEach(([name, value]) => setFormValue(name, value)); syncStudentConditionalFields(); }
function openStudentEditor() { if (!editingStudentData) return; populateStudentForm(editingStudentData); studentDetailModal.hidden = true; openStudentModal(); showToast('Mode edit aktif. Perbarui data siswa lalu simpan.'); }
function openStudentDetail(row) {
  const cells = row.querySelectorAll('td');
  activeStudentRow = row;
  const rowName = row.querySelector('.person-name')?.textContent.trim() || '-';
  const rowId = row.querySelector('.person-id')?.textContent.trim() || '-';
  const rowStatus = row.dataset.status || '-';
  activeStudentData = { nama_lengkap: rowName, nisn: cells[2]?.textContent.trim() || '', asal_sekolah: cells[3]?.textContent.trim() || '', jenis_kelamin: cells[4]?.textContent.trim() || '', status: rowStatus };
  const data = lastSubmittedStudentData || activeStudentData;
  editingStudentData = data;
  const name = data.nama_lengkap || rowName;
  const status = data.status || rowStatus;
  detailFields.name.textContent = name;
  detailFields.id.textContent = data.nis || rowId;
  detailFields.avatar.textContent = name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase() || '--';
  detailFields.status.textContent = status;
  detailFields.status.classList.remove('pending', 'alumni', 'inactive', 'moved', 'expelled');
  const statusClass = { Alumni: 'alumni', Nonaktif: 'inactive', Pindah: 'moved', Dikeluarkan: 'expelled' }[status];
  if (statusClass) detailFields.status.classList.add(statusClass);
  detailFields.statusText.textContent = status;
  detailFields.nisn.textContent = data.nisn || '-';
  detailFields.studentClass.textContent = data.asal_sekolah || '-';
  detailFields.gender.textContent = data.jenis_kelamin || '-';
  renderDetailFormData(data);
  studentDetailModal.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeStudentDetail() { studentDetailModal.hidden = true; document.body.style.overflow = ''; }
document.querySelectorAll('.row-action').forEach(button => button.addEventListener('click', () => openStudentDetail(button.closest('tr'))));
document.querySelectorAll('[data-close-student-detail]').forEach(button => button.addEventListener('click', closeStudentDetail));
document.getElementById('editStudentButton').addEventListener('click', openStudentEditor);
document.querySelectorAll('.page-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.page-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); showToast('Halaman data siswa ' + button.textContent + ' dipilih.'); }));
const studentModal = document.getElementById('studentModal');
const studentForm = document.getElementById('studentForm');
function openStudentModal() { studentModal.hidden = false; document.body.style.overflow = 'hidden'; document.querySelector('[data-scroll-section="0"]')?.classList.add('active'); studentModal.querySelector('input')?.focus(); }
function closeStudentModal() { studentModal.hidden = true; document.body.style.overflow = ''; }
document.getElementById('addStudentButton').addEventListener('click', event => { event.preventDefault(); lastSubmittedStudentData = null; openStudentModal(); });
document.querySelectorAll('[data-close-student-modal]').forEach(button => button.addEventListener('click', closeStudentModal));
document.addEventListener('keydown', event => { if (event.key !== 'Escape') return; if (!studentModal.hidden) closeStudentModal(); if (!studentDetailModal.hidden) closeStudentDetail(); });
studentForm.addEventListener('submit', event => { event.preventDefault(); lastSubmittedStudentData = getCurrentFormData(); const name = lastSubmittedStudentData.nama_lengkap || 'Siswa baru'; if (activeStudentRow) { activeStudentRow.dataset.status = lastSubmittedStudentData.status; const statusBadge = activeStudentRow.querySelector('.status'); statusBadge.textContent = lastSubmittedStudentData.status; statusBadge.className = 'status'; const statusClass = { Alumni: 'alumni', Nonaktif: 'inactive', Pindah: 'moved', Dikeluarkan: 'expelled' }[lastSubmittedStudentData.status]; if (statusClass) statusBadge.classList.add(statusClass); } const message = editingStudentData ? `Data siswa ${name} berhasil diperbarui sebagai data mock.` : `Data siswa ${name} tersimpan sebagai data mock.`; editingStudentData = null; closeStudentModal(); showToast(message); studentForm.reset(); syncStudentConditionalFields(); });
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

