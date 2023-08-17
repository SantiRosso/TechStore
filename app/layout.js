import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TechStore",
  description: "Best tech store!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
