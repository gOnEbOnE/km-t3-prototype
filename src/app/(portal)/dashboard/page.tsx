export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
          Overview
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
          DASHBOARD — KM PLATFORM
        </h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="stat-card">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 10, fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase" }}>
            Dokumen
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "white" }}>1,284</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Dokumen Knowledge</div>
          <div style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600, marginTop: 4 }}>↑ +42 bulan ini</div>
        </div>
        <div className="stat-card" style={{ background: "var(--blue-deeper)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 10, fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase" }}>
            Organisasi
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "white" }}>53</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Anak Perusahaan</div>
          <div style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600, marginTop: 4 }}>↑ Large Organization</div>
        </div>
        <div className="km-card" style={{ borderTopColor: "var(--gold)" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 8 }}>
            CBT
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "var(--blue-primary)" }}>94%</div>
          <div style={{ fontSize: 13, color: "var(--gray-dark)", marginTop: 6 }}>Completion Rate CBT</div>
        </div>
        <div className="km-card" style={{ borderTopColor: "var(--red-primary)" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 8 }}>
            Inovasi
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1, color: "var(--red-primary)" }}>326</div>
          <div style={{ fontSize: 13, color: "var(--gray-dark)", marginTop: 6 }}>Entri InovAstra</div>
        </div>
      </div>

      {/* Callouts */}
      <div className="mb-8">
        <div className="callout">
          <strong>Kesimpulan:</strong> Combination &amp; Exchange konsisten muncul sebagai prioritas tertinggi dari kedua pendekatan — mengonfirmasi pentingnya Knowledge Discovery &amp; Sharing untuk Astra Otoparts.
        </div>
        <div className="callout red">
          <strong>Keterbatasan:</strong> Tidak semua hasil inovasi &amp; pembelajaran terdokumentasi sistematis dalam knowledge base terpusat. Berpotensi kehilangan nilai dari pengetahuan yang telah dihasilkan.
        </div>
        <div className="callout gold">
          <strong>Catatan:</strong> Konsolidasi knowledge base lintas divisi menjadi prioritas pengembangan jangka panjang untuk Astra Otoparts.
        </div>
      </div>

      {/* KM Process Priority Table */}
      <div className="km-card" style={{ padding: 0, overflow: "hidden", borderTop: "none" }}>
        <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--gray-light)" }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 4 }}>
            06 · Data Display
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: "var(--text-body)" }}>
            KM PROCESS PRIORITAS
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="km-table">
            <thead>
              <tr>
                <th>Prio</th>
                <th>KM Process</th>
                <th>Kategori</th>
                <th>Level</th>
                <th>Contoh di Astra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "var(--red-primary)", fontWeight: 700 }}>1</td>
                <td style={{ fontWeight: 700 }}>Combination</td>
                <td>Knowledge Discovery</td>
                <td><span className="badge badge-red">Tinggi</span></td>
                <td>InovAstra, monthly review PIKA, VLC lintas divisi</td>
              </tr>
              <tr>
                <td>2</td>
                <td style={{ fontWeight: 600 }}>Exchange</td>
                <td>Knowledge Sharing</td>
                <td><span className="badge badge-red">Tinggi</span></td>
                <td>VLC, CBT, MS Teams, morning talk</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Routines</td>
                <td>Knowledge Application</td>
                <td><span className="badge badge-red">Tinggi</span></td>
                <td>SOP teknis, NEOP, monthly review</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Internalization</td>
                <td>Knowledge Capturing</td>
                <td><span className="badge badge-red">Tinggi</span></td>
                <td>Kurikulum per jabatan, VLC mandiri</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Socialization</td>
                <td>Knowledge Capturing</td>
                <td><span className="badge badge-gold">Sedang</span></td>
                <td>OJT, pendampingan, morning talk</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Externalization</td>
                <td>Knowledge Capturing</td>
                <td><span className="badge badge-gold">Sedang</span></td>
                <td>Dokumentasi MOM, video tutorial VLC</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Probing</td>
                <td>Knowledge Discovery</td>
                <td><span className="badge badge-gray">Rendah</span></td>
                <td>Riset internal, benchmarking industri</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Direction</td>
                <td>Knowledge Sharing</td>
                <td><span className="badge badge-gray">Rendah</span></td>
                <td>Rantai komando TL → Supervisor → Dept Head</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Priority List — Dark */}
      <div className="mt-8 rounded" style={{ background: "var(--blue-deeper)", padding: "28px" }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
          08 · Dark Variant
        </div>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: "white", marginBottom: 20 }}>
          KM PROCESS PRIORITAS — DARK LAYOUT
        </div>
        <div className="flex flex-col gap-3">
          {[
            { rank: "1", name: "Combination", desc: "Integrasi knowledge explicit lintas divisi via InovAstra & PIKA", level: "Tinggi", top: true },
            { rank: "2", name: "Exchange", desc: "Distribusi knowledge via VLC, CBT, MS Teams secara nasional", level: "Tinggi", top: false },
            { rank: "3", name: "Routines", desc: "Penerapan SOP & prosedur terstandarisasi di level operasional", level: "Tinggi", top: false },
            { rank: "6", name: "Externalization", desc: "Dokumentasi MOM, video tutorial, konversi tacit ke explicit", level: "Sedang", top: false },
            { rank: "8", name: "Direction", desc: "Rantai komando TL → Supervisor → Dept Head", level: "Rendah", top: false },
          ].map((item) => (
            <div key={item.rank} className="flex items-center gap-4 rounded" style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px" }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: item.top ? "var(--gold)" : "white", opacity: item.top ? 1 : 0.25, minWidth: 28 }}>
                {item.rank}
              </div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, color: "white", minWidth: 160 }}>
                {item.name}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", flex: 1 }}>
                {item.desc}
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif",
                letterSpacing: 1, textTransform: "uppercase", padding: "3px 8px", borderRadius: 2,
                background: item.level === "Tinggi" ? "var(--red-primary)" : item.level === "Sedang" ? "rgba(245,197,24,0.2)" : "rgba(255,255,255,0.1)",
                color: item.level === "Tinggi" ? "white" : item.level === "Sedang" ? "var(--gold)" : "rgba(255,255,255,0.4)",
              }}>
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
