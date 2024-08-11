import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAppStore from "../store";

export default function Home() {
  const loggedIn = useAppStore(
    (state) => state.me !== null && state.me.id.length > 5
  );

  return (
    <>
      <Header isLoggedIn={loggedIn} />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
