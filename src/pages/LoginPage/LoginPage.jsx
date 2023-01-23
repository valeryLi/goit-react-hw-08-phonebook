import { LoginForm } from 'components/LoginForm/LoginForm';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

export const LoginPage = () => {
  return (
    <>
      <UserAuthMenu />
      <LoginForm />
    </>
  );
};
