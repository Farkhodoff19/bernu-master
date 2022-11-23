import Коляски from '../Images/Коляски.svg';
import Автокресла from '../Images/Автокресла.svg';
import Детская from '../Images/Детская.svg';
import Транспорт from '../Images/Транспорт.svg';
import Игрушки from '../Images/Игрушки.svg';
import Одежда from '../Images/Одежда.svg';
import Товары from '../Images/Товары.svg';
import Гигиена from '../Images/Гигиена.svg';
import Кормление from '../Images/Кормление.svg';
import Детксие from '../Images/Детксие.svg';
import Елки from '../Images/Елки.svg';
import Подарочные from '../Images/Подарочные.svg';
import arrow from '../Images/arrow.svg';


function Active() {
    return (
        <div className='container hidden'>
            <ul className='px-[5px]'>
                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Коляски} alt={Коляски} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Коляски</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Автокресла} alt={Автокресла} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Автокресла</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px] bg-dark" src={Детская} alt={Детская} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Детская комната</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Транспорт} alt={Транспорт} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Транспорт и спорт</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Игрушки} alt={Игрушки} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Игрушки и игры</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Одежда} alt={Одежда} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Одежда и обувь</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Гигиена} alt={Гигиена} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Гигиена и уход</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>


                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Товары} alt={Товары} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Товары для мамочек</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Кормление} alt={Кормление} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Кормление</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Детксие} alt={Детксие} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Детксие подарки</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Елки} alt={Елки} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Елки и игрушки</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>

                <li className="px-[15px] flex items-center w-[356px] hover:bg-red-300 cursor-pointer">
                    <a className="mr-2 py-[20px]" href="!#">
                    <img className="w-[30px] h-[30px]" src={Подарочные} alt={Подарочные} />
                    </a>
                    <h2 className="text-[18px] uppercase font-bold">Подарочные карты</h2>
                    <img className='ml-auto w-[15px]' src={arrow} alt="arrow" />
                </li>
            </ul>
        </div>
    )
}

export default Active