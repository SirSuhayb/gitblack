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

const formatTimestampDate = (value) => {
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  const year = value.getFullYear();
  return `${month}.${day}.${year}`;
};

const formatTimestampTime = (value) => {
  const hours = String(value.getHours()).padStart(2, "0");
  const minutes = String(value.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export default function Home() {
  const [view] = useState("list");
  const [activeIndex, setActiveIndex] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const listRef = useRef(null);

  useEffect(() => {
    const signalReady = async () => {
      try {
        const { sdk } = await import("@farcaster/miniapp-sdk");
        const inMiniApp =
          typeof sdk.isInMiniApp === "function"
            ? await sdk.isInMiniApp()
            : false;
        if (inMiniApp) {
          await sdk.actions.ready();
        }
      } catch (error) {
        // Ignore if not running inside a mini app environment.
      }
    };

    signalReady();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const orderedCommits = useMemo(() => {
    return [...commits].sort((a, b) => a.day - b.day);
  }, []);

  const activeCommit = orderedCommits[activeIndex] ?? orderedCommits[0];

  useEffect(() => {
    if (!listRef.current) return;
    const elements = listRef.current.querySelectorAll("[data-animate]");
    if (!elements.length) return;

    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const scrambleText = (element) => {
      const finalText = element.getAttribute("data-text") || "";
      const duration = 450;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const revealCount = Math.floor(finalText.length * progress);
        const nextText =
          finalText
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < revealCount) return char;
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            })
            .join("");

        element.textContent = nextText;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = finalText;
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const textTarget = entry.target.querySelector("[data-text]");
            if (textTarget) {
              scrambleText(textTarget);
            }
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
      <header className="fixed top-0 left-0 right-0 z-10 border-b border-[#d0d7de] bg-white px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between text-sm">
          <div>
            <div className={`text-2xl ${vtcDuBois.className}`}>gitBlack</div>
            <div className="text-[#64748b]">tracing America&#39;s foundation</div>
          </div>
          <div className={`text-[#64748b] text-right ${vtcDuBois.className} font-bold`}>
            <div>{formatTimestampDate(now)}</div>
            <div>
              <span>{formatTimestampTime(now).split(":")[0]}</span>
              <span className="font-mono">:</span>
              <span>{formatTimestampTime(now).split(":")[1]}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-8 pt-28 space-y-8">
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

        <section
          ref={listRef}
          className="divide-y divide-[#d0d7de] border-b border-[#d0d7de]"
        >
          {orderedCommits.map((commit, index) => {
            const isApproved = commit.day === 1;
            const href = isApproved
              ? `/day/${commit.day}/${slugifyInventor(commit.inventor.name)}`
              : "#";
            const baseContribution =
              commit.patent.title?.split(" — ")[0] ?? "Contribution";
            const maskedContribution = baseContribution.replace(/[^ ]/g, "?");
            const contribution = isApproved ? baseContribution : maskedContribution;

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
                  <div
                    className="text-[#0f172a] font-mono"
                    data-text={contribution}
                  >
                    {contribution}
                  </div>
                </div>
                <span className="text-xs text-[#0f172a]" aria-hidden>
                  →
                </span>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}


