import { Loader } from '@/utils/Loader';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import dangerIcon from '@/assests/icons/danger.png';

export const WalletProgress = ({
  status,
  handleReconnect,
  onClose,
}: {
  status: string;
  handleReconnect: any;
  onClose: any;
}) => {
  const isFailed = status === 'failed';
  const borderColor = isFailed ? '#F82020' : '#C3F847';

  return (
    <article
      className={`relative w-[330px] min-h-[260px] p-4 rounded-[30px] flex flex-col gap-2 bg-[#000000] bg-opacity-25 backdrop-blur-sm justify-center z-[99999] items-center border-2 border-solid border-${borderColor}`}
      style={{ borderColor: `${borderColor}` }}
    >
      {!isFailed && (
        <div
          onClick={onClose}
          className="text-[20px] text-[#ffffff] absolute top-4 right-4 cursor-pointer"
        >
          <AiOutlineClose />
        </div>
      )}

      {isFailed ? (
        <Image
          src={dangerIcon}
          alt=""
          className="w-[53px] aspect-auto object-contain"
        />
      ) : (
        status !== 'success' && <Loader />
      )}

      <h3
        className={`text-[24px] font-mer text-center`}
        style={{ color: borderColor }}
      >
        {status === 'reconnecting'
          ? 'Trying to reconnect'
          : status === 'failed'
            ? 'Connection Failed'
            : status === 'success'
              ? 'Wallet Connected'
              : 'Connecting Wallet'}
      </h3>

      {status === 'reconnecting' && (
        <p className="text-[#DEDEDE] text-[12px] font-monl text-center">
          Sometimes block size is more, It may take a little time to connect
        </p>
      )}

      {isFailed && (
        <>
          <p className="text-[#DEDEDE] text-[12px] font-monl text-center">
            Wallet not connected. Please try again.
          </p>
          <button
            onClick={handleReconnect}
            className="text-[#C3F847] text-[18px] font-sans cursor-pointer"
          >
            Re-Connect
          </button>
        </>
      )}
    </article>
  );
};
