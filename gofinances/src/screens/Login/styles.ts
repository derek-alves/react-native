import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const MainWrapper = styled.View`

    height:  ${RFPercentage(80)}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.Image`
  width:  ${RFPercentage(45)}px;
   height: 70px;
   
`;
 
export const InputsSection = styled.View`
display: flex;
padding: 10px 30px;
width: 100%;
height: ${RFPercentage(35)}px;
`;

export const TextInputSection = styled.Text`
 font-size:  ${RFPercentage(2.5)}px;
 font-family: ${({theme})=>theme.fonts.poppinsBold};
 margin-bottom: 15px;
`;



export const Input = styled.TextInput`
border: 1px solid rgba(0, 0, 0, .3) ;
border-radius: 10px;
margin-bottom: 30px;
padding: 5px 10px;

`;

export const ButtonInputsWrapper=  styled.View`
display:flex;
justify-content: center;
flex-direction: row;

`;

export const ButtonLogin = styled.TouchableOpacity`
  width:${RFPercentage(20)}px;
  height: 35px;
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size:  ${RFPercentage(2.4)}px;
  text-align: center;
  color: white;
  font-family: ${({theme})=>theme.fonts.poppinsMedium};
`;

export const ButtonTextBlack = styled.Text`
  font-size: ${RFPercentage(2.2)}px;
  text-align: center;
  color: black;
   font-family: ${({theme})=>theme.fonts.poppinsMedium};
`;

export const ButtonCad =  styled.TouchableOpacity`
  width:${RFPercentage(20)}px;
  height: 35px;
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  background-color: white;
`;

export const SocialButtonsSection = styled.View`
 display: flex;
 align-items: center;
`;

export const TitleSocialMedia = styled.Text`
font-size: ${RFPercentage(2.2)}px;
 font-family: ${({theme})=> theme.fonts.poppinsMedium};
`;


export const ButtonSocialMedia = styled.TouchableOpacity`
align-items: center;
border: 1px solid rgba(0, 0, 0, .2) ;
border-radius: 10px;
width: ${RFPercentage(16)}px;
padding: 5px 0 ;
`;
export const ButtonSocialMediaWrapper = styled.View`
display: flex;
width: 100%;
flex-direction: row;
margin-top: 10px;
justify-content: space-evenly;
`;


