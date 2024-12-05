import Image from 'next/image';
// import Icon from "../../public/assests/icons/menu.png";
import Icon from '@/assests/icons/roundButtonIcon.png';

const RoundButton = () => {
  return (
    // <div className="flex">
    //   <Image src={Icon} alt="button icon" width={90} height={90} />
    // </div>
    <>
      <button
        className=""
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: '#C3F847',
          filter: 'drop-shadow(0 0 0.75rem #C3F847)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={Icon}
          alt="button icon"
          className="w-[15px] aspect-auto"
          style={{ width: '30px', aspectRatio: 'auto' }}
        />
      </button>
    </>
  );
};

export default RoundButton;
