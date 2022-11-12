import React, {useState, useRef} from 'react';
import {View, StatusBar, Animated} from 'react-native';
import Container from '../Abstract Component/Container';
import EventHead from '../Components/EventHead';
import EventBody from '../Components/EventBody';
import Eventdetails from '../Components/EventDetails';

const EventDetail = ({navigation, route}) => {
  const [animate, setAnimate] = useState(true);
  const [animationValue, setAnimationValue] = useState(0);
  const scroll = useRef(new Animated.Value(0)).current;
  // console.log(animate);

  const scrollingValueNeed = scrollValue => {
    // return scrollValue
    if (scrollValue) {
      console.log(scrollValue);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Eventdetails navigation={navigation} route={route} />
      {/* <EventHead
        navigation={navigation}
        route={route}
        animate={animate}
        animationValue={animationValue}
        scroll={scroll}
        scrollingValueNeed={scrollingValueNeed}
      />
      <EventBody
        animation={setAnimate}
        animationValue={setAnimationValue}
        scrollingValueNeed={scrollingValueNeed}
        ref={scroll}
      /> */}
    </>
  );
};

export default EventDetail;
