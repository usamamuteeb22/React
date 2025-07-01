import picture from './assets/instaprofile.jpg';
function Card(){

    return(
        <div className="card">
            <img className='card-image' src={picture} alt="image" />
            <h2 className="card-title" >Card Title</h2>
            <p className="card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, explicabo.</p>
        </div>
    )
}
export default Card