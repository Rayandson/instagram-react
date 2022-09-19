import React from "react"

export default function Usuario() {
  const [nome, setNome] = React.useState("Rayandson Silva")
  const [foto, setFoto] = React.useState("/images/Eu insta.jpeg")

  function alterarNome() {
    const novoNome = prompt("Qual é o se nome ?");
    setNome(novoNome);
  }

    function alterarFoto() {
    const novaFoto = prompt("Insira o link da foto");
    setFoto(novaFoto);
  }

  return (
    <div class="sidebar-user">
      <img onClick={alterarFoto} src={foto} alt="" />
      <div class="sidebar-username">
        <h1>rayandsons_</h1>
        <div class="nome-user">
        <p>{(nome === "" || nome === null) ? `username` : `${nome}`}</p>
        <ion-icon name="pencil" onClick={alterarNome}></ion-icon>
        </div>
      </div>
    </div>
  );
}
