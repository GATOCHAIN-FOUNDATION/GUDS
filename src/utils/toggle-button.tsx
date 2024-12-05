import { FC } from 'react';

interface props {
  item1: string;
  item2: string;
}

const ToggelButton: FC<props> = ({ item1, item2 }) => {
  return (
    <>
      <div className="flex justify-start border border-[#D8D8D8] rounded-[15px] gap-4 w-[321px] h-[40px]">
        <div
          className="flex justify-center items-center bg-transparent h-[40px]"
          style={{ width: '161px' }}
        >
          <h3 className="font-meul text-[#ffffff] text-[10px]">{item1}</h3>
        </div>

        <div
          className="flex p-3 justify-center h-[40px] bg-[#C3F847] rounded-[15px] items-center"
          style={{ width: '159px' }}
        >
          <h3 className="font-meul text-[#000000] text-[10px]">{item2}</h3>
        </div>
      </div>
    </>
  );
};

export default ToggelButton;
