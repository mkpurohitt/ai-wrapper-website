import { ImageResponse } from "next/og";

export const alt = "AI Wrapper — Be the answer. Automate the rest.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#11110f",
        color: "#f4f1ea",
        padding: 72,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 16,
            background: "#e8491d",
            marginRight: 16,
          }}
        />
        AI Wrapper
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          lineHeight: 1.02,
          letterSpacing: -4,
        }}
      >
        <div style={{ display: "flex" }}>
          Be the&nbsp;<span style={{ color: "#e8491d" }}>answer.</span>
        </div>
        <div style={{ display: "flex" }}>Automate the rest.</div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#a5a299" }}>
        AI automation · Web, app &amp; e-commerce · Viral content · SEO, AEO
        &amp; GEO
      </div>
    </div>,
    size,
  );
}
