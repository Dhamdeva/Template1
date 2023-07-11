import {
  Secondsildes,
  Layout1,
  Firstsildes,
  Images,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Utility() {
  return (
    <div className="utility">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/partner.png")}
          imgh1={`𝗛𝗲𝗹𝗽 𝘆𝗼𝘂𝗿 𝗰𝘂𝘀𝘁𝗼𝗺𝗲𝗿𝘀 𝗽𝗮𝘆 𝘁𝗵𝗲𝗶𝗿 𝘂𝘁𝗶𝗹𝗶𝘁𝘆 𝗯𝗶𝗹𝗹𝘀`}
          imgp2={`Your one-stop shop for online bill payments! Make them easy and hassle free for your customers using cash.`}
          btnclassname={"button"}
          btnvalue={`Ty for free`}
        />
      </div>

      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1
            layout1h5={`Money Transfer`}
            layout1h2={`𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗺𝗼𝗻𝗲𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿, 𝗮𝗻𝘆𝘁𝗶𝗺𝗲 & 𝗮𝗻𝘆𝘄𝗵𝗲𝗿𝗲`}
            line={" span mb-4"}
            layout1p1={`PayPe provides the best DMT (Domestic Money Transfer) solution with the highest success rate with PayPe money transfer solution you can turn your shop into a Mini Bank.`}
          />
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
          <div className="benefits1">
            <Images
              img={require("../../../asset/sample1/money-transfer.png")}
              imgh5={"Earn Commission"}
              imgp1={`Earn commission for every Bill payment. Prepaid & Postpaid recharges, electricity bills, water and gas bills and even for the booking of LPG cylinders.`}
            />
            <Images
              img={require("../../../asset/sample1/money-transfer.png")}
              imgh5={"Best Success Rate"}
              imgp1={`Transaction failures occur rarely with our services. We ensure that you get the best success rate for every transaction. We are as reliable as banks themselves`}
            />
          </div>

          <div className="my-5 text-center col d-flex justify-content-center">
            <Images
              imgclassname={"img-fluid"}
              img={require("../../../asset/sample1/mini-bank.png")}
              imgh5={"Turn your shop into a one-stop payment destination"}
              imgp1={`Imagine the number of customers who would visit your shop just to pay bills! These utility payments happen frequently and the demand never goes down.`}
            />
          </div>

          <div className="benefits1">
            <Images
              img={require("../../../asset/sample1/money-transfer.png")}
              imgh5={"Avoid Queues"}
              imgp1={`Customers would no longer need to stand in queues to pay their essential bills. They can simply visit your shop!`}
            />
            <Images
              img={require("../../../asset/sample1/money-transfer.png")}
              imgh5={"Save Travel Money"}
              imgp1={`Customers can save time and money by not having to travel to various departments. They can make all these bill payments at your shop.`}
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

      <div className="main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/retailer.png")}
            imgh1={`𝗣𝗮𝘆 𝗨𝘁𝗶𝗹𝗶𝘁𝘆 𝗕𝗶𝗹𝗹𝘀 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
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
