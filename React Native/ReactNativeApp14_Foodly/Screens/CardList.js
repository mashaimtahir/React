/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import Container from '../Abstracts/Container';
import Scale from '../Function/Scale';
import List from '../Modules/List';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {FontSize} from '../Theme';

const imgSize = Scale(375, 40, 34);
const CardList = ({navigation}) => {
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];
  return (
    <Container paddingVertical={FontSize.Caption * 0.6}>
      <StatusBar
        text={'Payment Methods'}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
      />
      <View style={{paddingTop: imgSize.HEIGHT * 0.3}}>
        <List
          text={'PayPal'}
          description={'Default Payment'}
          Leading={
            <View
              style={{borderRadius: imgSize.WIDTH * 0.2, overflow: 'hidden'}}>
              <Image
                source={{uri: imgs[1]}}
                style={{width: imgSize.WIDTH, height: imgSize.HEIGHT}}
              />
            </View>
          }
        />
        <List
          text={'PayPal'}
          description={'Default Payment'}
          Leading={
            <View
              style={{borderRadius: imgSize.WIDTH * 0.2, overflow: 'hidden'}}>
              <Image
                source={{uri: imgs[1]}}
                style={{width: imgSize.WIDTH, height: imgSize.HEIGHT}}
              />
            </View>
          }
        />
        <List
          text={'PayPal'}
          description={'Default Payment'}
          Leading={
            <View
              style={{borderRadius: imgSize.WIDTH * 0.2, overflow: 'hidden'}}>
              <Image
                source={{uri: imgs[1]}}
                style={{width: imgSize.WIDTH, height: imgSize.HEIGHT}}
              />
            </View>
          }
        />
      </View>
      <></>
    </Container>
  );
};

export default CardList;
