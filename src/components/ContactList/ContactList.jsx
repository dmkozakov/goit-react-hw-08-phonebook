import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { stringAvatar } from 'services/stringAvatar';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ListItem
            key={id}
            sx={{ maxWidth: '500px', minWidth: '300px' }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                data-id={id}
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ width: 56, height: 56 }} {...stringAvatar(name)}>
                {name[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" fontWeight={500} fontSize={24}>
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight={500}
                fontSize={20}
                color={'GrayText'}
              >
                {number}
              </Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
