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

export default function Carousel({ carousel, current, isExpanded, onSlideChange, onToggle }) {
  const [copyStatus, setCopyStatus] = useState("");
  const total = carousel.slides.length;
  const safeCurrent = Math.min(current, total - 1);
  const slide = carousel.slides[safeCurrent];

  const width = isExpanded ? 375 : 280;
  const height = isExpanded ? 468 : 350;

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
    <div style={{ background: PALETTE.dark, borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.4)", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", flexShrink: 0, width, transition: "width 0.3s ease" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "10px 14px", gap: "8px", borderBottom: `1px solid ${PALETTE.goldDim}20` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0, cursor: "pointer" }} onClick={onToggle}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `linear-gradient(135deg, ${PALETTE.gold}, ${PALETTE.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: PALETTE.bg, fontWeight: 700 }}>✦</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: PALETTE.cream, fontFamily: "system-ui, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{carousel.id}</div>
            <div style={{ fontSize: "10px", color: PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{carousel.series}</div>
          </div>
          <div style={{ fontSize: "10px", color: PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{isExpanded ? "▾" : "▸"}</div>
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
        style={{ width, height, background: PALETTE.bgSlide, position: "relative", cursor: "pointer", userSelect: "none", transition: "all 0.3s ease" }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          onSlideChange(x > rect.width / 2 ? "next" : "prev");
        }}
      >
        <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "3px", zIndex: 10 }}>
          {carousel.slides.map((_, i) => (
            <div key={i} style={{ width: i === safeCurrent ? "16px" : "5px", height: "2.5px", borderRadius: "2px", background: i === safeCurrent ? PALETTE.gold : `${PALETTE.cream}30`, transition: "all 0.3s ease" }} />
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
