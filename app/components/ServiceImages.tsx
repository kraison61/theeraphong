interface ServiceImagesProps{
    ImageDetails:{
        name:string;
        country:string;
        comment:string;
        id:string;
        image:string;
    }[]
}

import Image from "next/image";

const ServiceImages: React.FC<ServiceImagesProps> = ({ImageDetails }) => {
  return (



    <section className="py-7">
    <div className="container">
      <div className="row flex-center">
        <div className="col-md-8 col-lg-5 text-center">
          <h2>Trusted by Thousands of<br />Happy Customer</h2>
          <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
      </div>
      <div className="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row h-100">



{ImageDetails.map((item)=>(
    <div className="col-md-4 mb-3 mb-md-0" key={item.id} >
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center"><Image src={`/img/gallery/${item.image}`} width={50} height={50} alt={item.alt} />
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fs--1 text-1000 fw-medium">{item.name}</h6>
              <p className="fs--2 fw-normal mb-0">{item.country}</p>
            </div>
          </div>
          <div className="d-flex align-items-center"><span className="text-900 me-3">4.5</span>
            <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
            </svg>
          </div>
        </div>
        <p className="card-text pt-3">{item.comment}</p>
      </div>
    </div>
  </div>
))}


    


              



            </div>
          </div>
        </div>








        
        <div className="row px-3 px-md-0 mt-4">
          <div className="col-6 position-relative">
            <ol className="carousel-indicators">
              <li className="active" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"></li>
              <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
            </ol>
          </div>
          <div className="col-6 position-relative"><a className="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a></div>
        </div>
      </div>
    </div>

  </section>
  )
}
export default ServiceImages