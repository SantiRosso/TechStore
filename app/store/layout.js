import Navbar from "@/components/Navbar";
import StoreNavbar from "@/components/StoreNavbar";

export default function StoreLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <StoreNavbar />
        {children}
      </body>
    </html>
  );
}
