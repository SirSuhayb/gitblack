import { ImageResponse } from "@vercel/og";
import { commits } from "@/data/commits";

export const runtime = "edge";

const getCommit = (dayParam: string | null) => {
  const day = Number(dayParam);
  if (!Number.isFinite(day)) return commits[0];
  return commits.find((commit) => commit.day === day) ?? commits[0];
};

const getYearFromDate = (value?: string) => {
  if (!value) return null;
  const match = value.match(/\b(18|19|20)\d{2}\b/);
  return match ? match[0] : null;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const commit = getCommit(searchParams.get("day"));
  const year =
    getYearFromDate(commit.patent.granted) ||
    getYearFromDate(commit.patent.filed);

  const dayLabel = `day ${commit.day}`;
  const nameLabel = commit.inventor.name;
  const workLabel = commit.patent.title;
  const yearLabel = year ? `(${year})` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d1117",
          color: "#e6edf3",
          padding: "56px 64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          gitblack
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 24, color: "#8b949e" }}>{dayLabel}</div>
          <div style={{ fontSize: 44, fontWeight: 600 }}>
            {nameLabel} {yearLabel}
          </div>
          <div style={{ fontSize: 28, color: "#8b949e" }}>{workLabel}</div>
        </div>
        <div style={{ fontSize: 26, fontWeight: 600, color: "#e6edf3" }}>
          Black is in everything.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

