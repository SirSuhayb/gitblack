export async function fetchFollowedChannels(fid: number | string) {
  const response = await fetch(
    `/api/farcaster/channels?fid=${encodeURIComponent(fid)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch followed channels");
  }

  return response.json();
}

