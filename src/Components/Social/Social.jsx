import admin from '../Images/admin.svg';
import heart from '../Images/heart.svg';
import basket from '../Images/basket.svg';


function Social() {
    return (
        <div className='flex items-center ml-auto'> 
            <img className='cursor-pointer mr-[30px]' src={admin} alt="admin" />
            <img className='cursor-pointer heart mr-[30px]' src={heart} alt="heart" />
            <img className='cursor-pointer mr-[30px]' src={basket} alt="basket" />
        </div>
    )
}

export default Social;