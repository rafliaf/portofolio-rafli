import { Outfit, Ovo, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"] // You can specify weights you need
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata = {
  title: "Portofolio - Rafli AF",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${playfairDisplay.className} antialiase leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
