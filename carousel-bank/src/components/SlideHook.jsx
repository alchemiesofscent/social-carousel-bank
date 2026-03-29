import { PALETTE } from "../data/carousels";

export default function SlideHook({ slide, series }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "40px 28px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 30%, ${PALETTE.goldDim}15 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "3.5px", color: PALETTE.gold, textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>
          {series}
        </div>
        {slide.badge && (
          <div style={{ fontSize: "9px", letterSpacing: "1.8px", color: PALETTE.bg, background: PALETTE.gold, borderRadius: "999px", padding: "3px 8px", textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>
            {slide.badge}
          </div>
        )}
      </div>
      {slide.script && <div style={{ fontSize: "42px", color: PALETTE.gold, marginBottom: "6px", lineHeight: 1.2, letterSpacing: "4px" }}>{slide.script}</div>}
      {slide.topLine && <div style={{ fontSize: "14px", color: PALETTE.muted, fontFamily: "'Courier New', monospace", letterSpacing: "2px", marginBottom: "36px" }}>{slide.topLine}</div>}
      <div style={{ fontSize: "24px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.4, whiteSpace: "pre-line", marginBottom: "18px" }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "13px", color: PALETTE.muted, lineHeight: 1.6, maxWidth: "290px", whiteSpace: "pre-line" }}>{slide.subText}</div>}
    </div>
  );
}
