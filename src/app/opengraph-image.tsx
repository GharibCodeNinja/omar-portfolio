import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | Software Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #08080d 40%, #1c1650 100%)",
          color: "#f4f4f8",
        }}
      >
        <div style={{ fontSize: 28, color: "#9b8cff", display: "flex" }}>{"<omar/>"}</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 20, lineHeight: 1.05, display: "flex" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "#b8b8cc", marginTop: 24, display: "flex" }}>
          Software developer · AI · Mobile · Full-stack · Games
        </div>
      </div>
    ),
    size,
  );
}
