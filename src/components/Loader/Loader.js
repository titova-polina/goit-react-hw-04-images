import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#383838"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};
