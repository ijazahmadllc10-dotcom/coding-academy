import Link from "next/link";
import MatrixRain from "../MatrixRain";
import { lessons } from "../lessons";

export default function Languages() {
  const green = "#22ff55";
  const items = Object.entries(lessons);

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <MatrixRain />

      <div style={{ position: "relative", zIndex: 50 }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            background: "rgba(0,0,0,0.8)",
            borderBottom: `1px solid ${green}`,
          }}
        >
          <h1 style={{ fontSize: 28, fontWeight: "bold", color: green, margin: 0 }}>
            Learn Coding
          </h1>
          <div style={{ display: "flex", gap: 28, fontSize: 18 }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link href="/languages" style={{ color: green, textDecoration: "none" }}>Languages</Link>
          </div>
        </nav>

        <section style={{ padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 44, margin: 0 }}>
            Choose Your <span style={{ color: green }}>Language</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              maxWidth: 1200,
              margin: "50px auto 0",
            }}
          >
            {items.map(([key, lang]) => (
              <div
                key={key}
                style={{
                  background: "rgba(0,0,0,0.8)",
                  border: `2px solid ${lang.color}`,
                  borderRadius: 16,
                  padding: 26,
                }}
              >
                <h3 style={{ fontSize: 26, color: lang.color, margin: 0 }}>{lang.name}</h3>
                <p style={{ color: "#cbd5e1", marginTop: 12, minHeight: 48 }}>{lang.desc}</p>
                <Link
                  href={`/learn/${key}`}
                  style={{
                    display: "inline-block",
                    marginTop: 16,
                    padding: "10px 26px",
                    borderRadius: 999,
                    background: lang.color,
                    color: "#000",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Learn {lang.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}