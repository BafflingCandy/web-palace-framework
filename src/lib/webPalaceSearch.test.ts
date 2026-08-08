import { describe, expect, it } from "vitest";
import { filterWebPalaces, groupWebPalacesAlphabetically } from "./webPalaceSearch";
import type { WebPalaceEntry } from "./webPalaceRegistry";

const webPalaces: WebPalaceEntry[] = [
  {
    id: "research-library",
    title: "Research Library",
    subject: "Research Notes",
    destination: { type: "external", href: "https://example.com/research" },
    status: "live",
    cluster: "Knowledge",
    summary: "A searchable collection of research notes and references.",
    tags: ["research", "reference"],
    createdAt: "2026-08-07",
    traceNode: 10
  },
  {
    id: "visual-math",
    title: "Visual Math",
    subject: "Mathematics",
    destination: { type: "external", href: "https://example.com/math" },
    status: "live",
    cluster: "Learning",
    summary: "A visual guide to mathematical ideas and worked examples.",
    tags: ["math", "learning"],
    createdAt: "2026-08-07",
    traceNode: 11
  }
];

describe("Web Palace search", () => {
  it("searches titles, subjects, clusters, summaries, and tags", () => {
    expect(filterWebPalaces(webPalaces, "reference").map((palace) => palace.id)).toEqual(["research-library"]);
    expect(filterWebPalaces(webPalaces, "mathematics").map((palace) => palace.id)).toEqual(["visual-math"]);
  });

  it("returns an alphabetized registry for an empty query", () => {
    expect(filterWebPalaces(webPalaces, "").map((palace) => palace.title)).toEqual([
      "Research Library",
      "Visual Math"
    ]);
  });

  it("groups filtered entries by their initial", () => {
    const groups = groupWebPalacesAlphabetically(filterWebPalaces(webPalaces, ""));

    expect(groups.map((group) => group.letter)).toEqual(["R", "V"]);
    expect(groups[0].palaces[0].id).toBe("research-library");
    expect(groups[1].palaces[0].id).toBe("visual-math");
  });
});
