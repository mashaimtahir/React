import React from 'react';
import {View, Text, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Input from '../Abstract Component/TextInput';
import Button from './../Abstract Component/Button';
import CurrentPin from './../Svg/CurrentPin';
import BackSign from '../Svg/BackSign';
import Basketball from '../Svg/basketball';
import Music from '../Svg/Music';
import ForkandKnives from '../Svg/Fork&knives';

const MapHead = ({navigation, route}) => {
  let state = [
    {text: 'Sports', TextIcon: Basketball, color: '#EE544A'},
    {text: 'Music', TextIcon: Music, color: '#5669FF'},
    {text: 'Food', TextIcon: ForkandKnives, color: '#29D697'},
    {text: 'Sports', TextIcon: Basketball, color: '#EE544A'},
    {text: 'Sports', TextIcon: Basketball, color: '#EE544A'},
    {text: 'Sports', TextIcon: Basketball, color: '#EE544A'},
    {text: 'Sports', TextIcon: Basketball, color: '#EE544A'},
  ];
  const Size = useWindowDimensions().scale * 4 + 4;
  return (
    <View style={styles.head}>
      <View style={styles.row}>
        <Input
          placeholder={'Find for food or restaurant...'}
          width={'75%'}
          onPress={() => navigation.goBack()}
          fontSize={Size * 0.7 + 7}
          LeadingButton={Button}
          Leading_icon={BackSign}
          backgroundColor={'white'}
          paddingHorizontal={0}
          borderWidth={0}
          paddingVertical={0}
        />
        <View style={{padding: 5}} />
        <Button
          width={Size * 3 + 10}
          TextIcon={CurrentPin}
          texticonsize={Size * 1.3 + 5}
          style={{height: Size * 2.5 + 15, flexShrink: 1, margin: 0}}
          height={'100%'}
          backgroundColor={'white'}
        />
      </View>
      <ScrollView
        // style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View style={[styles.row, styles.btncontainer]}>
          {state.map((data, key) => {
            return (
              <View key={key} style={styles.btn}>
                <Button
                  key={key}
                  text={data.text}
                  backgroundColor={'white'}
                  paddingVertical={Size / 3}
                  TextIcon={data.TextIcon}
                  texticoncolor={data.color}
                  fontSize={Size * 1.3 + 1}
                  texticonsize={Size + 5}
                  width={null}
                  borderRadius={50}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 40,
  },
  row: {
    flexShrink: 1,
    flexDirection: 'row',
  },
  btncontainer: {
    marginTop: 10,
    marginLeft: 18,
  },
  btn: {
    marginRight: 9,
  },
  scroll: {
    marginLeft: 18,
  },
});

export default MapHead;
