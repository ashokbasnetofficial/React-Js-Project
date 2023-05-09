


const Card =(props)=>{
    return(
        <li>
        <div className="movie-card">

          <a href="">
            <figure className="card-banner">
              <img src='https://juksun.com/wp-content/uploads/2023/02/Chhakka-Panja-4-Movie-Poster.jpg?x94973'alt="movie poster"/>
            </figure>
          </a>

          <div className="title-wrapper">
            <a href="">
              <h3 className="card-title">{props.title}</h3>
            </a>

            <time datetime="2022">{props.year}</time>
          </div>

          <div className="card-meta">
            <div className="badge badge-outline">2K</div>

            <div className="duration">
              <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT122M">{props.runtime}</time>
            </div>

            <div className="rating">
              <ion-icon name="star"></ion-icon>

              <data>{props.rating}</data>
            </div>
          </div>

        </div>
      </li>
     
    )
}
export default Card;