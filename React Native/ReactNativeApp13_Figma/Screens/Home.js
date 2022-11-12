import React from 'react';
import {StatusBar, View} from 'react-native';
import HomeBody from '../Components/HomeBody';
import HomeHead from '../Components/HomeHead';
import Button from '../Abstract Component/Button';
import WhatsApp from '../Svg/WhatsApp';
import CopyLink from '../Svg/CopyLink';
import FacebookIcon from '../Svg/FacebookIcon';

const Home = ({navigation, route}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={{ backgroundColor: '#fff'}}>
        <HomeHead navigation={navigation} route={route} />
      </View>
      <HomeBody navigation={navigation} route={route} />
    </>
  );
};

export default Home;
