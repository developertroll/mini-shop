import Header from "./UI/Header";
import Searchbar from "./UI/Searchbar";
import TopMenu from "./UI/TopMenu";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <div>
        <Header />
        <Searchbar />
        <TopMenu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
