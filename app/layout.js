import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "APOD - Astronomy Picture Of The Day",
  description:
    "Explore breathtaking images of the cosmos with our Astronomy Picture of the Day app. Discover the wonders of the universe with new photos and detailed explanations daily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
