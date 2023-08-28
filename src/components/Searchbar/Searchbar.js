import { Btn, Form, SearchInput, Wrapper } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export const SearchBar = ({ changeQuery }) => {
  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          changeQuery(e.target.elements.query.value);
          //e.target.reset();
        }}
      >
        <SearchInput type="text" name="query"></SearchInput>
        <Btn type="submit">
          <SearchIcon />
        </Btn>
      </Form>
    </Wrapper>
  );
};
