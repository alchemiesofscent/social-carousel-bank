import { PALETTE } from "../data/carousels";

export default function SlideBody({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "44px 32px" }}>
      <div style={{ width: "28px", height: "2px", background: PALETTE.gold, marginBottom: "28px" }} />
      <div style={{ fontSize: "19px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.55, marginBottom: slide.subText ? "20px" : 0 }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "14px", color: PALETTE.muted, lineHeight: 1.6 }}>{slide.subText}</div>}
    </div>
  );
}
