import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'components/atoms';
import { login } from 'lib/services/auth/auth.service';
import { useStore } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
import {
  StyledBody,
  StyledContainer,
  StyledFormContainer,
  StyledForm,
  StyledSocialContainer,
  StyledRoundButton,
  StyledInput,
  StyledOverlayContainer,
  StyledOverlay,
  StyledOverlayLeft,
  StyledOverlayRight,
  StyledButton,
} from './Auth.styled';

export const Auth = observer(() => {
  const [signIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();
  const { authState, fetchUser } = useStore('userStore');

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const urlRedirect = router.query.redirect as string;

  const routerPush = () => router.push(urlRedirect || '/contacts');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await login(formData);
      setCookie(null, 'user', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      await fetchUser();
      routerPush();
    } catch (error) {
      console.log({ error });
    }
  };

  if (authState.isAuth) routerPush();

  return (
    <StyledBody>
      <StyledContainer>
        <StyledFormContainer signIn={signIn}>
          {signIn ? (
            <StyledForm onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <StyledSocialContainer>
                <StyledRoundButton icon={faFacebookF} round outline color="primary" />
                <StyledRoundButton icon={faGoogle} round outline color="primary" />
              </StyledSocialContainer>
              <StyledInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <StyledInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <Button color="primary" round block>
                Sign In
              </Button>
            </StyledForm>
          ) : (
            <StyledForm>
              <h1>Create Account</h1>
              <StyledSocialContainer>
                <StyledRoundButton icon={faFacebookF} round outline color="primary" />
                <StyledRoundButton icon={faGoogle} round outline color="primary" />
              </StyledSocialContainer>
              <StyledInput type="text" placeholder="Name" />
              <StyledInput type="email" placeholder="Email" />
              <StyledInput type="password" placeholder="Password" />
              <Button color="primary" round block>
                Sign Up
              </Button>
            </StyledForm>
          )}
        </StyledFormContainer>
        <StyledOverlayContainer signIn={signIn}>
          <StyledOverlay signIn={signIn}>
            <StyledOverlayLeft signIn={signIn}>
              <h1>Welcome Back!</h1>
              <p>
                I have already account,{' '}
                <StyledButton onClick={() => setSignIn(true)}>Sign In</StyledButton>
              </p>
            </StyledOverlayLeft>
            <StyledOverlayRight signIn={signIn}>
              <h1>Data Warehouse</h1>
              {/* <p>
                I don't have account yet,{' '}
                <StyledButton onClick={() => setSignIn(false)}>Create Account</StyledButton>
              </p> */}
            </StyledOverlayRight>
          </StyledOverlay>
        </StyledOverlayContainer>
      </StyledContainer>
    </StyledBody>
  );
});
