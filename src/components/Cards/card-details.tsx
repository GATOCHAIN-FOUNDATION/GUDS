import { Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import toast from 'react-hot-toast';
import ShortUniqueId from 'short-unique-id';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useState, FC, useEffect } from 'react';
import cardBg from '@/assests/background_images/cardBg.png';
import './swap-card.css';

const notify = () =>
  toast.success('Copied to clipboard.', {
    position: 'top-right',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      borderColor: '#fff',
    },
  });

interface CardProps {
  copy: string;
}

interface AddProps {
  givenwalletAddress: string;
}

interface CardDetailsProps {
  amount: any;
}

const AddButton: FC<AddProps> = ({ givenwalletAddress }) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!givenwalletAddress) {
      return;
    }
  };

  return (
    <button
      className="w-full h-[50px] flex justify-center items-center rounded-[10px] gap-2 bg-[#614AD3]"
      onClick={handleSubmit}
    >
      <div className="w-[12.5px] h-[12.5px] rounded-[30px] border border-white flex justify-center items-center text-[7px] text-white">
        <AiOutlinePlus />
      </div>
      <h3 className="text-[17px] text-white font-monl">Track Transaction</h3>
    </button>
  );
};
const CopyButton: FC<CardProps> = ({ copy }) => {
  return (
    <div className="cursor-pointer" onClick={notify}>
      <CopyToClipboard text={copy}>
        <Image alt={""} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYElEQVR4nO2UwQ2AMAwDMx4V+y/QsMfx4geqMQihKvduc6qtJmIagBXYMAlBkO5wVaAddPlcgN9JAk0RPOmkKwIrMq7uleCgIhpSEQ2RP+gUgnx12Z0IminpwHL35f9lB/PuqMsrUaFAAAAAAElFTkSuQmCC" />
      </CopyToClipboard>
    </div>
  );
};

export const CardDetails: FC<CardDetailsProps> = ({ amount }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  const amountvalue = Number(amount);
  const userEmail = session?.user?.email;
  const [accountTitle, setAccountTitle] = useState('Gabriele Bigontina');
  const [accountNumber, setAccountNumber] = useState('TRWIBEB1XXX');
  const [iban, setIBAN] = useState('BE92 9670 2898 9323');
  const uid = new ShortUniqueId({ length: 20 });
  const id = uid.rnd();
  const [address, setAddress] = useState(
    'Rue du Trône 100, 3rd floor Brussels 1050 Belgium'
  );
  const [loading, setLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const [isTransactionTrue, setIsTransactionTrue] = useState<
    boolean | undefined
  >();
  const [isValid, setIsValid] = useState<any>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the count state every second
      setLoading(false);
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = async (event: any) => {
    setIsValid(validateWalletAddress(walletAddress));

    if (!isValid) {
      toast.error('Wallet Address is not valid');
      return;
    }

    try {
      const createTransaction = await fetch('/api/createTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          address: walletAddress,
          email: userEmail,
          status: 'processing',
          amount: amountvalue,
        }),
      });
      const { transaction } = await createTransaction.json();
      toast.success('Guds order has been placed');
      setIsTransactionTrue(true);
    } catch {
      console.log('error in creating transaction');
    }
  };

  const validateWalletAddress = (address: any) => {
    // Regular expression for Ethereum wallet address
    const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

    return ethereumAddressRegex.test(address);
  };

  return (
    <Fragment>
      <div className="w-[340px] z-[20] relative  p-4 flex flex-col justify-center items-center drop-shadow-2xl  bg-transparent  rounded-[30px]">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: -2,
          }}
        >
          <Image
            src={cardBg}
            alt="Background"
            className="w-full h-full bg-contain"
            placeholder="blur"
            style={{
              filter: 'drop-shadow(2px 2px 2px #000000)',
            }}
            priority
          />
        </div>

        {loading ? (
          <div className="w-[310px] h-[700px] flex items-center justify-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="flex flex-col w-[310px] gap-5 items-start my-[20%]">
            <button className="bg-[#F5F6FA] bg-opacity-[26%] rounded-full flex justify-center items-center w-[45px] h-[45px] text-[20px] text-[#1D1E20]">
              <BsArrowLeft />
            </button>

            <div className="flex flex-col items-center justify-center gap-5 w-[310px]">
              <h1 className="text-white text-[17px] font-mer">Bank Details </h1>

              <div className="flex flex-col gap-3 w-[310px]">
                <div className="text-white">Card Number</div>
                <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                  <input
                    className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[70%]"
                    placeholder="Card Number "
                    value={accountNumber}
                  />
                  <CopyButton copy={accountNumber} />
                </div>
                <div className="text-white">Iban Number</div>
                <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                  <input
                    className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[70%]"
                    placeholder="Iban Number "
                    value={iban}
                  />
                  <CopyButton copy={iban} />
                </div>
                <div className="text-white">Account Name</div>
                <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                  <input
                    className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                    placeholder="Name on Card "
                    value={accountNumber}
                  />
                  <CopyButton copy={accountNumber} />
                </div>

                <div className="text-white">Address</div>
                <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                  <input
                    className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                    placeholder="Name on Card "
                    value={address}
                  />
                  <CopyButton copy={address} />
                </div>

                <div className="text-white">Enter your Wallet Address</div>
                <div className="w-full h-[44px] rounded-[10px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                  <input
                    className="placeholder:text-[10px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                    placeholder="Wallet Address "
                    value={walletAddress}
                    onChange={(e: any) => {
                      setWalletAddress(e.target.value);
                    }}
                  />
                </div>
                {!isValid && (
                  <p style={{ color: 'red' }}>Invalid wallet address</p>
                )}
              </div>
            </div>

            <div className=" w-[310px] my-4">
              {isTransactionTrue ? (
                <AddButton givenwalletAddress={walletAddress} />
              ) : (
                <button
                  className="w-full h-[50px] flex justify-center items-center rounded-[10px] gap-2 bg-[#614AD3]"
                  onClick={handleInputChange}
                >
                  <div className="w-[12.5px] h-[12.5px] rounded-[30px] border border-white flex justify-center items-center text-[7px] text-white">
                    <AiOutlinePlus />
                  </div>
                  <h3 className="text-[17px] text-white font-monl">
                    Confirm Transaction
                  </h3>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
