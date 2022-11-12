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
import Container from '../Abstract Component/Container';
import AboutEvent from './EventAbout';
import EventDetailCard from './EventDetailCard';
import BackArrow from '../Svg/BackArrow';
import Bookmark from './../Svg/Bookmarkwhitesolid';
import InviteSheet from './InviteSheet';
import Scale from '../Function/Scale';
import Calender from './../Svg/Calender';
import SolidLocationShadow from './../Svg/SolidLocationShadow';
import ForwardArrow from '../Svg/ForwardArrow';
import LinearGradient from 'react-native-linear-gradient';

const fontsize = Dimensions.get('window').width * 0.04;
// const blursize = Scale(375, 375, 181);
const btnsize = Scale(375, 271, 58);
const tailiconsize = Scale(375, 30, 30);
const imgSize = Scale(375, 375, 221);
const btnSize = Scale(375, 67, 28);
const fontSize = Dimensions.get('window').width * 0.06;
const fontSize2 = Dimensions.get('window').width * 0.04;
const avatarsize = Scale(375, 24, 24);
const avatarcontainersize = Scale(375, 56, 24);
const BookmarkSize = Scale(375, 36, 36);
const BackArrowSize = Scale(375, 22, 22);
let bottomContainerSize = Scale(375, 295, 60);
const titlefontSize = Dimensions.get('window').width * 0.08;
const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Eventdetails = ({
  navigation,
  route,
  animate,
  animationValue,
  // scrollingValueNeed,
  scroll,
}) => {
  // const myScrolling = scrollingValueNeed();
  // console.log(myScrolling);
  const ref = useRef();
  const refScroll = useRef(new Animated.Value(0)).current;
  const refstickybar = useRef(new Animated.Value(100)).current;
  const [width, setWidth] = useState(bottomContainerSize.WIDTH);
  const [height, setHeight] = useState(imgSize.HEIGHT);
  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const [barstyle, setBarstyle] = useState('light-content');
  const [whiteblack, setwhiteblack] = useState('#fefefe');

  const blackinterpolation = refScroll.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(253, 253, 253, 1)', 'rgba(20, 20, 20, 1)'],
    extrapolate: 'clamp',
  });

  const whiteinterpolation = refScroll.interpolate({
    inputRange: [0, 100],
    outputRange: ['#ffffff00', '#ffffff'],
    extrapolate: 'clamp',
  });

  const heightref = refScroll.interpolate({
    inputRange: [0, imgSize.HEIGHT / 2],
    outputRange: [imgSize.HEIGHT / 2, 0],
    extrapolate: 'clamp',
  });

  const borderref = refScroll.interpolate({
    inputRange: [0, imgSize.HEIGHT / 2],
    outputRange: [40, 0],
    extrapolate: 'clamp',
  });

  const widthref = refScroll.interpolate({
    inputRange: [0, 110],
    outputRange: [bottomContainerSize.WIDTH, Dimensions.get('screen').width],
    extrapolate: 'clamp',
  });

  return (
    <>
      <AnimatedStatusBar animated={true} translucent barStyle={barstyle} />
      <Animated.Image
        style={[
          {
            width: imgSize.WIDTH,
            height: imgSize.HEIGHT,
            position: 'absolute',
            // transform: [{translateY: heightref}],
          },
        ]}
        source={require('./../Assets/pexels-sebastian-ervi-1763075.jpg')}
      />
      {/* <Animated.View style={{height: heightref}} /> */}
      {/* </Animated.View> */}
      <Animated.View
        style={[
          styles.statusbar,
          styles.row,
          {backgroundColor: whiteinterpolation},
        ]}>
        <Button
          onPress={() => navigation.goBack()}
          TextIcon={BackArrow}
          width={null}
          texticoncolor={whiteblack}
          texticonsize={BackArrowSize.WIDTH}
        />
        <Animated.Text
          style={[styles.statusbartext, {color: blackinterpolation}]}>
          Event Details
        </Animated.Text>
        <View style={styles.spacing} />
        <Bookmark
          width={BookmarkSize.WIDTH}
          height={BookmarkSize.HEIGHT}
          color={whiteblack}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomcontainer,
          styles.row,
          styles.center,
          {
            width: widthref,
            height: bottomContainerSize.HEIGHT,
            borderRadius: borderref,
            // bottom: -35,
            top: heightref,
            // elevation: refstickybar,
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
              ref.current.open();
            }}
          />
        </View>
      </Animated.View>
      <InviteSheet refRBSheet={ref} />
      <Animated.ScrollView
        // style={{backgroundColor: backgroundColor}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: refScroll}}}],
          {useNativeDriver: false},
          // {
          //   useNativeDriver: true,
          // },
        )}
        onMomentumScrollEnd={event => {
          if (event.nativeEvent.contentOffset.y > imgSize.HEIGHT / 3) {
            setBarstyle('dark-content');
            setwhiteblack('#121212');
          } else {
            setBarstyle('light-content');
            setwhiteblack('#fefefe');
          }
        }}>
        <Animated.View
          style={{
            width: imgSize.WIDTH,
            height: imgSize.HEIGHT / 2.5,
            transform: [{translateY: heightref}],
            // backgroundColor: backgroundColor,
          }}
        />
        <Animated.View style={{backgroundColor: '#f5f5f5'}}>
          <View style={styles.topspacing} />
          <Container>
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
          </Container>
        </Animated.View>
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
    </>
  );
};

const styles = StyleSheet.create({
  // img: {
  //   width: imgSize.WIDTH,
  //   height: imgSize.HEIGHT,
  // },
  topspacing: {
    padding: 13,
  },
  title: {
    fontSize: titlefontSize,
    color: 'black',
  },
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
    zIndex: 10,
    paddingLeft: avatarsize.WIDTH,
    paddingVertical: 12,
  },
  btnconatainer: {
    paddingRight: 20,
  },
  bottomcontainer: {
    // position: 'absolute',
    // bottom: -29,
    // width: bottomContainerSize.WIDTH,
    // height: bottomContainerSize.HEIGHT,
    backgroundColor: 'white',
    borderRadius: 30,
    // elevation: 12,
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
    paddingTop: 40,
    paddingHorizontal: 15,
    // backgroundColor: 'red',
    // position: 'absolute',
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

export default Eventdetails;
