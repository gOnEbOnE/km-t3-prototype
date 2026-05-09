const courses = [
  { code: "VLC-101", title: "Dasar-dasar Lean Manufacturing", type: "VLC", duration: "4 jam", enrolled: 1240, completion: 92, level: "Dasar" },
  { code: "CBT-204", title: "ISO 9001:2015 Internal Auditor", type: "CBT", duration: "6 jam", enrolled: 840, completion: 87, level: "Menengah" },
  { code: "VLC-315", title: "Troubleshooting Mesin CNC — Level 2", type: "VLC", duration: "8 jam", enrolled: 560, completion: 74, level: "Lanjut" },
  { code: "CBT-110", title: "K3 & Safety Awareness di Area Produksi", type: "CBT", duration: "2 jam", enrolled: 2100, completion: 98, level: "Dasar" },
  { code: "VLC-222", title: "Leadership for Team Leader", type: "VLC", duration: "5 jam", enrolled: 430, completion: 81, level: "Menengah" },
  { code: "CBT-401", title: "Digital Transformation — Pengantar IoT", type: "CBT", duration: "3 jam", enrolled: 320, completion: 65, level: "Lanjut" },
];

export default function TrainingPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
            Learning & Development
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
            VLC / TRAINING
          </h1>
        </div>
        <button className="btn btn-primary">+ Buat Kursus</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="stat-card">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 10, fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase" }}>Total Kursus</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "white" }}>48</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Kursus Aktif</div>
        </div>
        <div className="km-card" style={{ borderTopColor: "var(--gold)" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 8 }}>Rata-rata</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "var(--blue-primary)" }}>94%</div>
          <div style={{ fontSize: 13, color: "var(--gray-dark)", marginTop: 6 }}>Completion Rate CBT</div>
        </div>
        <div className="km-card" style={{ borderTopColor: "var(--red-primary)" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 8 }}>Peserta</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "var(--red-primary)" }}>5,490</div>
          <div style={{ fontSize: 13, color: "var(--gray-dark)", marginTop: 6 }}>Total Enrollment</div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div key={c.code} className={`km-card ${c.type === "CBT" ? "gold-accent" : ""}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <span className={`badge ${c.type === "VLC" ? "badge-blue" : "badge-gold"}`}>{c.type}</span>
              <span className="badge badge-gray" style={{ fontSize: 10 }}>{c.level}</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 6 }}>
              {c.code}
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: "var(--text-body)", marginBottom: 10 }}>
              {c.title}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--gray-dark)", marginBottom: 14 }}>
              <span>⏱ {c.duration}</span>
              <span>👤 {c.enrolled.toLocaleString()} peserta</span>
            </div>
            {/* Completion Bar */}
            <div style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--gray-mid)" }}>
              <span>Completion</span>
              <span style={{ fontWeight: 700, color: c.completion >= 90 ? "var(--blue-primary)" : c.completion >= 75 ? "var(--gold)" : "var(--red-primary)" }}>{c.completion}%</span>
            </div>
            <div style={{ background: "var(--gray-light)", borderRadius: 2, height: 6 }}>
              <div style={{
                height: 6, borderRadius: 2, width: `${c.completion}%`,
                background: c.completion >= 90 ? "var(--blue-primary)" : c.completion >= 75 ? "var(--gold)" : "var(--red-primary)",
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
