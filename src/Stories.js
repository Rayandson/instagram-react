import Story from "./Story"

export default function Stories() {
  const stories = [
    {imagem: "../images/9gag 1.png", usuario: "9gag" }, {imagem: "../images/meowed 1.png", usuario:"meowed" }, {imagem:"../images/barked 1.png", usuario:"barked"},
    {imagem:"../images/nathanwpylestrangeplanet 1.png", usuario:"nathanwpylestrangeplanet"}, {imagem:"../images/wawawiwacomicsa 1.png", usuario:"wawawiwacomicsa"},
    {imagem:"../images/respondeai 1.png", usuario:"respondeai"}, {imagem:"../images/filomoderna 1.png", usuario:"filomoderna 1"}, {imagem:"../images/memeriagourmet 1.png", usuario:"memeriagourmet"}
  ]

    return (
      <div class="stories">
        {stories.map((obj) => <Story imagem={obj.imagem} usuario={obj.usuario} />)}
      </div>
    );
  }