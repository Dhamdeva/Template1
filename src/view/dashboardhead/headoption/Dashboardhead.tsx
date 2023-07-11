import "./Dashboardhead.styles.css";
import { List, XCircleFill } from "react-bootstrap-icons";

export function Headeroption(props: any) {
  return (
    <li className={props.footerli}>
      <a className={props.foota} href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.Headeroption}</span>
      </a>
    </li>
  );
}

export function Dashboardhead() {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white fixed-top "
      style={{ height: "75px" }}
    >
      <nav className="navbar navbar-expand-md col-lg-10   mx-auto fixed-top  p-0">
        <div className="col d-flex align-items-center justify-content-between  px-0">
          <a className="head-logo " href="/">
            <img
              src={require("../../../asset/sample1/logos.png")}
              alt="paype logo"
              className="logo-circle"
            />
          </a>
          <a
            className="navbar-toggler border-0 mt-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fs-1 text-dark mx-4">
              <List />
            </i>
          </a>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <a className="head-logo" href="/">
                <img
                  src={require("../../../asset/sample1/logos.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </a>
              <a
                href="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1">
                  <XCircleFill />
                </i>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0 ">
              <ul className="navbar-nav">
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/"}
                  footaname={"Home"}
                />
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/lending"}
                  footaname={"Lending"}
                />

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Products
                  </a>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/moneytransfer"}
                      footaname={"Money Transfer"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/aadhaar"}
                      footaname={"Aadhaar Banking / Cash-out"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/Utility"}
                      footaname={"Utility and Bill Payment"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/sellinsurance"}
                      footaname={"Sell Insurance"}
                    />
                    <Headeroption
                      foota={"dropdown-item border-0"}
                      href={"/nepalmoney"}
                      footaname={"Indo-Nepal Money Transfer"}
                    />
                  </ul>
                </li>

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/retailer"}
                  footaname={"Retailers"}
                />

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Developers
                  </a>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/platform"}
                      footaname={"Platform Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/"}
                      footaname={"API references"}
                    />
                    <Headeroption
                      foota={"dropdown-item border-0"}
                      href={"/"}
                      footaname={"Developer Guide"}
                    />
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Company
                  </a>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/aboutus"}
                      footaname={"About Us"}
                    />
                    <Headeroption
                      foota={"dropdown-item border-0"}
                      href={"/"}
                      footaname={"Blogs"}
                    />
                  </ul>
                </li>

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/login"}
                  footaname={" Contact us"}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
