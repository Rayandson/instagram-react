export default function Story(props) {
    return(
    <div class="story">
        <div class="stories-pic pic1">
          <img src={props.imagem} alt="" />
      </div>
      <div class="usuario">
      {props.usuario}
      </div>
      </div>
    )
  }