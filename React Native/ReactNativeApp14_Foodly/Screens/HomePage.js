import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import MainStatusBar from '../Modules/MainStatusBr';
import {Colors} from '../Theme';

const cardSize = Scale(375, 160, 288);
const cardImgSize = Scale(375, 160, 220);
const cardSize2 = Scale(375, 160, 348);
const cardImgSize2 = Scale(375, 160, 280);
const HomePage = ({navigation}) => {
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
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      time: 25,
      cost: 'free',
      ratingstar: 4.5,
      title: 'McDonalds',
      State: 'America',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
  ];
  return (
    <View>
      <MainStatusBar />
      <ScrollView>
        <View style={[styles.flex, styles.row, styles.justifyevenly]}>
          <View>
            {data.map((item, key) => {
              return (
                key % 2 === 0 && (
                  <CategoryCard
                    key={key}
                    title={item.title}
                    time={item.time}
                    ratingstar={item.ratingstar}
                    cost={item.cost}
                    State={item.State}
                    size={key % 2 === 0 ? cardSize : cardSize2}
                    imgSize={key % 2 === 0 ? cardImgSize : cardImgSize2}
                    image={item.image}
                    overlayColor={Colors.black + '4a'}
                    borderRadius={12}
                    detailInCard
                  />
                )
              );
            })}
          </View>
          <View>
            {data.map((item, key) => {
              return (
                key % 2 !== 0 && (
                  <CategoryCard
                    key={key}
                    title={item.title}
                    time={item.time}
                    ratingstar={item.ratingstar}
                    cost={item.cost}
                    State={item.State}
                    size={key % 2 === 0 ? cardSize : cardSize2}
                    imgSize={key % 2 === 0 ? cardImgSize : cardImgSize2}
                    image={item.image}
                    overlayColor={Colors.black + '4a'}
                    borderRadius={12}
                    detailInCard
                  />
                )
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  aligncenter: {
    alignItems: 'center',
  },
  justifyevenly: {
    justifyContent: 'space-evenly',
  },
  center: {},
});

export default HomePage;
