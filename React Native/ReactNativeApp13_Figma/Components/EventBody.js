import React, {forwardRef, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import Container from '../Abstract Component/Container';
import EventDetailCard from './EventDetailCard';
import Button from '../Abstract Component/Button';
import AboutEvent from './EventAbout';
import Calender from './../Svg/Calender';
import SolidLocationShadow from './../Svg/SolidLocationShadow';
import ForwardArrow from '../Svg/ForwardArrow';
import LinearGradient from 'react-native-linear-gradient';
import Scale from '../Function/Scale';

const titlefontSize = Dimensions.get('window').width * 0.08;
const subtitlefontsize = Dimensions.get('window').width * 0.06;
const fontsize = Dimensions.get('window').width * 0.04;
const blursize = Scale(375, 375, 181);
const btnsize = Scale(375, 271, 58);
const tailiconsize = Scale(375, 30, 30);

const EventBody = forwardRef(
  ({animation, animationValue, scrollingValueNeed}, ref) => {
    const scrolling = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      scrollingValueNeed(scrolling);
    }, [scrolling]);

    return (
      <Container>
        <View style={styles.topspacing} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          // ref={scroll}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: ref } } }],
            {useNativeDriver: false},
            // {
            //   useNativeDriver: true,
            // },
          )}
          // onScroll={event => {
          //   console.log(event.nativeEvent.contentOffset.y);
          //   event.nativeEvent.contentOffset.y < 80
          //     ? animationValue(event.nativeEvent.contentOffset.y)
          //     : 80;
          //   if (event.nativeEvent.contentOffset.y < 9) {
          //     animation(true);
          //   } else {
          //     animation(false);
          //   }
          // }}
        >
          <Text style={styles.title}>International Brand Music Concert</Text>
          <EventDetailCard
            Icon={Calender}
            title={'14 December, 2021'}
            subtitle={'Tuesday, 4:00PM-9:00PM'}
          />
          <EventDetailCard
            Icon={SolidLocationShadow}
            title={'14 December, 2021'}
            subtitle={'Tuesday, 4:00PM-9:00PM'}
          />
          <EventDetailCard
            Icon={Calender}
            image_addr={require('./../Assets/pexels-sebastian-ervi-1763075.jpg')}
            title={'Ashfak Sayem'}
            subtitle={'Organizer'}
            btntext={'Follow'}
            btnPress={() => {}}
          />
          <AboutEvent
            description={
              'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. '
            }
          />
          <View style={styles.topspacing} />
          <View style={styles.topspacing} />
          <View style={styles.topspacing} />
        </Animated.ScrollView>
        {/* <Image blurRadius={10} style={styles.bottombtnblur} /> */}
        <LinearGradient
          pointerEvents={'none'}
          style={[styles.lineargradient, styles.bottombtnblur]}
          colors={['#ffffff03', '#f3f3f365', '#f3f3f3f5', '#f3f3f3ff']}
        />
        <View style={styles.bottombtn}>
          <Button
            text={'Buy Ticket $120'}
            backgroundColor={'#5669FF'}
            color={'white'}
            fontSize={fontsize * 1.2}
            width={btnsize.WIDTH}
            height={btnsize.HEIGHT}
            Tailing_icon={ForwardArrow}
            tailingsize={tailiconsize.WIDTH}
            borderRadius={fontsize}
            paddingVertical={12}
          />
        </View>
      </Container>
    );
  },
);

const styles = StyleSheet.create({
  row: {
    alignSelf: 'center',
  },
  topspacing: {
    padding: 13,
  },
  title: {
    fontSize: titlefontSize,
    color: 'black',
  },
  bottombtn: {
    width: '100%',
    // height: 120,
    // backgroundColor: 'rgba(150,250,250,0.3)',
    // elevation: 10,
    // opacity: 0.8,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  bottombtnblur: {
    width: blursize.WIDTH,
    height: blursize.HEIGHT,
    // backgroundColor: 'rgba(150,250,250,0.3)',
    // elevation: 10,
    // opacity: 0.8,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  lineargradient: {
    backgroundColor: 'transparent',
  },
});

export default EventBody;
