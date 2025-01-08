import Image from "next/image"


const Content = () => {
  return (
    <div>
        <section className="pb-6">

<div className="container">
  <div className="row flex-center">
    <div className="col-lg-6 col-md-5 order-md-1">
        <Image src="/img/illustrations/1.png" alt="img-01" width={0} height={0} sizes="100vm" style={{width: '100%', height: 'auto'}} />
        </div>
    <div className="col-md-7 col-lg-6 mt-5 text-center text-md-start">
      <h1 className="fw-medium">Want anything to be<br />easy with <span className="fw-bold">LaslesVPN.</span></h1>
      <p className="mt-3 mb-4">Provide a network for all your needs with ease and fun using <span className="fw-medium">LaslesVPN </span>discover interesting features from us.Most people make the mistake of forcing themselves to network.Or they pretend to be outgoing to make new connections. </p><a className="btn btn-lg btn-danger hover-top btn-glow" href="#">Get Started </a>
    </div>
  </div>
</div>

</section>





<section className="pt-4 pt-md-6">

<div className="container">
  <div className="row align-items-center">
    <div className="col-md-5 col-lg-7 text-lg-center">
        {/* <img className="img-fluid mb-5 mb-md-0" src="assets/img/illustrations/2.png" alt="" /> */}
        <Image src="/img/illustrations/2.png" alt="img-02" width={0} height={0} sizes="100vm" style={{width: '100%', height: 'auto'}} />

        </div>
    <div className="col-md-7 col-lg-5 text-center text-md-start">
      <h2>We Provide Many <br />Features You Can Use</h2>
      <p> You can explore the features that we provide with fun and have their own functions each feature.</p>
      <div className="d-flex">
        <svg className="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2FAB73" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
        </svg>
        <p className="ms-2">Powerfull online protection.</p>
      </div>
      <div className="d-flex">
        <svg className="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2FAB73" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
        </svg>
        <p className="ms-2">Internet without borders.</p>
      </div>
      <div className="d-flex">
        <svg className="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2FAB73" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
        </svg>
        <p className="ms-2">Supercharged VPN.</p>
      </div>
      <div className="d-flex">
        <svg className="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2FAB73" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
        </svg>
        <p className="ms-2">Internet without borders.</p>
      </div>
    </div>
  </div>
</div>

</section>
    </div>
  )
}
export default Content