export default function Sugestao(props) {
    return (
        <div class="suggested">
        <div class="suggested-user">
            <img src={props.foto} alt=""/>
            <div>
            <h1>{props.usuario}</h1>
            <p>Segue você</p>
            </div>
        </div>
        <p class="follow-user">Seguir</p>
    </div>
    )
}