import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col justify-between">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
