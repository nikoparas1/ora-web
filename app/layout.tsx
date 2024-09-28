import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/navmenu.css";
import "../styles/download.css";

export const metadata: Metadata = {
  title:
    "Ora | Revolutionize Your Fitness Journey with AI-Powered Personalized Workouts & Nutrition",
  description: "An AI-powered nutrition tracking app.",
  icons: {
    icon: '/assets/images/new_logo.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "var(--font-geist-sans)",
        }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
