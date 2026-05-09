"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Training", href: "/training" },
  { label: "InovAstra", href: "/inovastra" },
];

const sidebarItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "VLC / Training", href: "/training" },
  { label: "SOP & MOM", href: "/sop-mom" },
  { label: "InovAstra", href: "/inovastra" },
  { label: "Forum Diskusi", href: "/forum" },
  { label: "Profil", href: "/profil" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header style={{ background: "var(--blue-primary)" }} className="px-6 py-3 flex items-center justify-between shrink-0">
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 800, color: "white", letterSpacing: 0.5 }}>
          ASTRA <span style={{ color: "var(--gold)" }}>KM</span> PORTAL
        </div>
        <nav className="flex gap-6 hidden md:flex">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: active ? "white" : "rgba(255,255,255,0.65)",
                  letterSpacing: 0.5,
                  textDecoration: "none",
                  borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
          TK3 · Astra Otoparts
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside style={{ width: 200, background: "var(--blue-deeper)", minHeight: "100%", paddingTop: 20, paddingBottom: 20, flexShrink: 0 }} className="hidden md:block">
          {sidebarItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "white" : "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  background: active ? "var(--blue-primary)" : "transparent",
                  borderLeft: active ? "3px solid var(--gold)" : "3px solid transparent",
                  letterSpacing: 0.3,
                }}
              >
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: active ? "var(--gold)" : "currentColor",
                  opacity: active ? 1 : 0.5,
                  display: "inline-block",
                  flexShrink: 0,
                }} />
                {item.label}
              </Link>
            );
          })}
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto" style={{ background: "var(--off-white)" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
