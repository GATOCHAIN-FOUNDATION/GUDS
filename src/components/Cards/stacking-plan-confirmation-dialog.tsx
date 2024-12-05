import Image from 'next/image';
import Diamod from '@/assests/logo/Diamonds2.png';

export const StackingPlanConfirmationDialog = () => {
  return (
    <article className="w-[320px] z-20 h-[280px] gap-3 bg-[#360E76] px-3 flex flex-col justify-center items-center rounded-[30px] border border-[#C3F847]">
      <h1 className="text-[24px] text-[#C3F847] font-mer uppercase text-center">
        STACKING PLAN CONFIRMED
      </h1>
      <Image
        src={Diamod}
        alt={'diamond'}
        className="w-[150px] aspect-auto object-contain"
      />
    </article>
  );
};
