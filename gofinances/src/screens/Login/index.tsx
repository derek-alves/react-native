import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import {
  Container,
  MainWrapper,
  Logo,
  InputsSection,
  Input,
  ButtonInputsWrapper,
  ButtonLogin,
  ButtonCad,
  SocialButtonsSection,
  TitleSocialMedia,
  ButtonSocialMediaWrapper,
  ButtonSocialMedia,
  ButtonTextBlack,
  ButtonText,
  TextInputSection,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <MainWrapper>
        <Logo source={require("../../global/assets/Logo_Drope_png.png")} />
        <InputsSection>
          <TextInputSection>Faça o login na sua conta</TextInputSection>
          <Input>E-mail</Input>
          <Input>Senha</Input>
          <ButtonInputsWrapper>
            <ButtonLogin onPress={() => {}}>
              <ButtonText>Entrar</ButtonText>
            </ButtonLogin>
            <ButtonCad onPress={() => {}}>
              <ButtonTextBlack>Cadastrar-se</ButtonTextBlack>
            </ButtonCad>
          </ButtonInputsWrapper>
        </InputsSection>

        <SocialButtonsSection>
          <TitleSocialMedia>Cadastre-se tambem com</TitleSocialMedia>
          <ButtonSocialMediaWrapper>
            <ButtonSocialMedia onPress={() => {}}>
              <AntDesign name="google" size={35} />
            </ButtonSocialMedia>
            <ButtonSocialMedia onPress={() => {}}>
              <FontAwesome name="facebook" size={35} />
            </ButtonSocialMedia>
            <ButtonSocialMedia onPress={() => {}}>
              <AntDesign name="twitter" size={35} />
            </ButtonSocialMedia>
          </ButtonSocialMediaWrapper>
        </SocialButtonsSection>
      </MainWrapper>
    </Container>
  );
};

export default Login;
