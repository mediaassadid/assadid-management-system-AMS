
    const sidebar = document.getElementById('sidebar');
    const toast = document.getElementById('toast');
    let toastTimer;
    function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
    document.getElementById('menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
    document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => sidebar.classList.remove('open')));
    document.getElementById('notificationButton').addEventListener('click', () => showToast('Anda memiliki 3 notifikasi baru.'));
    document.getElementById('addStudentButton').addEventListener('click', () => showToast('Form tambah siswa siap digunakan pada modul Data Siswa.'));
    document.getElementById('filterButton').addEventListener('click', () => showToast('Filter aktivitas akan tersedia pada modul Log Aktivitas.'));
    document.querySelectorAll('.quick-action').forEach(button => button.addEventListener('click', () => showToast(button.dataset.action + ' akan tersedia pada modul terkait.')));
    document.querySelectorAll('.page-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.page-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); showToast('Halaman aktivitas ' + button.textContent + ' dipilih.'); }));
    document.getElementById('activitySearch').addEventListener('input', event => { const query = event.target.value.toLowerCase(); document.querySelectorAll('#activityBody tr').forEach(row => { row.hidden = !row.textContent.toLowerCase().includes(query); }); });
  
