import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import Scale from '../Function/Scale';
import CategoryCard from '../Modules/CategoryCard';
import MainStatusBar from '../Modules/MainStatusBr';
import {Colors} from '../Theme';

const cardSize = Scale(375, 160, 288);
const cardImgSize = Scale(375, 160, 220);
const cardSize2 = Scale(375, 160, 348);
const cardImgSize2 = Scale(375, 160, 280);
const HomePage = ({navigation}) => {
  let data = useSelector(state => state.resturant);
  return (
    <View style={{paddingTop: StatusBar.currentHeight}}>
      <StatusBar translucent />
      <MainStatusBar />
      <ScrollView>
        <View style={[styles.flex, styles.row, styles.justifyevenly]}>
          <View style={{paddingBottom: cardImgSize.HEIGHT * 0.2}}>
            {data.map((item, key) => {
              return (
                (key % 2 === 0 || key % 11 === 0) && (
                  <CategoryCard
                    key={item.id}
                    title={item.title}
                    time={item.time}
                    ratingstar={item.ratingstar}
                    cost={item.deliverycost}
                    State={item.State}
                    State2={item.State2}
                    size={
                      key % 2 === 0 || key % 11 === 0 ? cardSize : cardSize2
                    }
                    imgSize={
                      key % 2 === 0 || key % 11 === 0
                        ? cardImgSize
                        : cardImgSize2
                    }
                    image={item.image}
                    overlayColor={Colors.black + '4a'}
                    borderRadius={12}
                    detailInCard
                    onPress={() =>
                      navigation.navigate('Restaurant', {title: item.title})
                    }
                  />
                )
              );
            })}
          </View>
          <View style={{paddingBottom: cardImgSize2.HEIGHT * 0.2}}>
            {data.map((item, key) => {
              return (
                key % 2 !== 0 &&
                key % 11 !== 0 && (
                  <CategoryCard
                    key={item.id}
                    title={item.title}
                    time={item.time}
                    ratingstar={item.ratingstar}
                    cost={item.deliverycost}
                    State={item.State}
                    size={key % 2 === 0 ? cardSize : cardSize2}
                    imgSize={key % 2 === 0 ? cardImgSize : cardImgSize2}
                    image={item.image}
                    overlayColor={Colors.black + '4a'}
                    borderRadius={12}
                    detailInCard
                    onPress={() =>
                      navigation.navigate('Restaurant', {title: item.title})
                    }
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
