import { LoadBtn, WrapperBtn } from './Button.styled';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <WrapperBtn>
      <LoadBtn onClick={handleLoadMore}>Load More</LoadBtn>
    </WrapperBtn>
  );
};
