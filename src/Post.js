export default function Post(props) {
    return (
      <div class="post">
        <div class="post-title">
          <div>
            <img src={props.fotoUsuario} alt="imagem do post"/>
            <h1>{props.nomeUsuario}</h1>
          </div>
          <div>
            <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
          </div>
        </div>
        <img
          class="post-image"
          src={props.imagem} alt="imagem do post"/>
        <div class="post-icons">
          <div>
            <div class="coracoes">
              <ion-icon
                class="like mouse-color"
                onclick="ativarLike(this)"
                name="heart-outline"
              ></ion-icon>
            </div>
            {/* Linkando ícone à caixa de texto */}
            <label for="comment-box1">
              <ion-icon class="mouse-color" name="chatbubble-outline"></ion-icon>
            </label>
            <ion-icon class="mouse-color" name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon class="mouse-color" name="bookmark-outline"></ion-icon>
        </div>
        <div class="post-likes">
          <img src={props.fotoLike} alt="" />
          <p>
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong>outras 205.104 pessoas</strong>
          </p>
        </div>
        <p class="legenda"><strong>{props.nomeUsuario}</strong> {props.legenda}</p>
        <p class="cinza">Ver todos os 1.785 comentários</p>
        <div class="comments">
          <p class="comentario">
            <strong>{props.commentUser}</strong> {props.comment}</p>
          <ion-icon class="like-comment" name="heart-outline"></ion-icon>
        </div>
        <p class="hora">Há 6 HORAS</p>
        <div class="comentar">
          <img class="emoticon" src="/images/emoticon.png" alt="" />
          <input
            id="comment-box1"
            type="text"
            placeholder="Adicione um comentário..."
          />
          <p class="publicar">Publicar</p>
        </div>
      </div>
    );
  }