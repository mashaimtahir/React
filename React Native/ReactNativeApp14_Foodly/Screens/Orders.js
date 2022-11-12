/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Container from '../Abstracts/Container';
import DetailCard from '../Modules/DetailCard';
import StatusBar from '../Modules/StatusBar';
import {FontSize} from '../Theme';

const Orders = () => {
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];
  const cardItems = [
    {
      img: imgs[0],
      title: "McDonald's",
      state: 'Chinese',
      priceRange: '$$',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      price: 7.4,
    },
    {
      img: imgs[1],
      title: "McDonald's",
      state: 'Chinese',
      priceRange: '$$',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      price: 7.4,
    },
  ];
  const details = [
    {eventTitle: 'UPCOMING ORDERS', cardItems},
    {eventTitle: 'PAST ORDERS', cardItems},
  ];
  return (
    <Container>
      <StatusBar text={'Yours Orders'} />
      {details.map((items, index) => {
        return (
          <View key={index}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: FontSize.Caption,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: FontSize.Body}}>{items.eventTitle}</Text>
              <Text style={{fontSize: FontSize.Caption}}>CLEAR ALL</Text>
            </View>
            {items.cardItems.map((item, key) => {
              return (
                <View
                  key={key}
                  style={{paddingVertical: FontSize.Caption * 0.5}}>
                  <DetailCard
                    title={item.title}
                    price={item.price}
                    priceRange={item.priceRange}
                    state={item.state}
                    subtitle={item.subtitle}
                    img={item.img}
                  />
                </View>
              );
            })}
          </View>
        );
      })}
    </Container>
  );
};

export default Orders;
