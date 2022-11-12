import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {View, Dimensions, StyleSheet, Animated, ScrollView} from 'react-native';
import Button from './../Abstract Component/Button';
import EventCard from './EventCard';
import Filter from './../Svg/Filter';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FilterSheet from './FilterSheet';

const MapBottom = ({
  refMarker,
  navigation,
  route,
  state,
  customIndexToRender,
}) => {
  const ref = useRef();
  const refScroll = useRef();
  const ITEM_Size = Dimensions.get('screen').width * 0.9;
  const spacing = Dimensions.get('screen').width * 0.1;

  const scollToItem = () => {
    if (refScroll.current) {
      refScroll.current.scrollToIndex({index: customIndexToRender});
    }
  };

  useEffect(() => {
    scollToItem();
  }, [customIndexToRender]);

  return (
    <>
      <View style={styles.head}>
        <Button
          style={styles.end}
          width={null}
          height={null}
          borderRadius={100}
          TextIcon={Filter}
          texticonsize={23}
          texticoncolor={'#5669FF'}
          paddingHorizontal={6}
          paddingVertical={6}
          backgroundColor={'white'}
          onPress={() => ref.current.open()}
        />
        <Animated.FlatList
          onScroll={event => {
            let index = Math.round(
              (event.nativeEvent.contentOffset.x + 10) / ITEM_Size,
            );
            setTimeout(
              () =>
                refMarker.current.animateToRegion(
                  {
                    longitude: state[index].longitude,
                    latitude: state[index].latitude,
                    longitudeDelta: 10,
                    latitudeDelta: 10,
                  },
                  700,
                ),
              200,
            );
          }}
          ref={refScroll}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={state}
          // style={{paddingLeft: 15}}
          ItemSeparatorComponent={() => <View style={{padding: 5}} />}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={(item, key) => {
            return (
              <List refMarker={refMarker} key={item.index} data={item.item} />
            );
          }}
          snapToInterval={ITEM_Size * 1.01}
        />
      </View>
      <FilterSheet refRBSheet={ref} />
    </>
  );
};

const List = ({data, key, refMarker}) => {
  return (
    <TouchableWithoutFeedback
      key={key}
      onPress={() => {
        refMarker.current.animateToRegion(
          {
            longitude: data.longitude,
            latitude: data.latitude,
            longitudeDelta: 10,
            latitudeDelta: 10,
          },
          400,
        );
      }}>
      <View style={styles.btn}>
        <EventCard
          img={data.img}
          date={data.date}
          location={data.location}
          title={data.title}
          bookmark={true}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  btncontainer: {
    marginTop: 10,
    marginLeft: 18,
  },
  btn: {
    width: Dimensions.get('window').width - 40,
    // marginRight: 9,
  },
  end: {
    right: 15,
    alignSelf: 'flex-end',
  },
  scroll: {
    marginLeft: 18,
  },
});

export default MapBottom;
