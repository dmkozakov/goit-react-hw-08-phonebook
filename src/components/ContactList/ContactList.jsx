import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import * as S from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <S.ContactList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              <S.ContactName>{name}</S.ContactName>
              <S.ContactPhone>{number}</S.ContactPhone>
            </div>
            <button
              type="button"
              data-id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </S.ContactList>
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
