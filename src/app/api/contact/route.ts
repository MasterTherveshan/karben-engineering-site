import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectLocation?: string;
  timeline?: string;
  description?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.email || !payload.description) {
    return NextResponse.json(
      { ok: false, message: "Name, email and project description are required." },
      { status: 400 },
    );
  }

  const logDirectory = path.join(process.cwd(), "data");
  const logFile = path.join(logDirectory, "contact-submissions.ndjson");

  await mkdir(logDirectory, { recursive: true });
  await appendFile(
    logFile,
    `${JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    })}\n`,
    "utf8",
  );

  return NextResponse.json(
    {
      ok: true,
      message: "Project brief captured.",
    },
    { status: 200 },
  );
}
