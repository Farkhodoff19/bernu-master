import diamond from "../Images/diamond.svg";
import all from "../Images/all.svg";
import shipping from "../Images/shipping.svg";
import ratio from "../Images/ratio.svg";

function Services() {
  return (
    <div>
      <div className="container">
        <ul className="flex items-center my-[40px] ml-[20px]">
          <li className="flex items-center ml-[20px] mr-[190px]">
            <img className="mr-[20px]" src={diamond} alt="diamondpng" />
            <h3 className="font-semibold text-[20px]">Гарантия качества</h3>
          </li>

          <li className="flex items-center ml-[20px] mr-[190px]">
            <img className="mr-[20px]" src={all} alt="all-stickers" />
            <h3 className="font-semibold text-[20px]">Огромный ассортимент</h3>
          </li>

          <li className="flex items-center ml-[20px] mr-[190px]">
            <img className="mr-[20px]" src={shipping} alt="shipping" />
            <h3 className="font-semibold text-[20px]">Быстрая доставка</h3>
          </li>

          <li className="flex items-center ml-[30px] mr-[190px]">
            <img className="mr-[20px]" src={ratio} alt="ratio" />
            <h3 className="font-semibold text-[20px] w-[200px]">Выгодные цены и бонусы</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
