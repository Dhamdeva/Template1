import {
  Firstsildes,
  Images,
  Layout1,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardhead } from "../../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";

export function Fdmt(props: any) {
  return (
    <div className=" money-transfer">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/money-transfer.png")}
          imgh1={`𝗘𝗮𝘀𝗶𝗲𝘀𝘁 𝘄𝗮𝘆 𝘁𝗼 𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗰𝗮𝘀𝗵 𝘁𝗼 𝗮𝗻𝘆𝗼𝗻𝗲`}
          imgp2={`A simple and highly secure direct money transfer ability for your customers using cash with industry-leading success rates`}
          btnclassname={"button"}
          btnvalue={`Sign up`}
        />
      </div>
      <div className="text-center col-lg-10 mx-auto my-5">
        <Layout1
          layout1h5={`Money Transfer`}
          layout1h2={`𝗔𝗣𝗜𝘀 𝗳𝗼𝗿 𝗶𝗻𝘀𝘁𝗮𝗻𝘁 𝗺𝗼𝗻𝗲𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿, 𝗮𝗻𝘆𝘁𝗶𝗺𝗲 & 𝗮𝗻𝘆𝘄𝗵𝗲𝗿𝗲 `}
          line={" span mb-4"}
          layout1p1={`PayPe provides the best DMT (Domestic Money Transfer) solution with the highest success rate with PayPe money transfer solution you can turn your shop into a Mini Bank.`}
        />

        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/transaction-assurance.png")}
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
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀`} line={" span mb-4"} />

          <div className="benefits1">
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

          <div className="my-5 text-center col d-flex justify-content-center">
            <Images
              imgclassname={"img-fluid"}
              img={require("../../../asset/sample1/mini-bank.png")}
              imgh5={"𝐈𝐧𝐝𝐮𝐬𝐭𝐫𝐲-𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐫𝐚𝐭𝐞𝐬"}
              imgp1={`The documentation for our APIs is comprehensive and comprehensible! We constantly update it to explain the minutest detail. Whether you use Python, Java, PHP, or C#, we have you covered!`}
            />
          </div>

          <div className="benefits1">
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
        <Layout1 layout1h2={`𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝗿𝘁𝗲𝗱`} line={"span mb-2"} />
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

      <div></div>

      <div className="main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/partner.png")}
            imgh1={`𝗕𝗲𝗰𝗼𝗺𝗲 PayPe 𝗣𝗮𝗿𝘁𝗻𝗲𝗿 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
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
