import {
  Firstsildes,
  Images,
  Layout1,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardhead } from "../../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";

export function Fpan() {
  return (
    <div className="aadhaar">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/retailer.png")}
          imgh1={`𝗖𝘂𝘀𝘁𝗼𝗺𝗲𝗿 𝗼𝗻𝗯𝗼𝗮𝗿𝗱𝗶𝗻𝗴 & 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗺𝗮𝗱𝗲 𝗲𝗮𝘀𝘆          `}
          imgp2={`A simple and highly secure cash withdrawing ability for your customers using Aadhaar Banking (AePS) and ensuring that you earn more with every transaction.`}
          btnclassname={"button"}
          btnvalue={`Try for free`}
        />
      </div>

      <div className="col-lg-10 mx-auto text-center my-5">
        <Layout1
          layout1h5={`PAN`}
          layout1h2={`𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗩𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻`}
          line={"span mb-4"}
          layout1p1={`Aadhar banking (AePS - Aadhaar Enabled Payment System) helps you turn your own shop into an ATM. It provides you the ability to deliver services such as cash deposit, cash withdrawals, and balance check to your customers.`}
        />

        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/mainsample.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/mainsample.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
      </div>
      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-11 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀`} line={" span mb-4"} />
          <div className="benefits">
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐏𝐫𝐞𝐩𝐚𝐢𝐝 & 𝐏𝐨𝐬𝐭𝐩𝐚𝐢𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐫𝐞𝐜𝐡𝐚𝐫𝐠𝐞`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐄𝐥𝐞𝐜𝐭𝐫𝐢𝐜𝐢𝐭𝐲 𝐛𝐢𝐥𝐥 𝐩𝐚𝐲𝐦𝐞𝐧𝐭𝐬`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐏𝐫𝐞𝐩𝐚𝐢𝐝 & 𝐏𝐨𝐬𝐭𝐩𝐚𝐢𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐫𝐞𝐜𝐡𝐚𝐫𝐠𝐞`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐄𝐥𝐞𝐜𝐭𝐫𝐢𝐜𝐢𝐭𝐲 𝐛𝐢𝐥𝐥 𝐩𝐚𝐲𝐦𝐞𝐧𝐭𝐬`}
            />
          </div>
          <div className="d-flex flex-wrap benefits1 justify-content-around text-center">
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐬𝐭𝐚𝐧𝐭 𝐫𝐞𝐭𝐚𝐢𝐥𝐞𝐫 𝐨𝐧𝐛𝐨𝐚𝐫𝐝𝐢𝐧𝐠"}
              imgp1={`Our API is well-documented and easy to understand. Integrating is as easy as it can get. We provide 24x7 manual integration support just in case, leaving no stone unturned to make the integration process seamless.`}
            />
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐝𝐮𝐬𝐭𝐫𝐲-𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐫𝐚𝐭𝐞𝐬"}
              imgp1={`The documentation for our APIs is comprehensive and comprehensible! We constantly update it to explain the minutest detail. Whether you use Python, Java, PHP, or C#, we have you covered!`}
            />
          </div>

          <Images
            imgclassname={"trustimg mt-5"}
            img={require("../../../asset/sample1/shield.png")}
          />
          <Layout1
            layout1h2={`PayPe 𝗧𝗿𝘂𝘀𝘁`}
            line={"span mb-4"}
            layout1p1={`You can assure your customers that their money and data is safe. PayPe’s trust is unparalleled`}
          />
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

      <div className="col-lg-10 mx-auto mt-5 mb-4 text-center">
        <Layout1 layout1h2={`𝗢𝘂𝗿 𝗧𝗿𝘂𝘀𝘁𝗲𝗱 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀`} line={" span mb-4"} />
        <div className="d-flex flex-wrap justify-content-around partners">
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
        </div>
      </div>

      <div className=" main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/partner.png")}
            imgh1={`𝗕𝗲𝗰𝗼𝗺𝗲 PayPe 𝗣𝗮𝗿𝘁𝗻𝗲𝗿 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
            line={"span mb-3 mx-1"}
            imgp2={`A simple and highly secure cash withdrawing ability for your customers using Aadhaar Banking (AePS) and ensuring that you earn more with every transaction.`}
            btnclassname={"button"}
            btnvalue={`Try for free`}
            btnclassname1={"button mx-1 mx-sm-4"}
            btnvalue1={`Try for free`}
          />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}
