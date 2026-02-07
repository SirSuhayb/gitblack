import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Day1 from "@/components/Day1";
import { getCommitByDay, slugifyInventor } from "@/data/commits";

type Params = {
  day: string;
  slug: string;
};

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://gitblack-d59emm6mm-sirsuhaybs-projects.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dayNumber = Number(resolvedParams.day);
  const commit = Number.isFinite(dayNumber) ? getCommitByDay(dayNumber) : null;

  const title = commit
    ? `${commit.inventor.name} — Day ${commit.day}`
    : "gitBlack";
  const description = commit
    ? `${commit.inventor.name} — ${commit.patent.title}`
    : "A Farcaster mini app reframing Black History Month as a GitHub-style dependency tree.";

  const ogImage = `/api/og?day=${commit?.day ?? 1}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function DayPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const dayNumber = Number(resolvedParams.day);
  if (!Number.isFinite(dayNumber)) {
    notFound();
  }

  const commit = getCommitByDay(dayNumber);
  if (!commit) {
    notFound();
  }

  const expectedSlug = slugifyInventor(commit.inventor.name);
  if (resolvedParams.slug !== expectedSlug) {
    redirect(`/day/${commit.day}/${expectedSlug}`);
  }

  return <Day1 day={commit.day} />;
}

