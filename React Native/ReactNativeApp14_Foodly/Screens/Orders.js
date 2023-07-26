/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Text, View} from 'react-native';
import Container from '../Abstracts/Container';
import DetailCard from '../Modules/DetailCard';
import StatusBar from '../Modules/StatusBar';
import {FontSize} from '../Theme';

const Orders = () => {
  const cardItems_upcoming = useSelector(state =>
    state.resturant.filter(item => item.status === 'pending'),
  );
  const cardItems_paid = useSelector(state =>
    state.resturant.filter(item => item.status === 'paid'),
  );
  const details = [
    {eventTitle: 'UPCOMING ORDERS', cardItems: cardItems_upcoming},
    {eventTitle: 'PAST ORDERS', cardItems: cardItems_paid},
  ];
  return (
    <Container>
      <StatusBar text={'Yours Orders'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {details.map((items, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: FontSize.Caption,
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: FontSize.Body}}>
                  {items.eventTitle}
                </Text>
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
                      state={item.State}
                      subtitle={item.subtitle}
                      img={item.image}
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Orders;
