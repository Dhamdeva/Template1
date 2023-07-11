import "./Dashboard.styles.css";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
import {
  Button,
  Firstsildes,
  Images,
  Layout1,
  Point,
  Secondsildes,
} from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";

export function Dashboard() {
  return (
    <div className="bg-white">
      <Dashboardhead />
      <div className="col-lg-10 p-0 mx-auto text-center">
        <div className="mainpagehead">
          <Layout1
            layout1h1={`𝗕𝗲𝘀𝘁 𝘄𝗮𝘆 𝘁𝗼 𝘀𝗲𝗻𝗱 𝗺𝗼𝗻𝗲𝘆 𝗮𝗻𝗱 𝗱𝗼 𝗔𝗮𝗱𝗵𝗮𝗮𝗿 𝗯𝗮𝘀𝗲𝗱 𝘄𝗶𝘁𝗵𝗱𝗿𝗮𝘄𝗮𝗹`}
          />
          <Button btnclassname={"button"} btnvalue={`Try For Free`} />
          <Images
            imgclassname={"img-fluid"}
            img={require("../../asset/sample1/mainsample.png")}
          />
        </div>

        <div className="text-center">
          <Layout1
            layout1h2={`𝗕𝗲𝗰𝗼𝗺𝗲 𝗮 𝗕𝗮𝗻𝗸𝗶𝗻𝗴 & 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝘀𝗲𝗿𝘃𝗶𝗰𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲𝗿`}
            line={" span mb-4"}
            layout1p1={`PayPe gives you an opportunity to turn your own shop into a Banking & Financial institution. Customers who do not have bank accounts and still want to transfer money using cash can do so at your shop. You can pay their utility bills, provide them insurance and earn in every service you give. Easy and effective!`}
          />
        </div>
        <div className="mt-5 p-1">
          <div
            id="carouselExampleInterval"
            className="carousel slide col-lg-11 mx-auto p-0"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="col-md-10 mx-auto">
                  <Firstsildes
                    img1={require("../../asset/sample1/sample2.png")}
                    imgh1={`Easy Cash transfer`}
                    imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
                  />
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <div className="col-md-10 mx-auto">
                  <Firstsildes
                    img1={require("../../asset/sample1/sample2.png")}
                    imgh1={`Easy Cash transfer`}
                    imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
                  />
                </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-10 mx-auto">
                  <Firstsildes
                    img1={require("../../asset/sample1/sample2.png")}
                    imgh1={`Easy Cash transfer`}
                    imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon text-primary"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Layout1 layout1h2={`𝗪𝗲 𝗽𝗿𝗼𝘂𝗱𝗹𝘆 𝗺𝗮𝗸𝗲 𝗶𝗻 𝗜𝗻𝗱𝗶𝗮`} line={" span mb-4"} />
          <div className="d-flex flex-wrap justify-content-around india-img">
            <Images img={require("../../asset/sample1/india.png")} />
            <Images img={require("../../asset/sample1/india.png")} />
            <Images img={require("../../asset/sample1/india.png")} />
          </div>
        </div>
      </div>

      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀`} line={" span mb-4"} />
          <div className="d-flex flex-wrap justify-content-around text-center benefits">
            <Images
              img={require("../../asset/sample1/sample1.png")}
              imgh5={"𝐈𝐧𝐬𝐭𝐚𝐧𝐭 𝐫𝐞𝐭𝐚𝐢𝐥𝐞𝐫 𝐨𝐧𝐛𝐨𝐚𝐫𝐝𝐢𝐧𝐠"}
            />
            <Images
              img={require("../../asset/sample1/sample1.png")}
              imgh5={"𝐈𝐧𝐝𝐮𝐬𝐭𝐫𝐲-𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐫𝐚𝐭𝐞𝐬"}
            />
            <Images
              img={require("../../asset/sample1/sample1.png")}
              imgh5={"𝐒𝐞𝐚𝐦𝐥𝐞𝐬𝐬 𝐢𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐬𝐞𝐫𝐯𝐢𝐜𝐞"}
            />
          </div>

          <div className="d-flex flex-wrap benefits1 justify-content-around text-center">
            <Images
              img={require("../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐬𝐭𝐚𝐧𝐭 𝐫𝐞𝐭𝐚𝐢𝐥𝐞𝐫 𝐨𝐧𝐛𝐨𝐚𝐫𝐝𝐢𝐧𝐠"}
              imgp1={`Our API is well-documented and easy to understand. Integrating is as easy as it can get. We provide 24x7 manual integration support just in case, leaving no stone unturned to make the integration process seamless.`}
            />
            <Images
              img={require("../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐝𝐮𝐬𝐭𝐫𝐲-𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐫𝐚𝐭𝐞𝐬"}
              imgp1={`The documentation for our APIs is comprehensive and comprehensible! We constantly update it to explain the minutest detail. Whether you use Python, Java, PHP, or C#, we have you covered!`}
            />
          </div>
          <Images
            imgclassname={"trustimg"}
            img={require("../../asset/sample1/sample1.png")}
          />
          <Layout1
            layout1h2={`PayPe 𝗧𝗿𝘂𝘀𝘁`}
            line={"span mb-4"}
            layout1p1={`We use the same APIs here at PayPe! Every API call is secured with one-time-use tokens generated using asymmetric cryptography. Our open-source libraries make it extremely easy & error-proof`}
          />
        </div>
      </div>

      <div className="col-lg-10 mx-auto mb-3 p-0 text-center mt-5">
        <h5 className="mb-3">𝐈𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥 | 𝐑𝐞𝐭𝐚𝐢𝐥𝐞𝐫 | 𝐃𝐢𝐬𝐭𝐫𝐢𝐛𝐮𝐭𝐨𝐫 | 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬</h5>
        <Layout1 layout1h2={`𝗠𝗮𝗱𝗲 𝗳𝗼𝗿 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲`} line={"span"} />

        <Secondsildes
          img2={require("../../asset/sample1/sample2.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
          btnclassname={"button mt-4 text-start"}
          btnvalue={`Contact Sale`}
        />

        <Firstsildes
          img1={require("../../asset/sample1/retailer.png")}
          imgh3={`Retailer`}
          imgp1={`Our retailer partners use PayPe's proprietary platform '𝗖𝗼𝗻𝗻𝗲𝗰𝘁' and partner services to offer cash based and assisted commerce services. This provides a great earning potential and the freedom of running their own business with minimal investment.`}
          btnclassname={"button"}
          btnvalue={`Contact Sale`}
        />

        <div className="d-flex justify-content-center my-4 pt-4">
          <div className="d-flex col-md-8 justify-content-evenly flex-wrap">
            <Point point1p={"Individual"} />
            <Point point1p={"Retailers"} />
            <Point point1p={"Distributors"} />
            <Point point1p={"Business"} />
          </div>
        </div>
        <Layout1
          layout1h2={`𝗡𝗼 𝗺𝗮𝘁𝘁𝗲𝗿 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂𝗿 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗶𝘀 𝘄𝗲’𝘃𝗲 𝗴𝗼𝘁 𝘆𝗼𝘂 𝗰𝗼𝘃𝗲𝗿𝗲𝗱`}
        />

        <div className="pt-5 text-center">
          <Layout1 layout1h2={`𝗢𝘂𝗿 𝗧𝗿𝘂𝘀𝘁𝗲𝗱 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀`} line={" span mb-1"} />
          <div className="d-flex flex-wrap justify-content-around partners">
            <Images img={require("../../asset/sample1/airtel.png")} />
            <Images img={require("../../asset/sample1/airtel.png")} />
            <Images img={require("../../asset/sample1/airtel.png")} />
            <Images img={require("../../asset/sample1/airtel.png")} />
            <Images img={require("../../asset/sample1/airtel.png")} />
          </div>
        </div>
      </div>

      <Dashboardfooter />
    </div>
  );
}
