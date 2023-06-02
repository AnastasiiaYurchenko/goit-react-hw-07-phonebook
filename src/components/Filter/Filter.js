import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { FieldFind, LabelFind } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <LabelFind>
      Find contacts by name
      <FieldFind
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      ></FieldFind>
    </LabelFind>
  );
};
