
export default function NavBar() {
    return (
      <div class="cabeçalho">
        <div class="logos">
          <div class="insta-pequeno">
            <ion-icon name="logo-instagram" />
          </div>
          <div class="insta-grande">
            <img src="/images/logo.png" alt="instagram logo" />
          </div>
        </div>
        <div class="pesquisar">
          <input class="search" type="text" placeholder="Pesquisar" />
        </div>
        <div class="menu">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          {/* <img id="mini-photo" src="/images/Eu insta.jpeg" alt="" /> */}
        </div>
      </div>
    );
  }