import { notFound, redirect } from "next/navigation";
import Day1 from "@/components/Day1";
import { getCommitByDay, slugifyInventor } from "@/data/commits";

type Params = {
  day: string;
  slug: string;
};

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

