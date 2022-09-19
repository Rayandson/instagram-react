import React, {useState} from "react"

export default function Post(props) {

  let[contador, setContador] = useState(props.likes)
  let[vermelho, setVermelho] = useState("")
  let[outline, setOutline] = useState("-outline")

  function like() {
    if(outline === "-outline") {
      setOutline("")
      setVermelho("")
      setContador(contador + 1)
    } else {
      setOutline("-outline")
      setVermelho("")
      setContador(contador - 1)
    }
  }
  function likeImagem() {
    if(outline === "-outline") {
      setOutline("")
      setVermelho("")
      setContador(contador + 1)
  }
}
    return (
      <div className="post">
        <div className="post-title">
          <div>
            <img src={props.fotoUsuario} alt="imagem do post"/>
            <h1>{props.nomeUsuario}</h1>
          </div>
          <div>
            <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
          </div>
        </div>
        <img
          className="post-image" onClick={likeImagem}
          src={props.imagem} alt="imagem do post"/>
        <div className="post-icons">
          <div>
            <div className="coracoes">
              <ion-icon class={`${vermelho}`} onClick={like} name={`heart${outline}`}></ion-icon>
            </div>
            {/* Linkando ícone à caixa de texto */}
            <label for="comment-box1">
              <ion-icon className="mouse-color" name="chatbubble-outline"></ion-icon>
            </label>
            <ion-icon className="mouse-color" name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon className="mouse-color" name="bookmark-outline"></ion-icon>
        </div>
        <div className="post-likes">
          <img src={props.fotoLike} alt="" />
          <p>
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong>outras {contador} pessoas</strong>
          </p>
        </div>
        <p className="legenda"><strong>{props.nomeUsuario}</strong> {props.legenda}</p>
        <p className="cinza">Ver todos os 1.785 comentários</p>
        <div className="comments">
          <p className="comentario">
            <strong>{props.commentUser}</strong> {props.comment}</p>
          <ion-icon className="like-comment" name="heart-outline" ></ion-icon>
        </div>
        <p className="hora">Há 6 HORAS</p>
        <div className="comentar">
          <img className="emoticon" src="/images/emoticon.png" alt="" />
          <input
            id="comment-box1"
            type="text"
            placeholder="Adicione um comentário..."
          />
          <p className="publicar">Publicar</p>
        </div>
      </div>
    );
  }