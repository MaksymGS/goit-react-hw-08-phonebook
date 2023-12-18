import { useAuth } from 'hooks/useAuth';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>{isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}</nav>
  );
};
