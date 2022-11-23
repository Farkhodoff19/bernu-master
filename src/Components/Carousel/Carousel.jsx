import toast from '../Images/toast.png';
import baby from '../Images/baby.png';
import clothes from '../Images/clothes.png';
import swimming from '../Images/swimming.png';


function Carousel() {
    return (
            <div className='bg-gray-200'>
            <div className="container">
                <ul className='mt-[20px] flex items-center ml-[20px] py-[20px]'>
                    <li className='mx-[10px]'>
                        <img className='w-[290px] h-[200px]' src={toast} alt="toast" />
                    </li> 

                    <li className='mx-[10px]'>
                        <img className='w-[290px] h-[200px]' src={baby} alt="toast" />
                    </li> 

                    <li className='mx-[10px]'>
                        <img className='w-[290px] h-[200px]' src={clothes} alt="toast" />
                    </li> 

                    <li className='mx-[10px]'>
                        <img className='w-[290px] h-[200px]' src={swimming} alt="toast" />
                    </li> 
                </ul>
                </div>
            </div>
    )
}

export default Carousel
