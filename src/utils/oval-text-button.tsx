import { FC } from 'react';

interface btnProps {
  heading: string;
  backgroundCol: string;
  textColor: string;
}

const OvalTextButton: FC<btnProps> = ({
  heading,
  backgroundCol,
  textColor,
}) => {
  return (
    <>
      <div
        className="font-meul rounded-[50px] mb-4 p-4 w-[100%] text-center cursor-pointer text-sm"
        style={{ backgroundColor: `${backgroundCol}`, color: `${textColor}` }}
      >
        {heading}
      </div>
    </>
  );
};

export default OvalTextButton;
