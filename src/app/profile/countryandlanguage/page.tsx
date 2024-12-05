import dynamic from 'next/dynamic';
const Language = dynamic(() => import('@/components/Profile/language'));

const CountryandLanguage = () => {
  return (
    <>
      <div className="flex justify-center h-full w-full">
        <Language />
      </div>
    </>
  );
};

export default CountryandLanguage;
