import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Corpo() {
    return (
      <main>
        <div class="content">
          <div class="central">
            <Stories />
            <img
              class="seta" src="/images/chevron-forward-circle 1.png" alt=""/>
            <Posts />
          </div>
          <SideBar />
        </div>
      </main>
    );
  }