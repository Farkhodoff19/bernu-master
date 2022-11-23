import search from '../Images/search.svg';

function Search() {
  return (
    <form className="flex w-[600px] bg-slate-50 rounded-full">
      <img className='px-[15px] cursor-pointer' src={search} alt="search-img" />
      <input className='text-[17px] w-[100%] outline-none' type="search" placeholder="Введите запрос для поиска" />
      <button className='rounded-r-full shadow-lg p-[10px] px-[30px] text-[17px] bg-teal-400 te text-white hover:bg-teal-500 active:bg-teal-700'>Найти</button>
    </form>
  );
}

export default Search;
