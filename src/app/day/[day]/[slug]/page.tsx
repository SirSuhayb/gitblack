import { notFound } from "next/navigation";
import Day1 from "@/components/Day1";
import { getCommitByDay, slugifyInventor } from "@/data/commits";

type Params = {
  day: string;
  slug: string;
};

export default function DayPage({ params }: { params: Params }) {
  const dayNumber = Number(params.day);
  if (!Number.isFinite(dayNumber)) {
    notFound();
  }

  const commit = getCommitByDay(dayNumber);
  if (!commit) {
    notFound();
  }

  const expectedSlug = slugifyInventor(commit.inventor.name);
  if (params.slug !== expectedSlug) {
    notFound();
  }

  return <Day1 day={commit.day} />;
}

