import Link from "next/link";
import MatrixRain from "./MatrixRain";

export default function Home() {
  const siteName = "Learn Coding";
  const green = "#22ff55";

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
            {siteName}
          </h1>
          <div style={{ display: "flex", gap: 28, fontSize: 18 }}>
            <Link href="/" style={{ color: green, textDecoration: "none" }}>Home</Link>
            <Link href="/languages" style={{ color: "#fff", textDecoration: "none" }}>Languages</Link>
          </div>
        </nav>

        <section style={{ textAlign: "center", padding: "120px 40px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(0,0,0,0.65)",
              padding: "40px 50px",
              borderRadius: 20,
            }}
          >
            <h2 style={{ fontSize: 48, fontWeight: 800, margin: 0 }}>
              Welcome To Coding World{" "}
              <span style={{ color: green }}>Learn with Fun!</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 20, color: "#e2e8f0" }}>
              Learn Coding From Basic To Pro Level!
            </p>
            <Link
              href="/languages"
              style={{
                display: "inline-block",
                marginTop: 36,
                padding: "14px 40px",
                borderRadius: 999,
                background: green,
                color: "#000",
                fontSize: 18,
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Start
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}