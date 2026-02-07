import localFont from "next/font/local";

export const vtcDuBois = localFont({
  variable: "--font-vtc-dubois",
  src: [
    {
      path: "../../public/fonts/VTCDuBoisTrial-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/VTCDuBoisTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/VTCDuBoisTrial-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

