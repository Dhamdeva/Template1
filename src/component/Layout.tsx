import "../component/Layout.css";

export function Button(props: any) {
  return (
    <button data-aos="slide-up" className={props.btnclassname}>
      {props.btnvalue}
    </button>
  );
}

export function Layout1(props: any) {
  return (
    <div data-aos="zoom-in" className="layout1 col-12">
      <h1 data-aos="slide-up">{props.layout1h1}</h1>
      <h5 data-aos="slide-up">{props.layout1h5}</h5>
      <h2 data-aos="slide-up">{props.layout1h2}</h2>
      <h3 data-aos="slide-up">{props.layout1h3}</h3>
      <div className="col mainspan">
        <div data-aos="zoom-in" className={props.line}></div>
      </div>
      <p data-aos="slide-up">{props.layout1p1}</p>
    </div>
  );
}
export function Images(props: any) {
  return (
    <div className="img-div py-2">
      <img
        data-aos="fade-right"
        className={props.imgclassname}
        src={props.img}
        alt="images-fintech"
      />
      <h5 data-aos="slide-up" className="mt-3">
        {props.imgh5}
      </h5>
      <h4 data-aos="slide-up">{props.imgh4}</h4>
      <p data-aos="slide-up">{props.imgp1}</p>
    </div>
  );
}

export function Point(props: any) {
  return (
    <p data-aos="slide-up" className="point d-flex align-items-center m-0 mt-2">
      <span data-aos="slide-right">•</span>
      {props.point1p}
    </p>
  );
}

export function Firstsildes(props: any) {
  return (
    <div className="everyone  mb-sm-4 mt-sm-5">
      <div
        data-aos="zoom-in-up"
        className="col-md-6 col-12 d-flex align-items-center justify-content-center"
      >
        <img
          data-aos="slide-right"
          className="img-fluid head-img1"
          src={props.img1}
          alt="images-fintech"
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="col-md-6 col-12 mt-sm-5 mt-3 text-start"
      >
        <h1 data-aos="slide-up">{props.imgh01}</h1>
        <h4 data-aos="slide-up">{props.imgh1}</h4>
        <h3 data-aos="slide-up">{props.imgh3}</h3>
        <div data-aos="slide-up" className={props.line}></div>
        <p data-aos="slide-up" className=" pr-2 mt-sm-3">
          {props.imgp1}
        </p>
        <p data-aos="slide-up" className="pb-sm-3 pr-2">
          {props.imgp2}
        </p>
        <a data-aos="slide-up" className={props.btnclassname}>
          {props.btnvalue}
        </a>
      </div>
    </div>
  );
}
export function Secondsildes(props: any) {
  return (
    <div className="everyone">
      <div
        data-aos="zoom-in-up"
        className="col-md-6 mt-sm-5 col-12 mt-3 order-1 order-md-0 text-start "
      >
        <h4 data-aos="slide-up" className="">
          {props.imgp1}
        </h4>
        <h1 data-aos="slide-up">{props.imgh1}</h1>
        <div data-aos="slide-up" className={props.line}></div>
        <h3 data-aos="slide-up">{props.imgh2}</h3>
        <p data-aos="slide-up" className=" pr-2 mt-3">
          {props.imgp2}
        </p>
        <p data-aos="slide-up" className="pb-sm-3 pr-2">
          {props.imgp3}
        </p>
        <div className="flex-wrap d-flex">
          <a data-aos="zoom-in" className={props.btnclassname}>
            {props.btnvalue}
          </a>
          <a data-aos="zoom-in" className={props.btnclassname1}>
            {props.btnvalue1}
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="col-md-6 col-12 d-flex align-items-center justify-content-center"
      >
        <img
          className="img-fluid head-img2"
          data-aos="slide-right"
          src={props.img2}
          alt="images-fintech"
        />
      </div>
    </div>
  );
}

export function Developer(props: any) {
  return (
    <div
      className="col-lg-9 col-md-10 developer mt-lg-5 mt-3 py-4"
      data-aos="zoom-in-up"
    >
      <h3 className="">{props.devoph4}</h3>
      <div className="d-flex flex-wrap">
        <div className="col-sm-6 col-12">
          <img
            data-aos="fade-up"
            className="img-fluid"
            src={props.devopimg}
            alt="images-fintech"
          />
        </div>
        <div
          data-aos="slide-up"
          className="col-sm-6 col-12 d-flex flex-column align-items-center justify-content-center"
        >
          <a href={props.href1}>
            <li className={props.li}></li>
            {props.devopa1}
          </a>
          <a href={props.href2}>
            <li className={props.li1}></li>
            {props.devopa2}
          </a>
          <a className="button" href={props.href2}>
            {props.devopa3}
          </a>
        </div>
      </div>
    </div>
  );
}
