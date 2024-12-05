import Image from 'next/image';
import stakingCoinIcon from '@/assests/icons/stakingCoinIcon.png';
import guds_dividend from '@/assests/icons/guds_dividend.png';
import Logo from '@/assests/logo/logo2.png';

const Button = ({ text, icon }: { text: string; icon: any }) => {
  return (
    <button
      className="flex gap-3 justify-center items-center w-[183px] h-[50px] rounded-full backdrop-blur-md"
      style={{
        backgroundColor: `${text === 'Staking' ? '#C3F847' : 'transparent'}`,
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt={''}
          className="w-[18px] aspect-auto object-contain"
        />
      )}
      <p
        className="text-[14px] font-monl font-bold"
        style={{ color: `${text === 'Staking' ? '#000000' : '#FFFFFF'}` }}
      >
        {text}
      </p>
    </button>
  );
};

export const StakingProgram = () => {
  const gudsFeatureList = [
    {
      id: 1,
      heading: (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
            Fixed for 12 months
          </p>
          <p className="bg-[#D5FA7E] rounded-full flex justify-center items-center text-black text-[12px] font-monl font-semibold">
            12.00 %
          </p>
        </div>
      ),
      bgColor: 'transparent',
    },
    {
      id: 2,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          Reward
        </p>
      ),
    },
    {
      id: 3,
      heading: (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
            18,945.0654987 GUDS
          </p>
          <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
            ≈ $32,078.54
          </p>
        </div>
      ),
      bgColor: 'transparent',
    },
    {
      id: 4,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          0.00
        </p>
      ),
      bgColor: 'transparent',
    },
    {
      id: 5,
      heading: (
        <p className="text-[#000000] text-[13px] font-monl font-semibold">
          Claim
        </p>
      ),
      bgColor: '#D5FA7E',
    },
    {
      id: 6,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          Stake it
        </p>
      ),
      bgColor: 'transparent',
    },
  ];

  const gudsTotalBalance = [
    {
      id: 1,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          Locked for staking
        </p>
      ),
      bgColor: 'transparent',
    },
    {
      id: 2,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          Reward
        </p>
      ),
    },
    {
      id: 3,
      heading: (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#DFDFDF] text-[14px] font-monl font-semibold">
            0.2381 GATO
          </p>
          <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
            ≈ $33,394.87
          </p>
        </div>
      ),
      bgColor: 'transparent',
    },
    {
      id: 4,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          0.00
        </p>
      ),
      bgColor: 'transparent',
    },
    {
      id: 5,
      heading: (
        <p className="text-[#000000] text-[13px] font-monl font-semibold">
          Claim
        </p>
      ),
      bgColor: '#D5FA7E',
    },
    {
      id: 6,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          Stake it
        </p>
      ),
      bgColor: 'transparent',
    },
  ];

  const TotalBalance = [
    {
      id: 1,
      heading: (
        <p className="text-[#DFDFDF] text-center text-[13px] font-monl font-semibold">
          Date staked: 11.11.2022 Staking duration: 10 days
        </p>
      ),
      bgColor: 'transparent',
    },
    {
      id: 2,
      heading: (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#DFDFDF] flex gap-[1px] justify-center items-center text-[14px] font-monl font-semibold">
            <div>
              <p className="bg-[#D5FA7E] rounded-full flex justify-center items-center text-black text-[12px] font-monl font-semibold">
                7.00 %
              </p>
            </div>
            APY, Date of
          </p>
          <p className="text-[#DFDFDF] text-center text-[13px] font-monl font-semibold">
            staking termination 21.11.2022
          </p>
        </div>
      ),
    },
    {
      id: 3,
      heading: (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#DFDFDF] text-[14px] font-monl font-semibold">
            9,195.0784363 GUDS
          </p>
          <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
            ≈ $17,584.87
          </p>
        </div>
      ),
      bgColor: 'transparent',
    },
    {
      id: 4,
      heading: (
        <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
          0.00
        </p>
      ),
      bgColor: 'transparent',
    },
  ];
  return (
    <section className="flex flex-wrap gap-5 z-20 justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <article className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-[18px] font-bold text-[#FFFFFF] font-monl">
            GUDS Staking Program
          </h2>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button text={'Staking'} icon={stakingCoinIcon} />
            <Button text={'Guds Dividends'} icon={guds_dividend} />
          </div>

          <p className="text-[10px] font-monl font-semibold text-center text-[#DFDFDF]">
            Guds Staking, dedicated to increasing user staking income
          </p>
        </article>

        <article className="w-[285px] h-[165px] rounded-[30px] border border-[#ffffff6e] bg-[#000000] bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[12px] text-[#DFDFDF] font-monl font-semibold">
              Locked Staking balance
            </p>
            <h2 className="text-[20px] text-[#FFFFFF] text-center">
              0.00000000 GATO
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[12px] text-[#DFDFDF] font-monl font-semibold">
              Cumulative profit
            </p>
            <h2 className="text-[20px] text-[#D5FA7E] text-center">
              0.00000000 GATO
            </h2>
          </div>
        </article>

        <article className="w-[350px] h-[180px] rounded-[30px] border border-[#ffffff6e] bg-[#000000] bg-opacity-30 backdrop-blur-md flex flex-wrap gap-2 p-1 justify-center items-center">
          {gudsFeatureList.map((item) => (
            <div
              className="w-[148px] h-[39px] flex justify-center items-center border border-[#ffffff56] rounded-full"
              style={{ backgroundColor: `${item.bgColor}` }}
              key={item.id}
            >
              {item.heading}
            </div>
          ))}
        </article>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <article className="flex flex-col gap-4 justify-center">
          <h2 className="text-[18px] text-[#FFFFFF] font-monl font-bold">
            Locked Staking
          </h2>
          <Button text={'Staking'} icon={stakingCoinIcon} />
        </article>

        <article className="w-[350px] h-[275px] rounded-[30px] border border-[#ffffff6e] bg-[#000000] bg-opacity-30 backdrop-blur-md p-3 justify-center items-baseline">
          <div className="flex justify-between items-center p-3">
            <div className="flex justify-center items-center gap-2">
              <Image
                src={Logo}
                alt={''}
                className="w-[42px] aspect-auto object-contain"
              />
              <h3 className="text-[16px] text-white font-monl font-bold">
                GUDS
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <p className="text-[12px] text-[#FFFFFF] font-monl text-center">
                Total gato Balance
              </p>
              <h3 className="text-[18px] font-bold text-[#FFFFFF] font-monl text-center">
                0.39152020 GUDS
              </h3>
              <p className="text-[12px] text-[#FFFFFF] font-monl text-center">
                ≈ $33,394.87
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {gudsTotalBalance.map((item) => (
              <div
                className="w-[148px] h-[39px] flex justify-center items-center border border-[#ffffff56] rounded-full"
                style={{ backgroundColor: `${item.bgColor}` }}
                key={item.id}
              >
                {item.heading}
              </div>
            ))}
          </div>
        </article>

        <article className="w-[350px] h-[296px] rounded-[30px] border border-[#ffffff6e] bg-[#000000] bg-opacity-30 backdrop-blur-md flex flex-wrap p-4 justify-center items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {TotalBalance.map((item) => (
              <div
                className="w-[148px] flex justify-center items-center border border-[#ffffff56] rounded-[30px]"
                style={{ backgroundColor: `${item.bgColor}` }}
                key={item.id}
              >
                {item.heading}
              </div>
            ))}
          </div>

          <div
            className="w-[148px] h-[54px] flex justify-center items-center border border-[#ffffff56] rounded-full"
            style={{ backgroundColor: `#D5FA7E` }}
          >
            <p className="text-[#000000] text-[13px] font-monl font-bold">
              Claim
            </p>
          </div>

          <div
            className="w-full h-[46px] flex justify-center items-center border border-[#ffffff56] rounded-full"
            style={{ backgroundColor: `transparent` }}
          >
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#DFDFDF] text-[14px] font-monl font-semibold">
                9,195.0784363 GUDS
              </p>
              <p className="text-[#DFDFDF] text-[13px] font-monl font-semibold">
                $17,584.87
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
