import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import SideBarFooter from "./SideBarFooter";

export default function SideBar() {
    return (
      <div class="right">
          <div class="sidebar">
              <Usuario />
              <Sugestoes />
              <SideBarFooter />
          </div>
      </div>
    );
  }