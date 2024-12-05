'use client';

const ProcessRadioBtn = () => {
  const processContent = [
    { heading: 'PreOrder', date: '09-09-21', value: '1' },
    { heading: 'DeFi', date: '09-12-21', value: '2' },
    { heading: 'Active', date: '09-15-21', value: '3' },
    { heading: 'In Use', date: '09-30-21', value: '4' },
  ];
  return (
    <div className="flex justify-between gap-4 relative">
      {processContent.map((item) => {
        return (
          <>
            <div
              key={item.heading}
              className="flex flex-col items-center justify-center gap-3"
            >
              <input
                type="radio"
                value={item.value}
                id={item.value}
                name="process"
                className="w-6 h-6 "
                style={{ color: '#C3F847', backgroundColor: 'transparent' }}
              />
              <label
                htmlFor={item.value}
                className="flex flex-col gap-1 justify-center"
              >
                <h3 className="text-[15px] text-[#ffffff] text-center font-monl">
                  {item.heading}
                </h3>
                <p className="text-[12px] text-[#ffffff] text-center font-monl">
                  {item.date}
                </p>
              </label>
            </div>
            <div className="w-14 h-[4px] bg-[#D8D8D8] absolute"></div>
          </>
        );
      })}
    </div>
  );
};

export default ProcessRadioBtn;
