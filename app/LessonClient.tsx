"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Lesson } from "./lessons";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load Python"));
    document.body.appendChild(s);
  });
}

export default function LessonClient({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = useState(0);
  const [codes, setCodes] = useState(lesson.steps.map((s) => s.code));
  const [output, setOutput] = useState("");
  const [preview, setPreview] = useState("");
  const [running, setRunning] = useState(false);
  const pyRef = useRef<any>(null);

  const current = lesson.steps[step];
  const code = codes[step];
  const green = "#22ff55";

  const setCode = (v: string) =>
    setCodes((c) => c.map((x, i) => (i === step ? v : x)));

  const goTo = (n: number) => {
    setStep(n);
    setOutput("");
    setPreview("");
  };

  async function run() {
    setRunning(true);
    try {
      if (lesson.type === "web") {
        setPreview(code);
        setOutput("Preview updated.");
      } else if (lesson.type === "js") {
        const logs: string[] = [];
        const fmt = (a: any[]) =>
          a.map((x) => (typeof x === "object" ? JSON.stringify(x) : String(x))).join(" ");
        const fake = {
          log: (...a: any[]) => logs.push(fmt(a)),
          error: (...a: any[]) => logs.push("Error: " + fmt(a)),
          warn: (...a: any[]) => logs.push("Warning: " + fmt(a)),
        };
        new Function("console", code)(fake);
        setOutput(logs.join("\n") || "(no output)");
      } else {
        if (!pyRef.current) {
          setOutput("Loading Python... (first time takes a few seconds)");
          await loadScript("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
          pyRef.current = await (window as any).loadPyodide();
        }
        const out: string[] = [];
        pyRef.current.setStdout({ batched: (s: string) => out.push(s) });
        pyRef.current.setStderr({ batched: (s: string) => out.push(s) });
        await pyRef.current.runPythonAsync(code);
        setOutput(out.join("\n") || "(no output)");
      }
    } catch (e: any) {
      setOutput("Error: " + e.message);
    }
    setRunning(false);
  }

  const panel: React.CSSProperties = {
    background: "#0a0a0a",
    border: `1px solid ${lesson.color}`,
    borderRadius: 14,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    minHeight: 460,
  };

  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 30px", borderBottom: `1px solid ${green}` }}>
        <h1 style={{ margin: 0, fontSize: 26, color: green }}>Learn Coding</h1>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link href="/languages" style={{ color: "#fff", textDecoration: "none" }}>Languages</Link>
        </div>
      </nav>

      <div style={{ padding: "24px 30px" }}>
        <h2 style={{ margin: "0 0 20px", fontSize: 34, color: lesson.color }}>{lesson.name}</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {/* 1. Guide */}
          <section style={panel}>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: 14 }}>
              Step {step + 1} of {lesson.steps.length}
            </p>
            <h3 style={{ fontSize: 24, margin: "8px 0 14px", color: lesson.color }}>{current.title}</h3>
            <p style={{ lineHeight: 1.7, color: "#e2e8f0", fontSize: 17 }}>{current.text}</p>

            <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
              <button
                onClick={() => goTo(step - 1)}
                disabled={step === 0}
                style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#111", color: "#fff", cursor: "pointer", opacity: step === 0 ? 0.4 : 1 }}
              >
                Previous
              </button>
              <button
                onClick={() => goTo(step + 1)}
                disabled={step === lesson.steps.length - 1}
                style={{ flex: 1, padding: 12, borderRadius: 10, border: "none", background: lesson.color, color: "#000", fontWeight: "bold", cursor: "pointer", opacity: step === lesson.steps.length - 1 ? 0.4 : 1 }}
              >
                Next
              </button>
            </div>
          </section>

          {/* 2. Editor */}
          <section style={panel}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <strong>Code Editor</strong>
              <button
                onClick={run}
                disabled={running}
                style={{ padding: "8px 22px", borderRadius: 999, border: "none", background: green, color: "#000", fontWeight: "bold", cursor: "pointer" }}
              >
                {running ? "Running..." : "Run"}
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              style={{ flex: 1, minHeight: 340, background: "#000", color: "#7dd3fc", border: "1px solid #1e293b", borderRadius: 10, padding: 14, fontFamily: "Consolas, monospace", fontSize: 16, resize: "vertical", outline: "none" }}
            />
          </section>

          {/* 3. Output */}
          <section style={panel}>
            <strong style={{ marginBottom: 12 }}>
              {lesson.type === "web" ? "Live Preview" : "Terminal"}
            </strong>
            {lesson.type === "web" ? (
              <iframe
                title="preview"
                srcDoc={preview}
                sandbox=""
                style={{ flex: 1, minHeight: 340, background: "#fff", border: "none", borderRadius: 10 }}
              />
            ) : (
              <pre style={{ flex: 1, minHeight: 340, margin: 0, background: "#000", color: green, border: "1px solid #14532d", borderRadius: 10, padding: 14, fontFamily: "Consolas, monospace", fontSize: 16, whiteSpace: "pre-wrap", overflow: "auto" }}>
                {`$ ${lesson.type === "js" ? "node lesson.js" : "python lesson.py"}\n`}
                {output}
              </pre>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}