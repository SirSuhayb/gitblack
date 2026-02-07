import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fid = searchParams.get("fid");

  if (!fid) {
    return NextResponse.json({ error: "Missing fid" }, { status: 400 });
  }

  const apiKey = process.env.NEYNAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Neynar API key not configured" },
      { status: 500 }
    );
  }

  const neynarUrl = `https://api.neynar.com/v2/farcaster/user/channels?fid=${encodeURIComponent(
    fid
  )}`;

  const response = await fetch(neynarUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      api_key: apiKey
    },
    cache: "no-store"
  });

  if (!response.ok) {
    const body = await response.text();
    return NextResponse.json(
      { error: "Neynar request failed", status: response.status, body },
      { status: 502 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}

