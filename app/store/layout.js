import StoreNavbar from "@/components/StoreNavbar";

export const metadata = {
  title: "Store - TechStore",
};

export default function StoreLayout({ children }) {
  return (
    <>
      <StoreNavbar />
      {children}
    </>
  );
}
