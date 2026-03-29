import { PALETTE } from "../data/carousels";

export default function SlideCloser({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "44px 32px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 70%, ${PALETTE.goldDim}10 0%, transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "21px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.5, marginBottom: "20px", whiteSpace: "pre-line" }}>{slide.mainText}</div>
      <div style={{ fontSize: "13px", color: PALETTE.muted, lineHeight: 1.7, maxWidth: "290px", whiteSpace: "pre-line" }}>{slide.subText}</div>
      <div style={{ marginTop: "36px", width: "40px", height: "1px", background: PALETTE.goldDim }} />
    </div>
  );
}
