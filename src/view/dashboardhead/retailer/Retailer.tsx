import {
  Firstsildes,
  Images,
  Layout1,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Retailer() {
  return (
    <div className="utility">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/money-transfer.png")}
          imgh1={`𝗕𝗲𝗰𝗼𝗺𝗲 𝗼𝘂𝗿 𝗥𝗲𝘁𝗮𝗶𝗹𝗲𝗿 𝗣𝗮𝗿𝘁𝗻𝗲𝗿 & 𝗲𝗮𝗿𝗻 𝗺𝗼𝗿𝗲`}
          imgp2={`Your one-stop shop for online bill payments! Make them easy and hassle free for your customers using cash.`}
          btnclassname={"button"}
          btnvalue={`Ty for free`}
        />
        <div className="mb-3 mt-5 py-4">
          <Layout1
            layout1h5={`Your own financial platform`}
            layout1h2={`𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗳𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝗮𝘁 𝘆𝗼𝘂𝗿 𝗱𝗼𝗼𝗿𝘀𝘁𝗲𝗽`}
            line={" span mb-4"}
            layout1p1={`PayPe gives you an opportunity to turn your own shop into a Finacial institution. Customers who do not have bank accounts and still want to transfer money using cash can do so at your shop. You can pay their utility bills, provide them insurance and earn in every service you give. Easy and effective!`}
          />
        </div>
        <Secondsildes
          img2={require("../../../asset/sample1/rocket.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/money-transfer.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/rocket.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/money-transfer.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/rocket.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
      </div>

      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1
            layout1h5={`Your own financial platform`}
            layout1h2={`𝗕𝗲𝗰𝗼𝗺𝗲 PayPe’𝘀 𝗣𝗮𝗿𝘁𝗻𝗲𝗿`}
            line={" span mb-4"}
            layout1p1={`PayPe empowers Retailers, Individuals & Businesses with over 20 ways of making extra money offering our services to their customers`}
          />
          <div className="benefits my-5 pt-4">
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐏𝐫𝐞𝐩𝐚𝐢𝐝 & 𝐏𝐨𝐬𝐭𝐩𝐚𝐢𝐝`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐄𝐥𝐞𝐜𝐭𝐫𝐢𝐜𝐢𝐭𝐲 𝐛𝐢𝐥𝐥 𝐩𝐚𝐲𝐦𝐞𝐧𝐭𝐬`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐏𝐫𝐞𝐩𝐚𝐢𝐝 & 𝐏𝐨𝐬𝐭𝐩𝐚𝐢𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐫𝐞𝐜𝐡𝐚𝐫𝐠𝐞`}
            />
          </div>
        </div>
      </div>

      <div className="getting-started py-5 text-center">
        <Layout1 layout1h2={`𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝗿𝘁𝗲𝗱`} line={" span mb-2"} />
        <div className="getting-child text-start mt-5">
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟭 :`} layout1p1={`Sign Up on Connect`} />
          <Layout1
            layout1h5={`𝗦𝘁𝗲𝗽 𝟮 :`}
            layout1p1={`Start your transaction on Connect`}
          />
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟯 :`} layout1p1={`Apply for loan`} />
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟰 :`} layout1p1={`Know your eligibility`} />
        </div>
      </div>

      <div className="main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/nepal.png")}
            imgp1={`Ready to get started?`}
            imgh1={`𝗕𝗲𝗰𝗼𝗺𝗲 𝗥𝗲𝘁𝗮𝗶𝗹𝗲𝗿 𝗣𝗮𝗿𝘁𝗻𝗲𝗿 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
            line={"span mb-3 mx-1"}
            btnclassname={"button mx-1"}
            btnvalue={`Get Started`}
            btnclassname1={"button mx-sm-4 mx-1"}
            btnvalue1={`Contact Sales`}
          />
        </div>
      </div>

      <Dashboardfooter />
    </div>
  );
}
