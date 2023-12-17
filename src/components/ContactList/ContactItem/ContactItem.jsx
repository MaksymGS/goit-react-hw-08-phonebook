import { DeleteButton, ListItem, Number } from './ContactItem.styled';
import { AiFillCloseCircle } from 'react-icons/ai';
import { deleteContact } from 'redux/fetchingData';
import { useDispatch} from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  const onDelete = contactId => {
    return dispatch(
      deleteContact(contactId)
    );
  };
  return (
    <ListItem>
      <p>{name} :</p>
      <Number>{number}</Number>
      <DeleteButton onClick={() => onDelete(id)}>
        <AiFillCloseCircle size={18} />
      </DeleteButton>
    </ListItem>
  );
};
