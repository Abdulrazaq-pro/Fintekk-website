function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 z-0 max-w-[900px] m-auto mt-10 p-5">
        <div className="space-y-6">
          <p className="text-xl md:text-5xl">
            Pay, Invest, Save your Cash with a single bank
          </p>
          <p className="text-sm md:text-lg">
            Fintekk is the bank that does it all. Manage everything directly and
            easy with fintekk.
          </p>
          <div>
            <button className="bg-primarylight text-white border hover:bg-white hover:text-primary py-1 px-2 rounded-md">
              Sign Up for FREE
            </button>
          </div>
          <div className="space-y-2 md:flex md:space-y-0 gap-2">
            <button className="flex space-x-1 text-sm md:text-base  p-1 border border-zinc-300 rounded-lg">
              <img src="./images/icons/playstoreicon.svg" alt="" />
              <span>Get on Andriod</span>
            </button>
            <button className="flex space-x-1 text-sm md:text-base p-1 border border-zinc-300 rounded-lg">
              <img src="./images/icons/appleicon.svg" alt="" />
              <p>Get on Iphone</p>
            </button>
          </div>
        </div>
        <div className="flex mx-auto hover:scale-105 ease-in-out duration-1000" >
          <img
            src="./images/heropics.png"
            alt=""
            className="object-fit m-auto"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6 py-2 bg-zinc-100">
        <div className="flex m-auto">
          <img src="./images/bloomberglogo.png" alt="" className="w-[75%]" />
        </div>
        <div className="flex m-auto">
          <img src="./images/Quartz logo.png" alt="" className="w-[75%]" />
        </div>
        <div className="flex m-auto">
          <img src="./images/Forbes logo.png" alt="" className="w-[75%]" />
        </div>
        <div className="flex m-auto">
          <img src="./images/stripe logo.png" alt="" className="w-[75%]" />
        </div>
        <div className="flex m-auto">
          <img src="./images/CNBC logo.png" alt="" className="w-[75%]" />
        </div>
      </div>
    </>
  );
}

export default Hero;
