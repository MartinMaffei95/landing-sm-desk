import { FC } from 'react';

type Props = {
  text: string;
};
const ErrorComponent: FC<Props> = ({ text }) => {
  return (
    <div className="border-2 border-red-500 p-1 my-2 rounded text-red-500">
      {text}
    </div>
  );
};

export default ErrorComponent;
