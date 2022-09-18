import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "./../../assets/checkpoint.svg";
const Content = () => {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row md:items-center">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px] md:w-[30%] md:p-8">
        <div className="mt-6 gap-8 flex items-start pb-8">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Customers</p>
          </div>
        </div>
        <div className="mb-6 gap-8 flex items-start">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Cards Issued</p>
          </div>
        </div>
      </div>
      
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 ">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content md:mb-0">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
