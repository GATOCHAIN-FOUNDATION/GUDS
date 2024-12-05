import Image from 'next/image';
import icon from '@/assests/icons/searchIcon.png';

const Search = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-2 bg-[#292929] p-3 shadow-xl rounded-[50px] ">
        <div>
          <Image src={icon} alt={'search icon'} className="w-[20px]" />
        </div>
        <input
          type="text"
          className="w-[80%] bg-transparent outline-none text-[#ffffff]"
        />
      </div>
    </>
  );
};

export default Search;
