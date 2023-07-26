/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector} from 'react-redux';
import Container from '../Abstracts/Container';
import ValidText from '../Abstracts/ValidText';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import Search from '../Svg/Search';
import DeliveryCost from '../Svg/DeliveryCost';
import DeliveryTime from '../Svg/DeliveryTime';
import Star from './../Svg/Star';
import {Colors, FontSize} from '../Theme';
import Button from '../Abstracts/Button';
import DetailCard from '../Modules/DetailCard';

const cardSize1 = Scale(375, 140, 198);
const cardImgSize1 = Scale(375, 140, 140);
const Restaurant = ({navigation, route}) => {
  const items = useSelector(state =>
    state.resturant.filter(item => item.title === route.params.title),
  );
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const categories = items.map(value => value.category).filter(onlyUnique);
  const featured_items = items.filter(item => item.featured === true);
  const [selected, setSelected] = useState(categories[0]);
  return (
    <>
      <StatusBar
        style={{
          paddingHorizontal: Container.paddingsize.WIDTH,
          marginTop: Container.paddingsize.WIDTH * 0.2,
        }}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
        tailing={<Search color={Colors.black} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container paddingVertical={0}>
          <Text
            style={{
              fontSize: FontSize.H3,
              color: Colors.black,
              paddingVertical: FontSize.Body,
            }}>
            Mayfield Bakery & Cafe
          </Text>
          <Text>
            <ValidText text={items[0].priceRange} />
            {(items[0].priceRange && items[0].State) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={items[0].State} />
            {(items[0].State && items[0].State2) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={items[0].State2} />
            {(items[0].food && items[0].State2) || true ? (
              <Text style={styles.textdot}>{'\t\u25cf\t'}</Text>
            ) : null}
            {/* Working */}
            <ValidText text={items[0].State} />
          </Text>
          <Text>
            <ValidText text={items[0].ratingstar} />
            <View style={{paddingHorizontal: FontSize.Caption}}>
              <Star />
            </View>
            <ValidText
              text={
                items[0].rating !== undefined
                  ? items[0].rating + '+ Ratings'
                  : undefined
              }
            />
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: Container.paddingsize.WIDTH * 0.7,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{paddingHorizontal: Container.paddingsize.WIDTH * 0.4}}>
                <DeliveryCost />
              </View>
              <View>
                <Text>{items[0].deliverycost}</Text>
                <Text>Delivery</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{paddingHorizontal: Container.paddingsize.WIDTH * 0.4}}>
                <DeliveryTime />
              </View>
              <View>
                <Text>{items[0].time}</Text>
                <Text>Delivery</Text>
              </View>
            </View>
            <Button
              text={'TAKE AWAY'}
              fontSize={FontSize.Caption}
              paddingHorizontal={Container.paddingsize.WIDTH * 0.8}
              paddingVertical={Container.paddingsize.WIDTH * 0.4}
              width={null}
              color={Colors.green}
              borderColor={Colors.green}
              borderWidth={1}
            />
          </View>
          <Text
            style={{
              fontSize: FontSize.Subhead,
              fontWeight: '500',
              color: Colors.black,
              paddingVertical: FontSize.Body,
            }}>
            Featured Items
          </Text>
        </Container>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: Container.paddingsize.WIDTH * 0.6,
            }}>
            {featured_items.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  size={cardSize1}
                  imgSize={cardImgSize1}
                  image={item.image}
                  style={{marginHorizontal: Container.paddingsize.WIDTH * 0.4}}
                  title={item.title}
                  State={item.priceRange}
                  State2={item.State}
                  onPress={() => navigation.navigate('AddOrder', {id: item.id})}
                />
              );
            })}
          </View>
        </ScrollView>
        <FlatList
          style={{paddingVertical: Container.paddingsize.WIDTH}}
          showsHorizontalScrollIndicator={false}
          data={categories}
          contentContainerStyle={{
            paddingHorizontal: Container.paddingsize.WIDTH,
          }}
          ItemSeparatorComponent={() => (
            <View style={{paddingLeft: Container.paddingsize.WIDTH * 0.7}} />
          )}
          renderItem={item => (
            <TouchableWithoutFeedback onPress={() => setSelected(item.item)}>
              <Text
                style={{
                  // paddingHorizontal: Container.paddingsize.WIDTH,
                  fontSize: FontSize.H3,
                  color: selected === item.item ? Colors.black : null,
                }}>
                {console.log(item, selected)}
                {item.item}
              </Text>
            </TouchableWithoutFeedback>
          )}
          horizontal
        />
        <Container paddingVertical={0}>
          {items
            .filter(value => value.category === selected)
            .map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    navigation.navigate('AddOrder', {id: item.id})
                  }>
                  <View
                    key={index}
                    style={{paddingVertical: FontSize.Caption * 0.5}}>
                    <DetailCard
                      title={item.name}
                      price={item.price}
                      priceRange={item.priceRange}
                      state={item.State}
                      subtitle={item.subtitle}
                      img={item.image}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
        </Container>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.Caption,
    color: Colors.black + 'c5',
    paddingLeft: Dimensions.get('window').width * 0.02,
    paddingVertical: Dimensions.get('window').width * 0.01,
  },
  textdot: {
    color: Colors.grey + '88',
  },
});

export default Restaurant;
