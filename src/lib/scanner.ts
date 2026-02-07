import type { Commit } from "../data/commits";

export type ScanSignals = {
  bio?: string;
  channelTerms?: string[];
};

export type MatchResult = {
  commit: Commit;
  score: number;
  matchedTerms: string[];
  reason: string;
};

const normalize = (value: string) => value.toLowerCase();

const termMatches = (
  term: string,
  bioLower: string,
  channelTerms: string[]
) => {
  const termLower = normalize(term);
  if (bioLower.includes(termLower)) return true;
  return channelTerms.some((channel) => channel.includes(termLower));
};

const reasonKeyFromPrefix = (prefix: string, term: string) => {
  const firstToken = term.split(" ")[0]?.replace(/[^a-z0-9]/gi, "");
  if (!firstToken) return null;
  return `${prefix}_${firstToken.toLowerCase()}`;
};

export function scanSignals(
  signals: ScanSignals,
  commits: Commit[]
): MatchResult[] {
  const bioLower = normalize(signals.bio ?? "");
  const channelTerms = (signals.channelTerms ?? []).map(normalize);
  const matches: MatchResult[] = [];

  for (const commit of commits) {
    const triggers = commit.connectionTriggers;
    let score = 0;
    const matchedTerms: string[] = [];
    let reason = triggers.connectionReasons.general;

    const applyTerms = (
      terms: string[],
      weight: number,
      reasonPrefix?: string
    ) => {
      for (const term of terms) {
        if (!termMatches(term, bioLower, channelTerms)) continue;
        score += weight;
        matchedTerms.push(term);
        if (reasonPrefix) {
          const key = reasonKeyFromPrefix(reasonPrefix, term);
          if (key && triggers.connectionReasons[key]) {
            reason = triggers.connectionReasons[key];
          }
        }
      }
    };

    applyTerms(triggers.keywords, 1);
    applyTerms(triggers.professions, 3, "profession");
    applyTerms(triggers.tools, 2, "tool");
    applyTerms(triggers.industries, 2, "industry");
    applyTerms(triggers.locations, 1);

    if (score > 0) {
      matches.push({ commit, score, matchedTerms, reason });
    }
  }

  return matches.sort((a, b) => b.score - a.score);
}

