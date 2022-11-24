import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
