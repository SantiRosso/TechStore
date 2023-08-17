export const metadata = {
  title: "TechStore",
  description: "Best tech store!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
