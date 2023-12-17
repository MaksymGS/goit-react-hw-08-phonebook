import React, { useEffect } from 'react';
import Notiflix from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { ContactItem } from './ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/fetchingData';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const { isLoading, error } = useSelector(state => state.contacts);
  const getfilteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    Notiflix.Notify.failure(error);
  }

  return (
    <>
      <ul>
        {getfilteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#16437e"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </>
  );
};
