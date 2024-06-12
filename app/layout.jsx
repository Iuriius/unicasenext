import 'modern-normalize/modern-normalize.css';
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "АО Юнікейс",
  description: "Отримайте правову допомогу",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <header><Header /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}