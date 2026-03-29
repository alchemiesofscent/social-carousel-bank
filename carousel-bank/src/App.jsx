import { useEffect, useState } from "react";
import { CAROUSELS, PALETTE } from "./data/carousels";
import Carousel from "./components/Carousel";

const ALL_SERIES = "all";

function getSeriesOptions() {
  const seen = new Set();
  const options = [];

  for (const carousel of CAROUSELS) {
    if (!seen.has(carousel.series)) {
      seen.add(carousel.series);
      options.push(carousel.series);
    }
  }

  return options;
}

function getVisibleCarousels(series) {
  if (series === ALL_SERIES) return CAROUSELS;
  return CAROUSELS.filter((entry) => entry.series === series);
}

function parseHash(hash) {
  const cleanHash = hash.replace(/^#/, "").trim();
  if (!cleanHash) return { activeSeries: ALL_SERIES, expandedId: CAROUSELS[0]?.id ?? null, slideById: {} };

  if (!cleanHash.includes("=")) {
    const [rawId, rawSlide] = cleanHash.split("/");
    const carousel = CAROUSELS.find((entry) => entry.id === decodeURIComponent(rawId ?? ""));
    if (!carousel) {
      return { activeSeries: ALL_SERIES, expandedId: CAROUSELS[0]?.id ?? null, slideById: {} };
    }

    const requestedSlide = Number.parseInt(rawSlide ?? "1", 10);
    const boundedSlide = Number.isNaN(requestedSlide)
      ? 0
      : Math.min(Math.max(requestedSlide - 1, 0), carousel.slides.length - 1);

    return {
      activeSeries: ALL_SERIES,
      expandedId: carousel.id,
      slideById: { [carousel.id]: boundedSlide },
    };
  }

  const params = new URLSearchParams(cleanHash);
  const requestedSeries = params.get("series");
  const validSeries = requestedSeries === ALL_SERIES || getSeriesOptions().includes(requestedSeries ?? "")
    ? (requestedSeries ?? ALL_SERIES)
    : ALL_SERIES;
  const visibleCarousels = getVisibleCarousels(validSeries);
  const requestedId = params.get("carousel");
  const fallbackId = visibleCarousels[0]?.id ?? null;
  const expandedId = visibleCarousels.some((entry) => entry.id === requestedId) ? requestedId : fallbackId;
  const expandedCarousel = visibleCarousels.find((entry) => entry.id === expandedId);
  const requestedSlide = Number.parseInt(params.get("slide") ?? "1", 10);
  const boundedSlide = expandedCarousel
    ? (
      Number.isNaN(requestedSlide)
        ? 0
        : Math.min(Math.max(requestedSlide - 1, 0), expandedCarousel.slides.length - 1)
    )
    : 0;

  return {
    activeSeries: validSeries,
    expandedId,
    slideById: expandedId ? { [expandedId]: boundedSlide } : {},
  };
}

function buildHash(activeSeries, expandedId, slideById) {
  if (!expandedId) return "";

  const carousel = CAROUSELS.find((entry) => entry.id === expandedId);
  if (!carousel) return "";

  const params = new URLSearchParams();
  params.set("series", activeSeries);
  params.set("carousel", expandedId);
  params.set("slide", String(Math.min(slideById[expandedId] ?? 0, carousel.slides.length - 1) + 1));
  return `#${params.toString()}`;
}

export default function App() {
  const initialState = parseHash(window.location.hash);
  const [activeSeries, setActiveSeries] = useState(initialState.activeSeries);
  const [expandedId, setExpandedId] = useState(initialState.expandedId);
  const [slideById, setSlideById] = useState(initialState.slideById);
  const seriesOptions = getSeriesOptions();
  const visibleCarousels = getVisibleCarousels(activeSeries);

  useEffect(() => {
    const syncFromHash = () => {
      const nextState = parseHash(window.location.hash);
      setActiveSeries(nextState.activeSeries);
      setExpandedId(nextState.expandedId);
      setSlideById((current) => ({ ...current, ...nextState.slideById }));
    };

    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!visibleCarousels.length) {
      setExpandedId(null);
      return;
    }

    if (!visibleCarousels.some((entry) => entry.id === expandedId)) {
      const fallbackId = visibleCarousels[0].id;
      setExpandedId(fallbackId);
      setSlideById((current) => ({ ...current, [fallbackId]: current[fallbackId] ?? 0 }));
    }
  }, [activeSeries, expandedId]);

  useEffect(() => {
    const baseUrl = `${window.location.pathname}${window.location.search}`;
    const nextHash = buildHash(activeSeries, expandedId, slideById);
    if (!nextHash) {
      window.history.replaceState(null, "", baseUrl);
      return;
    }

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", `${baseUrl}${nextHash}`);
    }
  }, [activeSeries, expandedId, slideById]);

  const handleActivate = (id) => {
    setExpandedId(id);
    setSlideById((existing) => {
      const carousel = CAROUSELS.find((entry) => entry.id === id);
      return {
        ...existing,
        [id]: Math.min(existing[id] ?? 0, (carousel?.slides.length ?? 1) - 1),
      };
    });
  };

  const handleSeriesChange = (series) => {
    setActiveSeries(series);
  };

  const handleSlideChange = (id, direction) => {
    const carousel = CAROUSELS.find((entry) => entry.id === id);
    if (!carousel) return;

    handleActivate(id);
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
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ color: PALETTE.cream, fontSize: "18px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", marginBottom: "4px" }}>Instagram Content Bank</div>
        <div style={{ color: PALETTE.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
          {activeSeries === ALL_SERIES
            ? `${CAROUSELS.length} carousel mockups - filter by series, click a card to focus it, click left/right on slides to navigate`
            : `${visibleCarousels.length} carousels in ${activeSeries} - click a card to focus it, click left/right on slides to navigate`}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
          <button
            type="button"
            onClick={() => handleSeriesChange(ALL_SERIES)}
            style={{
              border: `1px solid ${activeSeries === ALL_SERIES ? PALETTE.gold : `${PALETTE.goldDim}70`}`,
              background: activeSeries === ALL_SERIES ? `${PALETTE.goldDim}30` : "transparent",
              color: activeSeries === ALL_SERIES ? PALETTE.cream : PALETTE.muted,
              borderRadius: "999px",
              padding: "8px 12px",
              fontSize: "11px",
              letterSpacing: "0.4px",
              fontFamily: "system-ui, sans-serif",
              cursor: "pointer",
            }}
          >
            {`All (${CAROUSELS.length})`}
          </button>
          {seriesOptions.map((series) => (
            <button
              key={series}
              type="button"
              onClick={() => handleSeriesChange(series)}
              style={{
                border: `1px solid ${activeSeries === series ? PALETTE.gold : `${PALETTE.goldDim}70`}`,
                background: activeSeries === series ? `${PALETTE.goldDim}30` : "transparent",
                color: activeSeries === series ? PALETTE.cream : PALETTE.muted,
                borderRadius: "999px",
                padding: "8px 12px",
                fontSize: "11px",
                letterSpacing: "0.4px",
                fontFamily: "system-ui, sans-serif",
                cursor: "pointer",
              }}
            >
              {`${series} (${CAROUSELS.filter((entry) => entry.series === series).length})`}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {visibleCarousels.map(c => (
            <Carousel
              key={c.id}
              carousel={c}
              current={slideById[c.id] ?? 0}
              isExpanded={expandedId === c.id}
              onActivate={() => handleActivate(c.id)}
              onSlideChange={(direction) => handleSlideChange(c.id, direction)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
