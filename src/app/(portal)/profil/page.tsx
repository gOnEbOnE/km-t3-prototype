export default function ProfilPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
          Akun
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
          PROFIL PENGGUNA
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="km-card" style={{ textAlign: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--blue-primary)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 800, color: "white" }}>AS</span>
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 700, color: "var(--text-body)", marginBottom: 4 }}>Agus Santoso</div>
          <div style={{ fontSize: 13, color: "var(--gray-mid)", marginBottom: 12 }}>Knowledge Manager — Divisi HR</div>
          <span className="badge badge-blue">Admin KM</span>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--gray-light)", display: "flex", justifyContent: "space-around" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 24, fontWeight: 800, color: "var(--blue-primary)" }}>24</div>
              <div style={{ fontSize: 11, color: "var(--gray-mid)" }}>Kontribusi</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 24, fontWeight: 800, color: "var(--blue-primary)" }}>12</div>
              <div style={{ fontSize: 11, color: "var(--gray-mid)" }}>Kursus Selesai</div>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div className="km-card">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 16 }}>
              Informasi Akun
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["NIK", "AOP-12345"],
                ["Email", "agus.santoso@astra-otoparts.com"],
                ["Divisi", "Human Resources"],
                ["Jabatan", "Knowledge Manager"],
                ["Lokasi", "Jakarta — Kantor Pusat"],
                ["Bergabung", "Januari 2019"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontSize: 11, color: "var(--gray-mid)", marginBottom: 3, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
                  <div style={{ fontSize: 14, color: "var(--text-body)", fontWeight: 600 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="km-card" style={{ borderTopColor: "var(--gold)" }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 16 }}>
              Aktivitas Terkini
            </div>
            {[
              { action: "Mengunggah dokumen", item: "SOP-HR-008 — NEOP Orientasi", date: "2 hari lalu" },
              { action: "Menyelesaikan kursus", item: "CBT-204 ISO 9001:2015 Auditor", date: "1 minggu lalu" },
              { action: "Submit inovasi", item: "INV-2025-030 — NEOP Mobile App", date: "2 minggu lalu" },
              { action: "Membalas di forum", item: "Best practice 5S di area warehouse", date: "3 minggu lalu" },
            ].map((act, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: 12, marginBottom: 12, borderBottom: i < 3 ? "1px solid var(--gray-light)" : "none" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue-primary)", marginTop: 5, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "var(--gray-dark)" }}>{act.action}: <strong style={{ color: "var(--text-body)" }}>{act.item}</strong></div>
                  <div style={{ fontSize: 11, color: "var(--gray-mid)", marginTop: 2 }}>{act.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
