import React from 'react';
import {StatusBar, View} from 'react-native';
import Container from '../Abstract Component/Container';
import ProfileHead from '../Components/ProfileHead';

const Profile = ({navigation, route}) => {
  return (
    <Container>
      <View style={{height: StatusBar.currentHeight}} />
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <ProfileHead own={false} navigation={navigation} route={route} />
    </Container>
  );
};

export default Profile;
