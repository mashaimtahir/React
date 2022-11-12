import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import Scale from './../Function/Scale';
import {Colors} from '../Theme';
import Forward from './../Svg/Forward';
import Backward from '../Svg/Backward';

const indicatorsize = Scale(375, 8, 5);
const indicatorspacing = Scale(375, 20, 20);
const Pager = ({images, containerStyle, max = 5}) => {
  const ref = useRef();
  const [position, setPosition] = useState(0);
  return (
    <View style={[styles.container, styles.flex, containerStyle]}>
      <PagerView
        ref={ref}
        style={styles.flex}
        initialPage={0}
        onPageSelected={event => setPosition(event.nativeEvent.position)}>
        {images &&
          images.slice(0, max).map((data, key) => {
            return (
              <View style={styles.flex} key={key}>
                <Image style={styles.flex} source={{uri: data}} />
              </View>
            );
          })}
      </PagerView>
      <View style={[styles.minicontainer, styles.row]}>
        {images.slice(0, max).map((data, key) => {
          return (
            <View
              key={key}
              style={[
                styles.indicatorsize,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  opacity: key === position ? 1 : 0.3,
                },
              ]}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          ref.current.setPage(
            position === 0 ? images.slice(0, max).length - 1 : position - 1,
          );
        }}>
        <Backward color={'white'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.right]}
        onPress={() => {
          ref.current.setPage(
            position === images.slice(0, max).length - 1 ? 0 : position + 1,
          );
        }}>
        <Forward color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
  right: {
    right: 0,
  },
  minicontainer: {
    marginRight: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: indicatorspacing.HEIGHT,
    right: indicatorsize.WIDTH,
    zIndex: 10,
  },
  indicatorsize: {
    width: indicatorsize.WIDTH,
    height: indicatorsize.HEIGHT,
    marginRight: indicatorsize.WIDTH,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  btn: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#3131316d',
  },
});

export default Pager;
