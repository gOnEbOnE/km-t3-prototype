const threads = [
  { id: 1, title: "Best practice implementasi 5S di area warehouse — sharing pengalaman", author: "Budi S. — Logistik", replies: 14, views: 312, category: "Exchange", date: "2025-05-01", pinned: true },
  { id: 2, title: "Cara efektif mendokumentasikan tacit knowledge dari expert retiring", author: "Rina D. — HR", replies: 9, views: 241, category: "Externalization", date: "2025-04-28", pinned: false },
  { id: 3, title: "Review modul VLC Lean Manufacturing — ada yang sudah selesai?", author: "Arief P. — Manufaktur", replies: 6, views: 185, category: "Exchange", date: "2025-04-25", pinned: false },
  { id: 4, title: "Template MOM yang standar untuk rapat lintas divisi", author: "Sari W. — Quality", replies: 11, views: 298, category: "Combination", date: "2025-04-20", pinned: false },
  { id: 5, title: "Diskusi: kendala penggunaan MS Teams untuk morning talk virtual", author: "Doni R. — IT", replies: 18, views: 445, category: "Exchange", date: "2025-04-15", pinned: false },
];

export default function ForumPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-primary)", marginBottom: 6 }}>
            Komunitas KM
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "var(--text-body)" }}>
            FORUM DISKUSI
          </h1>
        </div>
        <button className="btn btn-primary">+ Buat Topik Baru</button>
      </div>

      <div className="flex flex-col gap-3">
        {threads.map((t) => (
          <div key={t.id} className="km-card" style={{ padding: "18px 24px", borderTopColor: t.pinned ? "var(--gold)" : "var(--blue-primary)" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                  {t.pinned && <span className="badge badge-gold" style={{ fontSize: 10 }}>📌 Pinned</span>}
                  <span className="badge badge-blue" style={{ fontSize: 10 }}>{t.category}</span>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, color: "var(--text-body)", marginBottom: 6, cursor: "pointer" }}>
                  {t.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--gray-mid)" }}>
                  oleh <strong style={{ color: "var(--gray-dark)" }}>{t.author}</strong> · {t.date}
                </div>
              </div>
              <div style={{ display: "flex", gap: 20, flexShrink: 0, alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: "var(--blue-primary)" }}>{t.replies}</div>
                  <div style={{ fontSize: 11, color: "var(--gray-mid)" }}>Balasan</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: "var(--gray-dark)" }}>{t.views}</div>
                  <div style={{ fontSize: 11, color: "var(--gray-mid)" }}>Dilihat</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
