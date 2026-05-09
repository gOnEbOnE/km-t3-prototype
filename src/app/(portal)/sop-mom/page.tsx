const docs = [
  { id: "SOP-MFG-001", title: "SOP Proses Stamping — Line A", type: "SOP", divisi: "Manufaktur", rev: "Rev.4", date: "2025-03-15", status: "Aktif" },
  { id: "SOP-QA-012", title: "SOP Inspeksi Kualitas Incoming Material", type: "SOP", divisi: "Quality", rev: "Rev.2", date: "2025-01-20", status: "Aktif" },
  { id: "MOM-APR25-01", title: "MOM Review Bulanan PIKA — April 2025", type: "MOM", divisi: "Lintas Divisi", rev: "—", date: "2025-04-05", status: "Final" },
  { id: "SOP-HR-008", title: "SOP NEOP — Orientasi Karyawan Baru", type: "SOP", divisi: "HR", rev: "Rev.3", date: "2025-02-10", status: "Aktif" },
  { id: "MOM-MAR25-02", title: "MOM Review Q1 — Dept. Engineering", type: "MOM", divisi: "Engineering", rev: "—", date: "2025-03-31", status: "Final" },
  { id: "SOP-LOG-003", title: "SOP Pengelolaan Gudang & FIFO", type: "SOP", divisi: "Logistik", rev: "Rev.1", date: "2024-12-01", status: "Review" },
];

export default function SopMomPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
            Dokumentasi Operasional
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
            SOP & MOM
          </h1>
        </div>
        <button className="btn btn-primary">+ Upload Dokumen</button>
      </div>

      <div className="callout" style={{ marginBottom: 24 }}>
        <strong>Routines & Externalization:</strong> Semua SOP teknis dan MOM rapat dikumpulkan di sini untuk memastikan standarisasi prosedur dan dokumentasi keputusan operasional.
      </div>

      <div className="km-card" style={{ padding: 0, overflow: "hidden", borderTop: "none" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="km-table">
            <thead>
              <tr>
                <th>ID Dokumen</th>
                <th>Judul</th>
                <th>Tipe</th>
                <th>Divisi</th>
                <th>Revisi</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d) => (
                <tr key={d.id}>
                  <td style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "var(--blue-primary)", fontSize: 12 }}>{d.id}</td>
                  <td style={{ fontWeight: 600, color: "var(--text-body)" }}>{d.title}</td>
                  <td>
                    <span className={`badge ${d.type === "SOP" ? "badge-blue" : "badge-gold"}`} style={{ fontSize: 10 }}>{d.type}</span>
                  </td>
                  <td style={{ fontSize: 13 }}>{d.divisi}</td>
                  <td style={{ fontSize: 12, color: "var(--gray-mid)" }}>{d.rev}</td>
                  <td style={{ fontSize: 12 }}>{d.date}</td>
                  <td>
                    <span className={`badge ${d.status === "Aktif" || d.status === "Final" ? "badge-blue" : "badge-gold"}`} style={{ fontSize: 10 }}>{d.status}</span>
                  </td>
                  <td>
                    <button className="btn btn-ghost" style={{ padding: "4px 12px", fontSize: 11 }}>↓ Unduh</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
