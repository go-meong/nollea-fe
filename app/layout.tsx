import "./globals.css";

import { ShootingStars } from "@/app/_components/shadcn/ui/shooting-stars";
import { StarsBackground } from "@/app/_components/shadcn/ui/stars-background";
import { themeConfig } from "@/app/_lib/theme.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, ThemeScript } from "@vapor-ui/core";
import type { Metadata } from "next";
import QueryClientProvider from "./QueryClientProvider";

export const metadata: Metadata = {
  title: "밤보고멍",
  description: "제주도에서 즐기는 새로운 야간 문화",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <ThemeScript config={themeConfig} />
      </head>
      <body
        style={{
          backgroundColor: "var(--vapor-color-black)",
        }}
      >
        <QueryClientProvider>
          <ThemeProvider config={themeConfig}>
            <ShootingStars />
            <StarsBackground />
            <div
              className="mx-auto max-w-[600px] flex flex-col"
              style={{
                minHeight: "100dvh",
              }}
            >
              {children}
            </div>

            <ReactQueryDevtools />
          </ThemeProvider>
        </QueryClientProvider>
        {/* eslint-disable-next-line */}
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=7f056de832d9a5705f665a962d2a3f0f&libraries=services,clusterer`}
        ></script>
      </body>
    </html>
  );
}
