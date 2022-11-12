import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Search from './../Svg/Search';
import Filters from './../Svg/Filter';
import MenuBar from './../Svg/Menubar';
import DownArrow from './../Svg/DownArrow';
import ActiveAlarm from './../Svg/ActiveAlarm';
import Basketball from '../Svg/basketball';
import Music from './../Svg/Music';
import ForkandKnives from './../Svg/Fork&knives';
import Button from '../Abstract Component/Button';
import Input from '../Abstract Component/TextInput';
// import BottomSheet from './BottomSheet';
import FilterSheet from './FilterSheet';

const HomeHead = ({navigation, route}) => {
  const btnFontSize = useWindowDimensions().scale * 5 + 6;
  const [value, setValue] = useState('');
  const refRBSheet = useRef();
  let categories = [
    {title: 'Sports', IconComponent: Basketball, color: '#F0635A'},
    {title: 'Music', IconComponent: Music, color: '#F59762'},
    {title: 'Food', IconComponent: ForkandKnives, color: '#29D697'},
    {title: 'Art', IconComponent: Basketball, color: '#F0635A'},
  ];

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    center: {
      alignSelf: 'center',
    },
    spacing: {
      paddingTop: StatusBar.currentHeight + 10,
    },
    statusbar: {
      marginBottom: 15,
    },
    container: {
      paddingBottom: btnFontSize * 2.2 - 3,
      backgroundColor: '#4A43EC',
      borderBottomStartRadius: 34,
      borderBottomEndRadius: 34,
      borderBottomWidth: 1,
      borderBottomColor: '#5669FF',
    },
    statusbartext: {
      flex: 1,
      fontSize: 24,
      paddingHorizontal: 10,
      color: '#000',
    },
    searchbar: {
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: (btnFontSize - 12) * 1.5,
      paddingHorizontal: 10,
      // height: 50,
    },
    head1: {
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    headtext1: {
      color: '#FFFFFFAA',
      fontSize: btnFontSize * 0.6 + 4,
      marginRight: 5,
    },
    headtext2: {
      fontSize: btnFontSize * 0.6 + 4,
      color: 'white',
    },
    categorycontainer: {
      zIndex: 100,
      width: '100%',
      // paddingLeft: 10,
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: -btnFontSize * 1.2,
    },
    filterbutton: {
      // right: btnFontSize / 2,
      right: btnFontSize / 1.2,
    },
    btncontainer: {
      zIndex: 100,
      backgroundColor: 'transparent',
      marginHorizontal: 5,
    },
    categorybtncontainer: {
      zIndex: 100,
      backgroundColor: 'transparent',
      paddingVertical: 5,
      paddingLeft: 20,
      paddingRight: 20,
    },
  });

  return (
    <Animated.View style={styles.container}>
      <View style={styles.spacing} />
      <View style={[styles.row, styles.head1]}>
        <Button
          TextIcon={MenuBar}
          onPress={() => navigation.toggleDrawer()}
          width={null}
          texticonsize={btnFontSize + 2}
          borderRadius={0}
        />
        <View>
          <View style={[styles.row]}>
            <Text style={[styles.headtext1, styles.center]}>
              Current Location
            </Text>
            <DownArrow width={btnFontSize * 0.8} height={btnFontSize * 0.8} />
          </View>
          <Text style={[styles.headtext2, styles.center]}>New York, USA</Text>
        </View>
        <View style={styles.center}>
          <Button
            width={null}
            TextIcon={ActiveAlarm}
            texticonsize={btnFontSize * 1.6 + 8}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>
      </View>
      <View style={[styles.row, styles.searchbar]}>
        <Input
          value={value}
          setValue={Value => {
            navigation.navigate('Search', {value: Value});
          }}
          onFocus={() => navigation.navigate('Search')}
          width={'75%'}
          Leading_icon={Search}
          leadingsize={btnFontSize * 1.5}
          leadingcolor={'#fff'}
          placeholder={'Search...'}
          fontSize={btnFontSize * 1.3}
          color={'white'}
          placeholderTextColor={'#dddddd7f'}
          seperator={1}
          seperatorHeight={30}
          seperatorColor={'#dddddd7f'}
          borderWidth={0}
          paddingVertical={0}
        />
        <View style={styles.filterbutton}>
          <Button
            paddingVertical={5}
            text={'Filters'}
            width={null}
            borderRadius={30}
            fontSize={btnFontSize}
            color={'white'}
            backgroundColor={'#5D56F3'}
            textspacing={btnFontSize / 3}
            TextIcon={Filters}
            texticonsize={btnFontSize * 1.2}
            texticoncolor={'#A29EF0'}
            paddingHorizontal={btnFontSize / 2}
            onPress={() => {
              refRBSheet.current.open();
            }}
          />
        </View>
      </View>
      <View
        style={styles.categorycontainer}
        onMoveShouldSetResponder={() => false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => false}
            style={[styles.row, styles.center, styles.categorybtncontainer]}>
            {categories.map((data, key) => {
              return (
                <View key={key} style={styles.btncontainer}>
                  <Button
                    delayPressIn={30}
                    width={null}
                    text={data.title}
                    borderRadius={30}
                    color={'white'}
                    backgroundColor={data.color}
                    fontSize={btnFontSize}
                    TextIcon={data.IconComponent}
                    texticonsize={btnFontSize}
                    texticoncolor={'white'}
                    textspacing={btnFontSize / 5}
                    paddingVertical={btnFontSize / 3}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <FilterSheet refRBSheet={refRBSheet} />
      {/* <BottomSheet refRBSheet={ref}>
        <Text></Text>
      </BottomSheet> */}
    </Animated.View>
  );
};

export default HomeHead;
