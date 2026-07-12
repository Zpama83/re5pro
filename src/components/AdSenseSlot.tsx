import { useEffect } from "react";

export function AdSenseSlot() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (error) {
      console.warn("AdSense push failed", error);
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: 728, minHeight: 90 }}
        data-ad-client="ca-pub-4650201068372958"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
