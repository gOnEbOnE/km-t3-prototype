const innovations = [
  { id: "INV-2025-041", title: "Otomatisasi Inspeksi Visual dengan Computer Vision", divisi: "R&D / IT", status: "Approved", impact: "Tinggi", submitter: "Tim CV-AOP", date: "2025-04-02" },
  { id: "INV-2025-038", title: "Sistem Monitoring Konsumsi Energi Real-time", divisi: "Engineering", status: "Review", impact: "Tinggi", submitter: "Dept. Engineering", date: "2025-03-28" },
  { id: "INV-2025-030", title: "Digitalisasi Form NEOP — Mobile-first", divisi: "HR", status: "Implementasi", impact: "Sedang", submitter: "HR Divisi Barat", date: "2025-03-10" },
  { id: "INV-2025-022", title: "Chatbot FAQ Internal berbasis LLM", divisi: "IT", status: "Review", impact: "Sedang", submitter: "Tim Digital", date: "2025-02-20" },
  { id: "INV-2025-015", title: "Lean 5S Digital Audit Dashboard", divisi: "Quality", status: "Approved", impact: "Tinggi", submitter: "Quality Dept.", date: "2025-02-05" },
  { id: "INV-2024-198", title: "Modul VLC Interaktif Berbasis Gamifikasi", divisi: "HR / IT", status: "Selesai", impact: "Tinggi", submitter: "L&D Team", date: "2024-11-15" },
];

const statusColor: Record<string, string> = {
  Approved: "badge-blue",
  Review: "badge-gold",
  Implementasi: "badge-red",
  Selesai: "badge-gray",
};

export default function InovAstraPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
            Innovation Platform
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
            INOVASTRA
          </h1>
        </div>
        <button className="btn btn-primary">+ Submit Inovasi</button>
      </div>

      <div className="callout gold" style={{ marginBottom: 24 }}>
        <strong>InovAstra</strong> adalah platform pengumpulan dan manajemen ide inovasi lintas divisi Astra Otoparts — mendukung proses <em>Combination</em> dalam kerangka KM.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {innovations.map((inv) => (
          <div key={inv.id} className="km-card" style={{ borderTopColor: inv.impact === "Tinggi" ? "var(--red-primary)" : "var(--gold)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span className={`badge ${statusColor[inv.status] || "badge-gray"}`}>{inv.status}</span>
              <span className={`badge ${inv.impact === "Tinggi" ? "badge-red" : "badge-gold"}`}>{inv.impact}</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 6 }}>
              {inv.id}
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, color: "var(--text-body)", marginBottom: 12, lineHeight: 1.3 }}>
              {inv.title}
            </div>
            <div style={{ fontSize: 13, color: "var(--gray-dark)", display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span>🏢 {inv.divisi}</span>
              <span>👤 {inv.submitter}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--gray-mid)", marginTop: 8 }}>{inv.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
