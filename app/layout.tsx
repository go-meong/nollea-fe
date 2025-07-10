import "./globals.css";

import { themeConfig } from "@/app/lib/theme.config";
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
      <body>
        <QueryClientProvider>
          <ThemeProvider config={themeConfig}>
            <div className="mx-auto min-h-screen max-w-[393px]">{children}</div>
            <ReactQueryDevtools />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
