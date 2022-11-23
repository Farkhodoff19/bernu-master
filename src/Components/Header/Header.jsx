import logo from "../Images/Group.svg";
import call from "../Images/call.svg";
import mail from "../Images/mail.svg";
import hamburger from '../Images/hamburger.svg';

function Header() {
  return (
    <div className="header pt-5 pb-8">
      <div className="container flex items-center max-sm:w-[400px]">

        <a className="logo mr-20" href="!#">
          <img src={logo} alt={"logo"} />
        </a>

        <ul className="header__list flex mr-32">
          <li className="header__item mr-5 font-semibold">
            <a href="!#">О нас</a>
          </li>

          <li className="header__item mr-5 font-semibold">
            <a href="!#">Оплата и доставка</a>
          </li>

          <li className="header__item mr-5 font-semibold">
            <a href="!#">Отзывы</a>
          </li>

          <li className="header__item mr-5 font-semibold">
            <a href="!#">FAQ</a>
          </li>

          <li className="header__item mr-5 font-semibold">
            <a href="!#">Блог</a>
          </li>

          <li className="header__item font-semibold">
            <a href="!#">Контакты</a>
          </li>
        </ul>

        <div className="flex items-center">
          <a className="flex mr-5" href="tel:+380974356743">
            <img className="mr-2 w-5 h-7" src={call} alt={"call"} />
             +38 097 435 6743
          </a>

          <a className="flex mr-10" href="mail_to:Kidsshop@gmail.com">
            <img className="mr-2 w-5 h-7" src={mail} alt={"mail"} />
            Kidsshop@gmail.com
          </a>

          <button className="mr-2 opacity-70">РУ</button>
          <button>LV</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
