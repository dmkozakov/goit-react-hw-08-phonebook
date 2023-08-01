import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Filter contacts by name"
      variant="outlined"
      size="small"
      type="text"
      value={filter}
      onChange={changeFilter}
      sx={{ minWidth: '300px', maxWidth: '500px', width: '100%' }}
    />
  );
};
