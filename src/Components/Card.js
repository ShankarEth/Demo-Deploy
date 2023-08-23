function Card(props)
{
    return(
        <div class="card col-3 m-4">
            <img width="100px" height="300px" src={props.obj.images[0]} alt="Image" class="card-img-top" />
            <div class="card-body">
                <h2 class="card-title">{props.obj.title}</h2>
                <p class="card-text">{props.obj.description}</p>
            </div>
        </div>
    )
}
export default Card;