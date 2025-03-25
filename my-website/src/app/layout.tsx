import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <main className="flex-1 p-5 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
