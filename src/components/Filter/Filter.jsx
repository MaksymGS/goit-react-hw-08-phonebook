import React from 'react';
import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        name="filter"
        onChange={evt => {
          dispatch(setFilterValue(evt.target.value));
        }}
        placeholder="Filter by name..."
      />
    </>
  );
};
