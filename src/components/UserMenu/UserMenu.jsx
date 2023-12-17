import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/fetchingAuth';
import { Button, UserName, WrapperMenu } from './UserMenu.styled';
import { MdLogout } from "react-icons/md";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperMenu>
      <UserName>{user.email}</UserName>
      <Button  type="button" onClick={() => dispatch(logOut())}>
      <MdLogout size={24} stroke='blue'/>
      </Button>
    </WrapperMenu>
  );
};
