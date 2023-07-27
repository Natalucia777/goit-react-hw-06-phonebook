import { getFilterValue, setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWindow } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const changeFilter = evt => {
    return dispatch(setFilter(evt.target.value));
  };
  return (
    <FilterWindow>
      <FilterLabel>
        Filter: Find contacts by name
        <FilterInput type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    </FilterWindow>
  );
};

export default Filter;