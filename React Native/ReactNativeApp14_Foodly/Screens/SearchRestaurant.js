/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Container from '../Abstracts/Container';
import Input from '../Abstracts/TextInput';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import Search from '../Svg/Search';
import {Colors, FontSize} from '../Theme';
import StatusBar from './../Modules/StatusBar';

const cardSize = Scale(375, 160, 198);
const cardImgSize = Scale(375, 160, 140);
const SearchRestaurant = ({navigation, route}) => {
  const items = useSelector(state => state.resturant);
  return (
    <>
      <StatusBar />
      <Container paddingVertical={0}>
        <View>
          <Text style={{fontSize: FontSize.H2, color: Colors.black}}>
            Search
          </Text>
        </View>
        <Input
          width={'100%'}
          placeholder={'Search on foodly...'}
          Leading_icon={Search}
          leadingsize={Container.paddingsize.WIDTH}
          fontSize={FontSize.Body}
          paddingVertical={0}
          style={{marginVertical: Container.paddingsize.WIDTH}}
        />
        <Text
          style={{
            color: Colors.black,
            fontSize: FontSize.Body,
            marginBottom: 4,
          }}>
          Top Restaurants
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row',
              marginVertical: Container.paddingsize.WIDTH / 2,
            }}>
            {items.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  size={cardSize}
                  imgSize={cardImgSize}
                  image={item.image}
                  style={{
                    marginVertical: Container.paddingsize.WIDTH * 0.2,
                  }}
                  title={item.title}
                  State={item.priceRange}
                  State2={item.State}
                  onPress={() =>
                    navigation.navigate('SearchCategory', {id: item.id})
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default SearchRestaurant;
