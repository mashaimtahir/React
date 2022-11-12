import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  StatusBar,
  NativeModules,
  LayoutAnimation,
} from 'react-native';
import Button from '../Abstract Component/Button';
import BackArrow from '../Svg/BackArrow';
import Bookmark from './../Svg/Bookmarkwhitesolid';
import InviteSheet from './InviteSheet';
import Scale from '../Function/Scale';

const imgSize = Scale(375, 375, 221);
const btnSize = Scale(375, 67, 28);
const fontSize = Dimensions.get('window').width * 0.06;
const fontSize2 = Dimensions.get('window').width * 0.04;
const avatarsize = Scale(375, 24, 24);
const avatarcontainersize = Scale(375, 56, 24);
const BookmarkSize = Scale(375, 36, 36);
const BackArrowSize = Scale(375, 22, 22);
let bottomContainerSize = Scale(375, 295, 60);
const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const EventHead = ({
  navigation,
  route,
  animate,
  animationValue,
  scrollingValueNeed,
  scroll,
}) => {
  const myScrolling = scrollingValueNeed();
  console.log(myScrolling);
  const ref = useRef();
  const refstickybar = useRef(new Animated.Value(100)).current;
  const [width, setWidth] = useState(bottomContainerSize.WIDTH);
  const [height, setHeight] = useState(imgSize.HEIGHT);
  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const [barstyle, setBarstyle] = useState('light-content');

  const sharp = () => {
    console.log('Expansion');
    Animated.timing(refstickybar, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const rounded = () => {
    console.log('Shrink');
    Animated.timing(refstickybar, {
      toValue: 100,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const backgroundInter = refstickybar.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(255, 255, 255, 1)', 'rgba(86, 105, 255, 0)'],
    extrapolate: 'clamp',
  });

  const scrollingEffect = scroll.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  // const ScaleX = myScrolling.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['rgba(255, 255, 255, 1)', 'rgba(86, 105, 255, 0)'],
  //   extrapolate: 'clamp',
  // });

  const backgroundOuter = refstickybar.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(60, 60, 60, 1)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    // console.log(animate);
    console.log('scrollingEffect');
    console.log(scrollingEffect);
    console.log('Finish');
    return () => {
      LayoutAnimation.linear();
      // console.log('Animation');
      // console.log(animationValue);
      // refstickybar.current = animationValue;
      // console.log(refstickybar);
      // console.log(backgroundInter);
      setWidth(Scale(375, animationValue, 100));
      if (animate) {
        sharp();
        setWidth(Scale(375, 375, 299).WIDTH);
        setHeight(Scale(375, 375, 100).HEIGHT);
        setBarstyle('dark-content');
        // setBorderRadius(0);
      } else {
        rounded();
        setWidth(Scale(375, 295, 299).WIDTH);
        setHeight(Scale(375, 375, 221).HEIGHT);
        setBarstyle('light-content');
        // setBorderRadius(100);
      }
    };
  }, [animate]);
  return (
    <Animated.View>
      <AnimatedStatusBar animated={true} translucent barStyle={barstyle} />
      <ImageBackground
        style={[{width: imgSize.WIDTH, height: height}]}
        source={require('./../Assets/pexels-sebastian-ervi-1763075.jpg')}>
        <Animated.View style={{flex: 1, backgroundColor: backgroundInter}} />
      </ImageBackground>
      <View style={[styles.statusbar, styles.row]}>
        <Button
          onPress={() => navigation.goBack()}
          TextIcon={BackArrow}
          width={null}
          texticoncolor={'white'}
          texticonsize={BackArrowSize.WIDTH}
        />
        <Animated.Text style={[styles.statusbartext, {color: backgroundOuter}]}>
          Event Details
        </Animated.Text>
        <View style={styles.spacing} />
        <Bookmark
          width={BookmarkSize.WIDTH}
          height={BookmarkSize.HEIGHT}
          color={'white'}
        />
      </View>
      <Animated.View
        // ref={refstickybar}
        style={[
          styles.bottomcontainer,
          styles.row,
          styles.center,
          {
            width: width,
            height: bottomContainerSize.HEIGHT,
            borderRadius: refstickybar,
            bottom: -35,
            elevation: refstickybar,
          },
        ]}>
        <View style={[styles.row, styles.smimgcontainer]}>
          <View style={[styles.rowreverse, styles.avatars]}>
            <View style={[styles.avatarcontainer1, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
            <View style={[styles.avatarcontainer2, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
            <View style={[styles.avatarcontainer3, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
          </View>
          <View style={[styles.center]}>
            <Text style={[styles.bottomtext, styles.center]}>+20 Going</Text>
          </View>
        </View>
        <View style={styles.flexspace} />
        <View style={[styles.center, styles.btnconatainer]}>
          <Button
            text={'invite'}
            width={btnSize.WIDTH}
            height={btnSize.HEIGHT}
            paddingVertical={0}
            fontSize={fontSize2}
            borderRadius={fontSize2 / 2}
            backgroundColor={'#5669FF'}
            color={'#fff'}
            onPress={() => {
              // console.log(refstickybar);
              // console.log(refstickybar._value);
              LayoutAnimation.linear();
              // if (Dimensions.get('window').width - 10 > width) {
              //   sharp();
              //   setWidth(Scale(375, 375, 299).WIDTH);
              //   setHeight(Scale(375, 375, 100).HEIGHT);
              //   setBarstyle('dark-content');
              //   // setBorderRadius(0);
              // } else {
              //   rounded();
              //   setWidth(Scale(375, 295, 299).WIDTH);
              //   setHeight(Scale(375, 375, 221).HEIGHT);
              //   setBarstyle('light-content');
              //   // setBorderRadius(100);
              // }
              // console.log(width);
              // for (let x in refstickybar) {
              //   console.log(x);
              //   console.log(refstickybar[x]);
              // }
              // if (refstickybar['_value'] < 300) {
              //   expansion();
              // } else {
              //   shrink();
              // }
              // ref.current.open();
            }}
          />
        </View>
      </Animated.View>
      <InviteSheet refRBSheet={ref} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  // img: {
  //   width: imgSize.WIDTH,
  //   height: imgSize.HEIGHT,
  // },
  avatars: {
    width: avatarcontainersize.WIDTH,
    justifyContent: 'center',
  },
  avatar: {
    width: avatarsize.WIDTH,
    height: avatarsize.HEIGHT,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
  },
  avatarcontainer: {
    borderRadius: 23,
    justifyContent: 'center',
  },
  avatarcontainer1: {},
  avatarcontainer2: {
    left: -avatarsize.WIDTH / 3,
    zIndex: -2,
  },
  avatarcontainer3: {
    left: -(avatarsize.WIDTH * 2) / 3,
    zIndex: -3,
  },
  rowreverse: {
    flexDirection: 'row',
  },
  smimgcontainer: {
    paddingLeft: avatarsize.WIDTH,
    paddingVertical: 12,
  },
  btnconatainer: {
    paddingRight: 20,
  },
  bottomcontainer: {
    position: 'absolute',
    // bottom: -29,
    // width: bottomContainerSize.WIDTH,
    // height: bottomContainerSize.HEIGHT,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 12,
    zIndex: 100,
    // justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  flexspace: {
    flex: 1,
  },
  spacing: {
    padding: 5,
  },
  statusbar: {
    marginTop: 40,
    paddingHorizontal: 15,
    position: 'absolute',
  },
  statusbartext: {
    flex: 1,
    fontSize: fontSize,
    paddingHorizontal: 10,
    color: '#fff',
  },
  bottomtext: {
    fontSize: fontSize2,
    color: '#5669FF',
    fontWeight: '500',
    // marginLeft: fontSize,
  },
});

export default EventHead;
