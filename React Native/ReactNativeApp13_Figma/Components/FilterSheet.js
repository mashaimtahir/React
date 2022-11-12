import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
// import RnRangeSlider from 'rn-range-slider';
import RangeSlider from 'react-native-range-slider';
import Slider from './Slider';
import BottomSheet from './BottomSheet';
import Container from './../Abstract Component/Container';
import Button from './../Abstract Component/Button';
import Music from './../Svg/Music';
import BasketBall from './../Svg/basketball';
import ForkandKnives from '../Svg/Fork&knives';
import SolidLocation from '../Svg/Solidlocation';
import ForwardArrowNormal from '../Svg/ForwardArrowNormal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MovingArrow from '../Svg/MovingArrows';
import CalenderNormal from './../Svg/CalenderNormal';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const FilterSheet = ({refRBSheet}) => {
  // const categories = useState([]);
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState([20, 140]);
  const Size = useWindowDimensions().scale * 4 + 4;
  const [categories, setCategory] = useState([
    {
      title: 'Sports',
      Icon: BasketBall,
      selected: false,
    },
    {
      title: 'Music',
      Icon: Music,
      selected: false,
    },
    {
      title: 'Food',
      Icon: ForkandKnives,
      selected: true,
    },
    {
      title: 'Music',
      Icon: Music,
      selected: true,
    },
    {
      title: 'Sports',
      Icon: BasketBall,
      selected: false,
    },
    {
      title: 'Music',
      Icon: Music,
      selected: true,
    },
    {
      title: 'Sports',
      Icon: BasketBall,
      selected: false,
    },
    {
      title: 'Music',
      Icon: Music,
      selected: true,
    },
    {
      title: 'Sports',
      Icon: BasketBall,
      selected: false,
    },
    {
      title: 'Sports',
      Icon: BasketBall,
      selected: false,
    },
  ]);
  const styles = StyleSheet.create({
    title: {
      fontSize: 25,
    },
    row: {
      flexDirection: 'row',
    },
    categorycontainer: {
      // height: 130,
      padding: Size * 0.5,
    },
    subtitle: {
      fontSize: Size * 1.3,
      marginVertical: 20,
      color: '#333',
    },
    datebtncontainer: {
      paddingBottom: 10,
      justifyContent: 'space-between',
    },
    justify: {
      justifyContent: 'space-between',
    },
  });

  const ref = useRef();
  return (
    <BottomSheet refRBSheet={refRBSheet} height={Size * 45}>
      <ScrollView>
        <Container>
          <View>
            <Text style={styles.title}>Filter</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0}}
            horizontal={true}>
            <View onStartShouldSetResponder={() => true} style={[styles.row]}>
              {categories.map((category, key) => {
                return (
                  <View key={key} style={styles.categorycontainer}>
                    <Button
                      btncardname={category.title}
                      TextIcon={category.Icon}
                      texticonsize={Size * 1.1 + 12}
                      texticoncolor={category.selected ? '#fff' : '#aaa'}
                      backgroundColor={category.selected ? '#5669FF' : null}
                      width={Size * 2.5 + 15}
                      height={Size * 2.5 + 15}
                      borderWidth={category.selected ? 0 : 1}
                      borderColor={'#999'}
                      borderRadius={100}
                      fontSize={Size * 1.2}
                      elevation={category.selected ? 7 : 0}
                      onPress={() => {
                        setCategory(prevState => {
                          let data = [...prevState];
                          data[key] = {
                            ...data[key],
                            selected: !category.selected,
                          };
                          return data;
                        });
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View>
            <Text style={styles.subtitle}>Time & Date</Text>
          </View>
          <View style={[styles.row, styles.datebtncontainer]}>
            {['Today', 'Tomorrow', 'This week'].map((data, key) => {
              return (
                <View key={key}>
                  <Button
                    text={data}
                    width={null}
                    paddingHorizontal={Size * 0.8}
                    fontSize={Size * 1 + 5}
                    color={key === date ? '#fff' : '#777b'}
                    borderWidth={key === date ? 0 : 1}
                    borderColor={'#CCC'}
                    backgroundColor={key === date ? '#5669FF' : '#ffffffff'}
                    onPress={() => setDate(key)}
                  />
                </View>
              );
            })}
          </View>
          <View>
            <Button
              width={Size * 22}
              style={{alignSelf: 'flex-start'}}
              text={'Choose from calender'}
              borderWidth={1}
              borderColor={'#CCC'}
              fontSize={Size * 1.1 + 3}
              Leading_icon={CalenderNormal}
              leadingsize={Size * 0.8 + 11}
              leadingcolor={'#5669FF'}
              Tailing_icon={ForwardArrowNormal}
              onPress={() => ref.current.open()}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Location</Text>
          </View>
          <View>
            <Button
              width={'100%'}
              style={{
                paddingVertical: Size * 0.7,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#6666',
              }}
              paddingHorizontal={Size}
              Leading_icon={SolidLocation}
              leadingsize={Size * 2.7 + 6}
              text={'New York, USA'}
              fontSize={Size * 1 + 5}
              Tailing_icon={ForwardArrowNormal}
              tailingsize={Size * 1}
            />
          </View>
          <View style={[styles.row, styles.justify]}>
            <Text style={styles.subtitle}>Select price range</Text>
            <Text style={styles.subtitle}>
              {'$' + price[0] + '- $' + price[1]}
            </Text>
          </View>
          <View>
            {/* <RangeSlider /> */}
            {/* <Slider /> */}
            <MultiSlider
              isMarkersSeparated={true}
              min={50}
              max={300}
              enabledOne={true}
              enabledTwo={true}
              values={[20, 140]}
              onValuesChangeFinish={data => setPrice(data)}
              selectedStyle={{
                backgroundColor: '#5669FF',
              }}
              customMarkerLeft={() => {
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 3,
                      borderWidth: 1,
                      borderRadius: 7,
                      borderColor: '#5669FFBB',
                    }}>
                    <MovingArrow />
                  </View>
                );
              }}
              customMarkerRight={() => {
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 3,
                      borderWidth: 1,
                      borderRadius: 7,
                      borderColor: '#5669FFBB',
                    }}>
                    <MovingArrow />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', paddingBottom: 10},
            ]}>
            <Button
              text={'Reset'}
              borderWidth={1}
              borderColor={'#DDD'}
              style={{width: '50%'}}
              paddingVertical={Size}
              fontSize={Size + 5}
            />
            <Button
              text={'Apply'}
              style={{width: '50%'}}
              paddingVertical={Size}
              fontSize={Size + 5}
              color={'#eee'}
              backgroundColor={'#5669FF'}
              onPress={() => refRBSheet.current.close()}
            />
          </View>
        </Container>
      </ScrollView>
      <BottomSheet refRBSheet={ref} height={420}>
        <Calendar />
        <Button
          style={{bottom: 10, position: 'absolute'}}
          text={'Close'}
          width={null}
          onPress={() => ref.current.close()}
        />
      </BottomSheet>
    </BottomSheet>
  );
};

export default FilterSheet;
