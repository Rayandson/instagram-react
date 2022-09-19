import Post from "./Post"

export default function Posts() {
    const posts = [
        {fotoUsuario:"https://pbs.twimg.com/profile_images/1555227266006777856/k4DmXxL3_400x400.jpg", nomeUsuario:"neymarjr", imagem:"https://tntsports.com.br/__export/1649373262823/sites/esporteinterativo/img/2022/04/07/neymar_-_real_madrid_x_psg_-_champions_league.jpg_711574051.jpg", legenda:"Foco, força e fé!", commentUser:"cristiano", comment:"Sou melior", likes:205104, fotoLike:"../images/respondeai 1.png", userLike:"respondeai"},
        {fotoUsuario:"https://pbs.twimg.com/profile_images/1543088851979223040/o-4YON-s_400x400.jpg", nomeUsuario:"whinderssonnunes", imagem:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Whindersson_Nunes_em_2019.png", legenda:"Alegria!", commentUser:"popofreitas", comment:"Pronto pra outra ?", likes:304203, fotoLike:"../images/barked 1.png", userLike:"barked"},
        {fotoUsuario:"../images/meowed 1.png", nomeUsuario:"meowed", imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/Bart-the-Bear-II.jpg", legenda:"Rawww", commentUser:"animal_planet", comment:"Cool!", likes:2051, fotoLike:"../images/memeriagourmet 1.png", userLike:"memriagourmet"}
    ]

    return (
    <div class="feed">
             {posts.map((p) => <Post fotoUsuario={p.fotoUsuario} nomeUsuario={p.nomeUsuario} imagem={p.imagem} legenda={p.legenda} commentUser={p.commentUser} comment={p.comment} likes={p.likes} fotoLike={p.fotoLike} userLike={p.userLike} />)} 
          </div>
    )
}