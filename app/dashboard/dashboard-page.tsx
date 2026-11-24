'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Activity = {
  initials: string;
  name: string;
  role: string;
  action: string;
  time: string;
  status: string;
  pending?: boolean;
};

const activities: Activity[] = [
  { initials: 'RA', name: 'Rina Ayu', role: 'Admin SD', action: 'Menambahkan data siswa baru', time: 'Hari ini, 09:42', status: 'Berhasil' },
  { initials: 'BS', name: 'Budi Santoso', role: 'Admin SMP', action: 'Memperbarui data kelas 8A', time: 'Hari ini, 08:15', status: 'Berhasil' },
  { initials: 'SA', name: 'Siti Aminah', role: 'Super Admin', action: 'Mengubah hak akses pengguna', time: 'Kemarin, 16:30', status: 'Berhasil' },
  { initials: 'DN', name: 'Dewi Nur', role: 'Admin SMA', action: 'Import data siswa', time: 'Kemarin, 14:20', status: 'Menunggu tinjauan', pending: true },
];

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: 'grid' },
  { label: 'Data Siswa', href: '/dashboard/siswa', icon: 'users' },
  { label: 'Guru & Staff', href: '/dashboard/pegawai', icon: 'staff' },
  { label: 'Unit Pendidikan', href: '/dashboard/pendidikan', icon: 'building' },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    users: <><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy="7" r="3.5" /><path d="M17 11a3.5 3.5 0 1 0-1-6.7" /></>,
    staff: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2.5" /><path d="M5.5 17c.8-2 2-3 3.5-3s2.7 1 3.5 3M15 9h3.5M15 13h3.5" /></>,
    building: <><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5M8 11h.01M12 11h.01M16 11h.01" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    person: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21v-1a7 7 0 0 1 14 0v1M19 11.5a3 3 0 0 1 0 5.8" /></>,
    clock: <><path d="M12 8v4l2.5 2.5M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const visibleActivities = useMemo(() => activities.filter((item) =>
    `${item.name} ${item.role} ${item.action} ${item.status}`.toLowerCase().includes(query.toLowerCase()),
  ), [query]);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2600);
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`} aria-label="Navigasi utama">
        <div className="brand"><img src="/assets/logo.png" alt="Logo As-Sadid" /><div><div className="brand-name">As-Sadid</div><div className="brand-subtitle">Management System</div></div></div>
        <div className="nav-label">Menu utama</div>
        <nav className="nav-list">
          {navItems.map((item) => <Link className={`nav-link${item.label === 'Dashboard' ? ' active' : ''}`} href={item.href} key={item.label} onClick={() => setSidebarOpen(false)}><span className="nav-icon"><Icon name={item.icon} /></span>{item.label}</Link>)}
        </nav>
        <div className="nav-label">Pengaturan</div>
        <nav className="nav-list">
          {[['Pengguna & Akses', 'person', '#pengguna'], ['Log Aktivitas', 'clock', '#audit']].map(([label, icon, href]) => <a className="nav-link" href={href} key={label}><span className="nav-icon"><Icon name={icon} /></span>{label}</a>)}
        </nav>
        <div className="sidebar-footer">Tahap 1 · Data mock sementara<br />Pondok Modern As-Sadid</div>
      </aside>

      <div className="main">
        <header className="topbar"><div className="topbar-left"><button className="menu-button" aria-label="Buka navigasi" onClick={() => setSidebarOpen((open) => !open)}>☰</button><div className="breadcrumb">Beranda <span aria-hidden="true">/</span> <strong>Dashboard</strong></div></div><div className="topbar-actions"><button className="icon-button" aria-label="Notifikasi" onClick={() => notify('Anda memiliki 3 notifikasi baru.')}>♧<span className="notification-dot" /></button><div className="profile"><div className="avatar">SA</div><div className="profile-details"><div className="profile-name">Siti Aminah</div><div className="profile-role">Super Admin</div></div></div></div></header>

        <main className="content" id="dashboard">
          <section className="page-heading"><div><p className="eyebrow">Ringkasan administrasi</p><h1>Selamat datang, Siti</h1><p className="page-description">Pantau data utama As-Sadid dan kelola aktivitas administrasi dari satu tempat.</p></div><button className="button button-primary" onClick={() => notify('Form tambah siswa siap digunakan pada modul Data Siswa.')}>+ Tambah Siswa</button></section>
          <section className="stats-grid" aria-label="Ringkasan data">
            {[['Total Siswa Aktif', '1.248', '↑ 8,4% dari tahun lalu', 'users'], ['Guru & Staff', '86', '↑ 4,2% dari tahun lalu', 'staff'], ['Unit Pendidikan', '4', 'PAUD hingga SMA', 'building'], ['Tahun Ajaran', '2025/26', 'Semester Ganjil aktif', 'calendar']].map(([label, value, change, icon], index) => <article className="card stat-card" key={label}><div><div className="stat-label">{label}</div><div className="stat-value">{value}</div><div className={`stat-change${index > 1 ? ' neutral' : ''}`}>{change}</div></div><div className={`stat-icon${index % 2 ? ' gold' : ''}`}><Icon name={icon} /></div></article>)}
          </section>
          <section className="dashboard-grid"><article className="card panel"><div className="panel-heading"><div><h2 className="panel-title">Pertumbuhan siswa</h2><p className="panel-subtitle">Perbandingan jumlah siswa aktif per bulan</p></div><select className="period-select" aria-label="Pilih periode grafik"><option>6 bulan terakhir</option><option>Tahun ajaran ini</option></select></div><div className="bar-chart" aria-label="Grafik pertumbuhan siswa">{['Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map((month, index) => <div className="bar-item" key={month}><div className="bar-group"><div className="bar" style={{ height: `${62 + index * 6}%` }} /><div className="bar secondary" style={{ height: `${48 + index * 5}%` }} /></div><span className="bar-label">{month}</span></div>)}</div><div className="chart-legend"><span className="legend-item"><i className="legend-dot" />Siswa aktif</span><span className="legend-item"><i className="legend-dot secondary" />Pendaftar baru</span></div></article><article className="card panel"><div className="panel-heading"><div><h2 className="panel-title">Sebaran siswa</h2><p className="panel-subtitle">Berdasarkan unit pendidikan</p></div></div><div className="distribution"><div className="donut"><div className="donut-center"><span className="donut-total">1.248</span><span className="donut-caption">siswa aktif</span></div></div></div><div className="distribution-list">{[['SD', '524', '42%'], ['SMP', '349', '28%'], ['SMA', '225', '18%'], ['PAUD/TK', '150', '12%']].map(([unit, total, percent]) => <div className="distribution-item" key={unit}><span className="distribution-name"><i className="legend-dot" />{unit}</span><span className="distribution-value">{total} <small>({percent})</small></span></div>)}</div></article></section>
          <section className="card table-card"><div className="panel-heading"><div><h2 className="panel-title">Aktivitas terbaru</h2><p className="panel-subtitle">Perubahan data terakhir di sistem</p></div><div className="table-tools"><input className="search" type="search" placeholder="Cari aktivitas..." aria-label="Cari aktivitas" value={query} onChange={(event) => setQuery(event.target.value)} /><button className="button button-secondary" onClick={() => notify('Filter aktivitas akan tersedia pada modul Log Aktivitas.')}>Filter</button></div></div><div className="table-scroll"><table><thead><tr><th>Pengguna</th><th>Aktivitas</th><th>Waktu</th><th>Status</th></tr></thead><tbody>{visibleActivities.map((item) => <tr key={item.name}><td><div className="person"><span className="person-avatar">{item.initials}</span><div><div className="person-name">{item.name}</div><div className="person-id">{item.role}</div></div></div></td><td>{item.action}</td><td>{item.time}</td><td><span className={`status${item.pending ? ' pending' : ''}`}>{item.status}</span></td></tr>)}</tbody></table>{!visibleActivities.length && <div className="empty-state">Tidak ada aktivitas yang sesuai.</div>}</div><div className="table-footer"><span>Menampilkan {visibleActivities.length} dari 24 aktivitas</span><div className="pagination">{[1, 2, 3].map((value) => <button className={`page-button${page === value ? ' active' : ''}`} key={value} onClick={() => { setPage(value); notify(`Halaman aktivitas ${value} dipilih.`); }}>{value}</button>)}<button className="page-button" aria-label="Halaman berikutnya" onClick={() => setPage((value) => Math.min(3, value + 1))}>→</button></div></div></section>
          <section className="card panel" style={{ marginTop: 24 }}><div className="panel-heading"><div><h2 className="panel-title">Aksi cepat</h2><p className="panel-subtitle">Pintasan untuk pekerjaan administrasi umum</p></div></div><div className="quick-actions">{[['Tambah siswa', 'Input data siswa baru'], ['Import data', 'Unggah data secara massal'], ['Kelola pengguna', 'Atur akun dan hak akses']].map(([title, description]) => <button className="quick-action" key={title} onClick={() => notify(`${title} akan tersedia pada modul terkait.`)}><span className="quick-action-icon">+</span><span><strong>{title}</strong><span>{description}</span></span></button>)}</div></section>
        </main>
      </div>
      <div className={`toast${toast ? ' show' : ''}`} role="status" aria-live="polite">{toast}</div>
    </div>
  );
}
