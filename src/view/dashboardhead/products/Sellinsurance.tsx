import { Secondsildes, Layout1, Images } from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Sellinsurance() {
  return (
    <div className="sell-insurance">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/transaction-assurance.png")}
          imgh4={`Sell Insurance`}
          imgh1={`𝗦𝗲𝗹𝗹 𝗹𝗼𝘄 𝗰𝗼𝘀𝘁 𝗶𝗻𝘀𝘂𝗿𝗮𝗻𝗰𝗲 𝗽𝗼𝗹𝗶𝗰𝘆 𝗮𝘁 𝘆𝗼𝘂𝗿 𝗱𝗼𝗼𝗿𝘀𝘁𝗲𝗽`}
          imgp2={`Low cost, simple paperwork and easy claim process makes our insurance policies the best choice for your customers.`}
          btnclassname={"button"}
          btnvalue={`Ty for free`}
        />
      </div>

      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1
            layout1h5={`Insurance`}
            layout1h2={`𝗕𝗲𝗰𝗼𝗺𝗲 𝗮𝗻 𝗜𝗻𝘀𝘂𝗿𝗮𝗻𝗰𝗲 𝗔𝗴𝗲𝗻𝘁`}
            line={" span mb-4"}
            layout1p1={`Help your customers secure their lives by becoming an insurance agent. No, not the kind of agent who bothers people by going to their houses only to tell them they could die, but the kind who people themselves approach for their insurance needs.`}
          />
          <div className="benefits py-4">
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐒𝐞𝐥𝐥 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐚𝐧𝐝 𝐚𝐟𝐟𝐨𝐫𝐝𝐚𝐛𝐥𝐞 𝐢𝐧𝐬𝐮𝐫𝐚𝐧𝐜𝐞 𝐩𝐨𝐥𝐢𝐜𝐢𝐞𝐬`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐌𝐚𝐤𝐞 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬`}
            />
            <Images
              img={require("../../../asset/sample1/light.png")}
              imgh5={`𝐆𝐞𝐭 𝐜𝐚𝐬𝐡𝐛𝐚𝐜𝐤 𝐟𝐨𝐫 𝐞𝐯𝐞𝐫𝐲 𝐢𝐧𝐬𝐮𝐫𝐚𝐧𝐜𝐞/𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐬𝐨𝐥𝐝`}
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
              img={require("../../../asset/sample1/retailer.png")}
              imgh5={"Avoid Queues"}
              imgp1={`Customers would no longer need to stand in queues to pay their essential bills. They can simply visit your shop!`}
            />
            <Images
              img={require("../../../asset/sample1/retailer.png")}
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
            img2={require("../../../asset/sample1/partner.png")}
            imgp1={`Ready to get started?`}
            imgh1={`𝗦𝗲𝗹𝗹 𝗜𝗻𝘀𝘂𝗿𝗮𝗻𝗰𝗲 𝗽𝗼𝗹𝗶𝗰𝗶𝗲𝘀 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
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
