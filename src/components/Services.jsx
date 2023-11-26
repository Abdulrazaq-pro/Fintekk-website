import { Accordion, Button, TextInput } from "flowbite-react";
import ButtonGroup from "flowbite-react/lib/esm/components/Button/ButtonGroup";
function Services() {
  return (
    <div className="">
      <h1 className="my-10 font-bold text-primary text-center text-3xl">
        More than <span className="text-primarylight">10,000</span> active users <br />
        trust Fintekk
      </h1>

      {/* Cards Section */}
      <div className="md:bg-zinc-50 pt-8 pb-3 text-center px-7">
        <p className="text-xs py-1 font-semibold ">OUR SERVICES</p>
        <h1 className="text-primary text-2xl font-semibold">What we offer</h1>
        <p className="text-xs text-zinc-600 mt-1">
          We help individuals become more flexible and responsible with their
          finances and handle payments smooth ad easy
        </p>
        <div className="md:grid md:grid-cols-3 space-y-4 md:gap-x-6  p-3">
          <Card
            title="Easy Payment"
            bgcolor="bg-blue-100"
            text="Stress free pyment for all transactions that you do at any time"
            imgsrc="./images/Frame721.png"
          />
          <Card
            title="Investments"
            bgcolor="bg-yellow-100"
            text="Grow your money by investing inpre-vetted investment opportunies "
            imgsrc="./images/Frame721.png"
          />
          <Card
            title="Fixed Savings"
            bgcolor="bg-blue-50"
            text="Grow your money by investing inpre-vetted investment opportunies "
            imgsrc="./images/Frame721.png"
          />
        </div>
      </div>

      {/* showsace section */}
      <div className="showcase md:grid md:grid-cols-2  m-auto my-11">
        <img
          className="w-[200px] m-auto mb-8 md:mb-0"
          src="./images/Fintekk app- phone.png"
          alt=""
        />
        <div className="flex justify-center flex-col text-primary">
          <h1 className="text-lg font-semibold">
            Start the journey to reach your financial goals today.
          </h1>
          <div className="space-y-16 mt-3 ">
            <div className="flex gap-2">
              <p>01</p>
              <div>
                <p className="font-semibold">Download the mobile app</p>
                <p className="text-sm">
                  Sign up for an account with your name,email and phone number
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <p>02</p>
              <div>
                <p className="font-semibold">Create a free account</p>
                <p className="text-sm">
                  Sign up for an account with your name,email and phone number
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <p>03</p>
              <div>
                <p className="font-semibold">Create a free account</p>
                <p className="text-sm">
                  Sign up for an account with your name,email and phone number
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-primary text-white px-3 py-1 border rounded-md mt-3">
              Download Now
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="md:grid md:grid-cols-2 ">
        <div className="w-9/12 m-auto md:w-full md:p-6">
          <h1 className="text-4xl font-semibold mb-2">FAQs</h1>
          <Accordion className="">
            <Accordion.Panel className="">
              <Accordion.Title className="">what is it about</Accordion.Title>
              <Accordion.Content>
                <p>its a fundamental</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>what is it about</Accordion.Title>
              <Accordion.Content>
                <p>its a fundamental</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>what is it about</Accordion.Title>
              <Accordion.Content>
                <p>its a fundamental</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div>
          <img src=".\images\Illustration.png" alt="" />
        </div>
      </div>

      {/* Testimonial */}
      <div className="md:grid md:grid-cols-2 m-auto my-14">
        <div className="text-center md:text-start px-4 font-semibold">
          <p className="text-sm">TESTIMONIAL</p>
          <p className="text-lg mt-1">
            WHAT OUR CUSTOMERS <br />
            SAY ABOUT US
          </p>
        </div>
        <div className="text-center md:text-start px-4">
          <p className="text-sm ">
            Dealt with enquiries and subsequent transactions efficiently and
            quickly. I'm so pleased with the pricing and services
          </p>
          <p className="font-semibold">Maryam Adegoke</p>
          <p className="text-yellow-400">
            &#9733; &#9733; &#9733; &#9733;
            <span className="text-black"> &#9734;</span>
          </p>
        </div>
      </div>

      {/* Feedback */}
      {/* <div className="text-lg w-2/3 text-center ">
        <h1>
          Start growing <br />
          your wealth today
        </h1>
        <ButtonGroup>
          <TextInput>Enter your email address</TextInput>
          <Button className="px-3 py-1"> Sign up</Button>
        </ButtonGroup>
      </div> */}

      {/* Footer*/}
      <div className="p-5 ">
        <div className="md:flex">
          <div className="md:max-w-[230px]">
            <h1 className="text-lg text-primary font-semibold">Fintekk</h1>
            <p className="text-xs text-zinc-600 pt-1 mb-2 ">
              Fintekk is the bank that does it all. Manage everything directly
              and easy with fintekk.
            </p>
          </div>
          <div className=" text-primary grid grid-cols-2 md:grid-cols-4 m-auto gap-x-4 gap-y-10">
            <div className="space-y-2 ">
              <h1 className="text-lg font-semibold">Company</h1>
              <p>Career</p>
              <p>About Us</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Services</h1>
              <p>Payment</p>
              <p>Investment</p>
              <p>Savings Plans</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Resources</h1>
              <p>Media</p>
              <p>FAQs</p>
              <p>Help Centre</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Contact Us</h1>
              <p>www.fintekk.com</p>
            </div>
            {/* <div className="space-y-2">
              <h1 className="text-lg font-semibold"></h1>
              <p></p>
            </div> */}
          </div>
        </div>
        <div className="text-semibold text-center text-sm text-primary flex md:justify-between mt-3">
          <p>Copyright 2022 fintekk. All rights reserved</p>
          <p className="ms-7 md:ms-0">Terms and condition. Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

const Card = ({ bgcolor, title, text, imgsrc }) => {
  return (
    <div
      className={
        "rounded-2xl text-left p-10 w-[70%] md:w-[100%] m-auto max-w-[400px] " +
        bgcolor
      }
    >
      <h1 className="text-primary text-xl font-semibold">{title}</h1>
      <p className="py-2 text-xs text-zinc-600">{text}</p>
      <p className=" inline-block text-sm text-primary font-semibold mb-3 hover:translate-x-1 ease-in-out duration-200 cursor-pointer">
        Read More<span className="font-extrabold">&rarr;</span>
      </p>
      <img src={imgsrc} alt="" className="w-[200px]" />
    </div>
  );
};

export default Services;
