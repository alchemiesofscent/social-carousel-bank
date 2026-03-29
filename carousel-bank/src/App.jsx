import { useEffect, useState } from "react";
import { CAROUSELS, PALETTE } from "./data/carousels";
import Carousel from "./components/Carousel";

function parseHash(hash) {
  const cleanHash = hash.replace(/^#/, "").trim();
  if (!cleanHash) return null;

  const [rawId, rawSlide] = cleanHash.split("/");
  const carousel = CAROUSELS.find((entry) => entry.id === decodeURIComponent(rawId ?? ""));
  if (!carousel) return null;

  const requestedSlide = Number.parseInt(rawSlide ?? "1", 10);
  const boundedSlide = Number.isNaN(requestedSlide)
    ? 0
    : Math.min(Math.max(requestedSlide - 1, 0), carousel.slides.length - 1);

  return {
    expandedId: carousel.id,
    slideById: { [carousel.id]: boundedSlide },
  };
}

export default function App() {
  const defaultId = CAROUSELS[0]?.id ?? null;
  const initialState = parseHash(window.location.hash);
  const [expandedId, setExpandedId] = useState(initialState?.expandedId ?? defaultId);
  const [slideById, setSlideById] = useState(initialState?.slideById ?? {});

  useEffect(() => {
    const syncFromHash = () => {
      const nextState = parseHash(window.location.hash);
      if (nextState) {
        setExpandedId(nextState.expandedId);
        setSlideById((current) => ({ ...current, ...nextState.slideById }));
        return;
      }

      if (window.location.hash && defaultId) {
        setExpandedId(defaultId);
        setSlideById((current) => ({ ...current, [defaultId]: 0 }));
      }
    };

    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [defaultId]);

  useEffect(() => {
    const baseUrl = `${window.location.pathname}${window.location.search}`;

    if (!expandedId) {
      if (window.location.hash) {
        window.history.replaceState(null, "", baseUrl);
      }
      return;
    }

    const carousel = CAROUSELS.find((entry) => entry.id === expandedId);
    if (!carousel) return;

    const current = Math.min(slideById[expandedId] ?? 0, carousel.slides.length - 1);
    const nextHash = `#${expandedId}/${current + 1}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", `${baseUrl}${nextHash}`);
    }
  }, [expandedId, slideById]);

  const handleToggle = (id) => {
    setExpandedId((current) => {
      const nextId = current === id ? null : id;
      if (nextId) {
        const carousel = CAROUSELS.find((entry) => entry.id === nextId);
        setSlideById((existing) => ({
          ...existing,
          [nextId]: Math.min(existing[nextId] ?? 0, (carousel?.slides.length ?? 1) - 1),
        }));
      }
      return nextId;
    });
  };

  const handleSlideChange = (id, direction) => {
    const carousel = CAROUSELS.find((entry) => entry.id === id);
    if (!carousel) return;

    setSlideById((current) => {
      const existingIndex = current[id] ?? 0;
      const nextIndex =
        direction === "next"
          ? Math.min(existingIndex + 1, carousel.slides.length - 1)
          : Math.max(existingIndex - 1, 0);
      return { ...current, [id]: nextIndex };
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080706", padding: "32px 16px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ color: PALETTE.cream, fontSize: "18px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", marginBottom: "4px" }}>Instagram Content Bank</div>
        <div style={{ color: PALETTE.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>{`${CAROUSELS.length} carousel mockups - click headers to expand, click left/right on slides to navigate`}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {CAROUSELS.map(c => (
            <Carousel
              key={c.id}
              carousel={c}
              current={slideById[c.id] ?? 0}
              isExpanded={expandedId === c.id}
              onSlideChange={(direction) => handleSlideChange(c.id, direction)}
              onToggle={() => handleToggle(c.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
