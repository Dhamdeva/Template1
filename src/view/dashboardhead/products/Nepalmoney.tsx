import {
  Secondsildes,
  Layout1,
  Firstsildes,
  Images,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Nepalmoney(props: any) {
  return (
    <div className=" money-transfer">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/nepal.png")}
          imgp1={`Indo-Nepal Money Transfer`}
          imgh2={`𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗺𝗼𝗻𝗲𝘆 𝗳𝗿𝗼𝗺 𝗜𝗻𝗱𝗶𝗮 𝘁𝗼 𝗡𝗲𝗽𝗮𝗹,𝘄𝗶𝘁𝗵𝗼𝘂𝘁 𝗵𝗮𝘃𝗶𝗻𝗴 𝗜𝗻𝗱𝗶𝗮𝗻 𝗕𝗮𝗻𝗸 𝗔𝗰𝗰𝗼𝘂𝗻𝘁`}
          imgp2={`Help your customers (mostly Nepali immigrants) send money from India to Nepal. Fast, secure money transfer whenever you need to.`}
          btnclassname={"button"}
          btnvalue={`Tree for free`}
        />
      </div>
      <div className="text-center col-lg-10 mx-auto my-5">
        <Layout1
          layout1h5={`Send money to your loved-ones`}
          layout1h2={`𝗘𝗮𝘀𝘆 𝗺𝗼𝗻𝗲𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗳𝗿𝗼𝗺 𝗜𝗻𝗱𝗶𝗮 𝘁𝗼 𝗡𝗲𝗽𝗮𝗹`}
          line={" span mb-4"}
          layout1p1={`PayPe provides the best DMT (Domestic Money Transfer) solution with the highest success rate with PayPe money transfer solution you can turn your shop into a Mini Bank.`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/money-transfer.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/money-transfer.png")}
          imgh1={`Easy transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
      </div>

      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀`} line={" span mb-4"} />

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
            layout1h2={`𝗛𝗼𝘄 𝗜𝗻𝗱𝗼-𝗡𝗲𝗽𝗮𝗹 𝗠𝗼𝗻𝗲𝘆 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗪𝗼𝗿𝗸𝘀`}
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

      <div className="main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/partner.png")}
            imgh4={`Ready to get started?`}
            imgh1={`Send money to Nepal & Earn More`}
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
