"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { commits, slugifyInventor } from "@/data/commits";
import { vtcDuBois } from "@/lib/fonts";

const formatDate = (value) => {
  const date = value ?? new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formatter.format(date).toLowerCase();
};

export default function Home() {
  const [view, setView] = useState("list");
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const orderedCommits = useMemo(() => {
    return [...commits].sort((a, b) => a.day - b.day);
  }, []);

  const activeCommit = orderedCommits[activeIndex] ?? orderedCommits[0];

  useEffect(() => {
    if (!listRef.current) return;
    const elements = listRef.current.querySelectorAll("[data-animate]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <header className="border-b border-[#d0d7de] px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between text-sm">
          <div>
            <div className="font-semibold">gitBlack</div>
            <div className="text-[#64748b]">tracing America&#39;s foundation</div>
          </div>
          <div className="text-[#0f172a]">{formatDate()}</div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4">
          <div
            className={`text-3xl leading-tight text-[#0f172a] ${vtcDuBois.className}`}
          >
            <div className="font-bold">Black is in everything.</div>
            <div className="font-normal">The light in your room.</div>
            <div className="font-normal">The call in your pocket.</div>
            <div className="font-normal">The beat of the machine.</div>
          </div>
        </section>

        <section className="border-t border-[#d0d7de] pt-6 space-y-4">
          <p className="text-xs uppercase tracking-wide text-[#0f172a]">
            Selected Repositories
          </p>
          <p className="text-base text-[#0f172a]">
            You just haven&#39;t seen the commit history. Learn the history
            often commented out of America&#39;s code. 28 repos. One released per
            day.
          </p>
        </section>

        <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-wide border-b border-[#d0d7de] pb-2">
          <button
            type="button"
            onClick={() => setView("list")}
            className={`${
              view === "list" ? "underline" : ""
            } text-[#0f172a]`}
          >
            List
          </button>
          <span className="text-[#0f172a]">or</span>
          <button
            type="button"
            onClick={() => setView("photo")}
            className={`${
              view === "photo" ? "underline" : ""
            } text-[#0f172a]`}
          >
            Photo
          </button>
        </div>

        {view === "list" && (
          <section
            ref={listRef}
            className="divide-y divide-[#d0d7de] border-b border-[#d0d7de]"
          >
            {orderedCommits.map((commit, index) => {
              const isApproved = commit.day === 1;
              const href = isApproved
                ? `/day/${commit.day}/${slugifyInventor(commit.inventor.name)}`
                : "#";

              return (
                <Link
                  key={commit.day}
                  href={href}
                  onClick={() => setActiveIndex(index)}
                  data-animate
                  className={`w-full flex items-center justify-between py-3 text-left animate-in ${
                    isApproved ? "" : "cursor-not-allowed"
                  }`}
                >
                  <div className="text-sm">
                    <div className={`text-[#0f172a] ${vtcDuBois.className}`}>
                      {isApproved ? commit.inventor.name : "???"}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#0f172a]">
                    <span>{commit.inventor.profession || "null value"}</span>
                    <span aria-hidden>→</span>
                  </div>
                </Link>
              );
            })}
          </section>
        )}

        {view === "photo" && activeCommit && (
          <section className="space-y-2">
            <div className="border border-[#d0d7de] bg-[#f8fafc]">
              {activeCommit.inventor.photoUrl ? (
                <img
                  src={activeCommit.inventor.photoUrl}
                  alt={activeCommit.inventor.name}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ) : (
                <div className="h-64 flex items-center justify-center text-[#64748b]">
                  No photo
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-xs text-[#0f172a] border-b border-[#d0d7de] pb-2">
              {activeCommit.day === 1 ? (
                <Link
                  href={`/day/${activeCommit.day}/${slugifyInventor(
                    activeCommit.inventor.name
                  )}`}
                  className={vtcDuBois.className}
                >
                  {activeCommit.inventor.name}
                </Link>
              ) : (
                <span className={vtcDuBois.className}>???</span>
              )}
              <span>{activeCommit.inventor.profession || "null value"}</span>
              <span aria-hidden>→</span>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

