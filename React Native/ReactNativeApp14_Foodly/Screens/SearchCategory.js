/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StatusBar} from 'react-native';
import Container from '../Abstracts/Container';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import {Colors, FontSize} from '../Theme';
import Search from './../Svg/Search';

const cardSize = Scale(375, 160, 160);
const SearchCategory = () => {
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];
  const data = [
    {
      name: 'Fast Food',
      img: imgs[0],
    },
    {
      name: 'Fast Food',
      img: imgs[1],
    },
    {
      name: 'Fast Food',
      img: imgs[5],
    },
    {
      name: 'Fast Food',
      img: imgs[4],
    },
    {
      name: 'Fast Food',
      img: imgs[2],
    },
    {
      name: 'Fast Food',
      img: imgs[3],
    },
  ];
  return (
    <Container paddingVertical={StatusBar.currentHeight}>
      <StatusBar
        backgroundColor={Colors.lightgrey}
        barStyle={'dark-content'}
        translucent
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // paddingTop: StatusBar.currentHeight,
          paddingVertical: StatusBar.currentHeight * 0.7,
        }}>
        <Search />
        <Text style={{fontSize: FontSize.H3, paddingLeft: FontSize.Caption}}>
          Search
        </Text>
      </View>
      <ScrollView style={{flex: 1, height: '100%'}}>
        <Text
          style={{
            fontSize: FontSize.Body,
            fontWeight: '500',
            paddingTop: FontSize.Caption * 0.5,
            paddingBottom: FontSize.Caption * 0.1,
          }}>
          Top Categories
        </Text>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {data &&
            data.map((item, index) => (
              <CategoryCard
                key={index}
                style={{marginVertical: FontSize.Caption * 0.65}}
                size={cardSize}
                image={item.img}
                imgSize={cardSize}
                FontSize={FontSize.Body}
                overlayColor={Colors.black + '2f'}
                overlayText={item.name}
              />
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default SearchCategory;
