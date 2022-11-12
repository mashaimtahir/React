/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import Container from '../Abstracts/Container';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';

const cardSize = Scale(375, 335, 282);
const imgSize = Scale(375, 335, 185);
const BrowseFoods = ({navigation}) => {
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];

  const items = [
    {
      img: imgs,
      title: 'Rich Table',
      Price: '$$',
      State: 'Chinese',
      State2: 'American',
      Food: 'Deshi Food',
      ratingstar: 3.5,
      rating: 250,
      time: 300,
      cost: 'Free',
    },
    {
      img: imgs,
      title: 'Rich Table',
      Price: '$$',
      State: 'Chinese',
      State2: 'American',
      Food: 'Deshi Food',
      ratingstar: 3.5,
      rating: 250,
      time: 300,
      cost: 'Free',
    },
    {
      img: imgs,
      title: 'Rich Table',
      Price: '$$',
      State: 'Chinese',
      State2: 'American',
      Food: 'Deshi Food',
      ratingstar: 3.5,
      rating: 250,
      time: 300,
      cost: 'Free',
    },
  ];

  const paddingsize = Scale(375, 20, 20);
  return (
    <View>
      <StatusBar
        style={{
          paddingVertical: FontSize.Body,
          paddingHorizontal: paddingsize.WIDTH,
        }}
        text={'Browse Foods'}
        textStyle={{fontWeight: '600'}}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.black + '2f',
                alignItems: 'center',
                marginBottom: FontSize.Body,
              }}>
              <CategoryCard
                size={cardSize}
                imgSize={imgSize}
                image={item.img}
                title={item.title}
                Price={item.Price}
                State={item.State}
                State2={item.State2}
                Food={item.Food}
                ratingstar={item.ratingstar}
                rating={item.rating}
                time={item.time}
                cost={item.cost}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BrowseFoods;
