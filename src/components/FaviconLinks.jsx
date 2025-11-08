import { useEffect } from "react";

export default function FaviconLinks() {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon'], link[rel='manifest']");
    existingLinks.forEach(link => link.remove());

    // Apple Touch Icon
    const appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.sizes = "180x180";
    appleTouchIcon.href = "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/apple-touch-icon.png?updatedAt=1762608068466";
    document.head.appendChild(appleTouchIcon);

    // Favicon 32x32
    const favicon32 = document.createElement("link");
    favicon32.rel = "icon";
    favicon32.type = "image/png";
    favicon32.sizes = "32x32";
    favicon32.href = "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/favicon-32x32.png?updatedAt=1762608068634";
    document.head.appendChild(favicon32);

    // Favicon 16x16
    const favicon16 = document.createElement("link");
    favicon16.rel = "icon";
    favicon16.type = "image/png";
    favicon16.sizes = "16x16";
    favicon16.href = "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/favicon-16x16.png?updatedAt=1762608068622";
    document.head.appendChild(favicon16);

    // Android Chrome 192x192
    const androidChrome192 = document.createElement("link");
    androidChrome192.rel = "icon";
    androidChrome192.type = "image/png";
    androidChrome192.sizes = "192x192";
    androidChrome192.href = "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-192x192.png?updatedAt=1762608068640";
    document.head.appendChild(androidChrome192);

    // Android Chrome 512x512
    const androidChrome512 = document.createElement("link");
    androidChrome512.rel = "icon";
    androidChrome512.type = "image/png";
    androidChrome512.sizes = "512x512";
    androidChrome512.href = "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-512x512.png?updatedAt=1762608068655";
    document.head.appendChild(androidChrome512);

    // Theme color for mobile browsers
    const themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    themeColor.content = "#2563eb"; // Blue color matching your brand
    document.head.appendChild(themeColor);

    return () => {
      // Cleanup on unmount
      appleTouchIcon.remove();
      favicon32.remove();
      favicon16.remove();
      androidChrome192.remove();
      androidChrome512.remove();
      themeColor.remove();
    };
  }, []);

  return null;
}