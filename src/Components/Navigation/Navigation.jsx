import hamburger from "../Images/hamburger.svg";
import Active from "../Active/Active";
import '../Active/Active.css';

function Navigation() {
  return (
    <div className="pl-5 flex items-center w-[356px] hover:bg-teal-500 cursor-pointer">
      <a className="mr-2 py-[26px]" href="!#">
        <img className="h-[18px]" src={hamburger} alt={hamburger} />
      </a>
      <h2 className="text-[18px] uppercase font-bold">Каталог товаров</h2>
    </div>
  );
}

export default Navigation;
