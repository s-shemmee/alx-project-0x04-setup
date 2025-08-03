import { LayoutProps } from "@/interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
