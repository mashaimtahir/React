import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../Abstract Component/Button';
import WritingPen from './../Svg/WritingPen';
import Interest from './Interest';

const About = ({own}) => {
  let interest = [
    {color: 'red', text: 'Sports'},
    {color: 'blue', text: 'Music'},
    {color: 'lightblue', text: 'Sp'},
    {color: 'green', text: 'Sports'},
    {color: 'lightblue', text: 'Sports'},
    {color: 'green', text: 'Sports'},
  ];
  return (
    <View>
      {own === true ? <Text style={styles.title}>About Me</Text> : null}
      <Text style={styles.description}>
        Enjoy your favorite dishe and a lovely your friends and family and have
        a great time. Food from local food trucks will be available for
        purchase.
      </Text>
      {own === true ? (
        <>
          <View style={[styles.row, styles.title2]}>
            <Text style={[styles.title]}>Interest</Text>
            <Button
              text={'CHANGE'}
              width={null}
              fontSize={15}
              textspacing={5}
              paddingHorizontal={13}
              borderRadius={20}
              backgroundColor={'#5669FF21'}
              color={'#5669FF'}
              TextIcon={WritingPen}
              texticonsize={15}
            />
          </View>
          <View style={[styles.row, styles.wrap]}>
            {interest.map((data, key) => {
              return (
                <Interest
                  text={data.text}
                  backgroundColor={data.color}
                  key={key}
                />
              );
            })}
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  title2: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  description: {
    paddingVertical: 10,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  interest: {
    // justifyContent: 'flex-start',
  },
});

export default About;
