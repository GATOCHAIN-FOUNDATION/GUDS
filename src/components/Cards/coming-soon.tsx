import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex justify-center flex-col  absolute  inset-0  items-center">
      <div
        className={` flex flex-col w-[350px]  relative
    items-center justify-center z-[1000] rounded-[20px] h-[250px] p-5`}
        style={{
          background: `rgba(255,255, 255, 0.2)`,
          backdropFilter: `blur(75px)`,
        }}
      >
        <h1 className="font-mer italic  text-white font-[20px]">
          {' '}
          Coming Soon ...{' '}
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
