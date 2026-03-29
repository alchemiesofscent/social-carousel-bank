import { useState } from "react";
import { PALETTE } from "../data/carousels";
import SlideHook from "./SlideHook";
import SlideBody from "./SlideBody";
import SlideCloser from "./SlideCloser";

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export default function Carousel({ carousel, current, isExpanded, onActivate, onSlideChange }) {
  const [copyStatus, setCopyStatus] = useState("");
  const total = carousel.slides.length;
  const safeCurrent = Math.min(current, total - 1);
  const slide = carousel.slides[safeCurrent];

  const handleCopy = async (text, successLabel) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }
      setCopyStatus(successLabel);
      window.setTimeout(() => setCopyStatus(""), 1600);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus(""), 1600);
    }
  };

  return (
    <div
      style={{
        background: PALETTE.dark,
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: isExpanded ? "0 14px 42px rgba(0,0,0,0.44)" : "0 8px 28px rgba(0,0,0,0.32)",
        border: `1px solid ${isExpanded ? `${PALETTE.goldDim}55` : `${PALETTE.goldDim}22`}`,
        fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif",
        flexShrink: 0,
        width: "min(375px, calc(100vw - 32px))",
        opacity: isExpanded ? 1 : 0.94,
        transition: "box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "10px 14px", gap: "8px", borderBottom: `1px solid ${PALETTE.goldDim}20` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0, cursor: "pointer" }} onClick={onActivate}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `linear-gradient(135deg, ${PALETTE.gold}, ${PALETTE.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: PALETTE.bg, fontWeight: 700 }}>✦</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: PALETTE.cream, fontFamily: "system-ui, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{carousel.id}</div>
            <div style={{ fontSize: "10px", color: PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{carousel.series}</div>
          </div>
          <div style={{ fontSize: "10px", color: isExpanded ? PALETTE.gold : PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{isExpanded ? "active" : "focus"}</div>
        </div>
        {isExpanded && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
            <button
              type="button"
              style={{ border: `1px solid ${PALETTE.goldDim}60`, background: "transparent", color: PALETTE.cream, borderRadius: "999px", padding: "4px 8px", fontSize: "10px", fontFamily: "system-ui, sans-serif", cursor: "pointer" }}
              onClick={(event) => {
                event.stopPropagation();
                handleCopy(window.location.href, "Link copied");
              }}
            >
              Copy link
            </button>
            <button
              type="button"
              style={{ border: `1px solid ${PALETTE.goldDim}60`, background: "transparent", color: PALETTE.cream, borderRadius: "999px", padding: "4px 8px", fontSize: "10px", fontFamily: "system-ui, sans-serif", cursor: "pointer" }}
              onClick={(event) => {
                event.stopPropagation();
                handleCopy(`${carousel.id} — slide ${safeCurrent + 1}/${total}\nURL: ${window.location.href}\nNotes: `, "Note copied");
              }}
            >
              Copy note
            </button>
          </div>
        )}
      </div>
      <div
        style={{ width: "100%", aspectRatio: "375 / 468", background: PALETTE.bgSlide, position: "relative", cursor: "pointer", userSelect: "none" }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (!isExpanded && onActivate) {
            onActivate();
          }
          onSlideChange(x > rect.width / 2 ? "next" : "prev");
        }}
      >
        <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "3px", zIndex: 10 }}>
          {carousel.slides.map((_, i) => (
            <div key={i} style={{ width: i === safeCurrent ? "16px" : "5px", height: "2.5px", borderRadius: "2px", background: i === safeCurrent ? PALETTE.gold : `${PALETTE.cream}${isExpanded ? "30" : "20"}`, transition: "all 0.3s ease" }} />
          ))}
        </div>
        {slide.type === "hook" && <SlideHook slide={slide} series={carousel.series} />}
        {slide.type === "body" && <SlideBody slide={slide} />}
        {slide.type === "closer" && <SlideCloser slide={slide} />}
        {copyStatus && <div style={{ position: "absolute", bottom: "12px", left: "14px", fontSize: "10px", color: PALETTE.gold, fontFamily: "system-ui, sans-serif" }}>{copyStatus}</div>}
        {safeCurrent < total - 1 && <div style={{ position: "absolute", bottom: "12px", right: "14px", fontSize: "10px", color: `${PALETTE.muted}80`, fontFamily: "system-ui, sans-serif" }}>{safeCurrent + 1}/{total} →</div>}
      </div>
    </div>
  );
}
