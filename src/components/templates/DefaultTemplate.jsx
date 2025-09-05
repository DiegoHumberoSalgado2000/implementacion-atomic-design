import Footer from "../organisms/Footer";
import Navbar from "../organisms/Nabvar";

export default function DefaultTemplate({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
