import React from "react";
import HighLightCard from "../../components/HighLightCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighLightCards,
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/59737946?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
      </HighLightCards>
    </Container>
  );
};

export default Dashboard;
