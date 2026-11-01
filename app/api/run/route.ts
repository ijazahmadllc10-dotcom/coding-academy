import { NextResponse } from "next/server";

const PISTON_URL =
  process.env.PISTON_URL || "https://emkc.org/api/v2/piston/execute";

export async function POST(req: Request) {
  try {
    const { language, code } = await req.json();
    if (!language || typeof code !== "string" || code.length > 20000) {
      return NextResponse.json({ output: "Invalid request." }, { status: 400 });
    }

    const res = await fetch(PISTON_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language,
        version: "*",
        files: [{ content: code }],
      }),
    });

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({
        output: "Compiler service error: " + text.slice(0, 300),
      });
    }

    if (!res.ok) {
      return NextResponse.json({
        output: "Compiler service error: " + (data.message || res.status),
      });
    }

    const compileOut = data.compile && data.compile.code !== 0 ? data.compile.output : "";
    const runOut = data.run ? data.run.output : "";
    return NextResponse.json({ output: compileOut || runOut || "(no output)" });
  } catch (e: any) {
    return NextResponse.json({ output: "Error: " + e.message });
  }
}