import slider01 from  '../../../images/slider05.jpg'
import slider02 from  '../../../images/slider06.jpg'
import slider03 from  '../../../images/slider07.jpg'


const Slider = () => {
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={slider01} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider02} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider03} alt="Second slide"/>
    </div>
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
    )
}

export default Slider
