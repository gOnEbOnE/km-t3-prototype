const docs = [
  { id: "KB-001", title: "Panduan Implementasi Lean Manufacturing", category: "Combination", type: "Explicit", divisi: "Manufaktur", updated: "2025-04-10", status: "Aktif" },
  { id: "KB-002", title: "Kurikulum Pengembangan Kompetensi Teknisi", category: "Internalization", type: "Tacit", divisi: "HR", updated: "2025-03-22", status: "Aktif" },
  { id: "KB-003", title: "SOP Audit Internal ISO 9001:2015", category: "Routines", type: "Explicit", divisi: "Quality", updated: "2025-04-01", status: "Aktif" },
  { id: "KB-004", title: "Rekap MOM Review Bulanan PIKA — Q1 2025", category: "Externalization", type: "Explicit", divisi: "Lintas Divisi", updated: "2025-04-05", status: "Aktif" },
  { id: "KB-005", title: "Modul VLC — Troubleshooting Mesin CNC", category: "Exchange", type: "Explicit", divisi: "Produksi", updated: "2025-02-18", status: "Review" },
  { id: "KB-006", title: "Best Practice OJT Batch 2024 — Divisi Logistik", category: "Socialization", type: "Tacit", divisi: "Logistik", updated: "2024-12-10", status: "Arsip" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
            Repository
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
            KNOWLEDGE BASE
          </h1>
        </div>
        <button className="btn btn-primary">+ Tambah Dokumen</button>
      </div>

      <div className="flex gap-3 mb-6 flex-wrap">
        {["Semua", "Combination", "Exchange", "Routines", "Internalization", "Externalization", "Socialization"].map((f) => (
          <button key={f} className={`btn ${f === "Semua" ? "btn-primary" : "btn-ghost"}`} style={{ padding: "6px 16px", fontSize: 12 }}>
            {f}
          </button>
        ))}
      </div>

      <div className="km-card" style={{ padding: 0, overflow: "hidden", borderTop: "none" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="km-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Judul Dokumen</th>
                <th>Kategori KM</th>
                <th>Tipe</th>
                <th>Divisi</th>
                <th>Diperbarui</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d) => (
                <tr key={d.id} style={{ cursor: "pointer" }}>
                  <td style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "var(--blue-primary)" }}>{d.id}</td>
                  <td style={{ fontWeight: 600, color: "var(--text-body)" }}>{d.title}</td>
                  <td><span className="badge badge-blue" style={{ fontSize: 10 }}>{d.category}</span></td>
                  <td>
                    <span className="badge" style={{
                      border: `1.5px solid ${d.type === "Explicit" ? "var(--blue-primary)" : "var(--red-primary)"}`,
                      color: d.type === "Explicit" ? "var(--blue-primary)" : "var(--red-primary)",
                      background: "transparent",
                      fontSize: 10,
                    }}>
                      {d.type}
                    </span>
                  </td>
                  <td>{d.divisi}</td>
                  <td style={{ fontSize: 12 }}>{d.updated}</td>
                  <td>
                    <span className={`badge ${d.status === "Aktif" ? "badge-blue" : d.status === "Review" ? "badge-gold" : "badge-gray"}`} style={{ fontSize: 10 }}>
                      {d.status}
                    </span>
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
