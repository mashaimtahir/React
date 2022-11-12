import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackArrow from '../Svg/BackArrow';
import Search from './../Svg/Search';
import Filters from './../Svg/Filter';
import Button from '../Abstract Component/Button';
import Input from '../Abstract Component/TextInput';
import FilterSheet from './FilterSheet';

const SearchStatusbar = ({navigation, route, value, valueChange}) => {
  const refRBSheet = useRef();
  return (
    <View>
      <View style={[styles.statusbar, styles.row]}>
        <Button TextIcon={BackArrow} width={null} texticonsize={24} />
        <Text style={styles.statusbartext}>Search</Text>
      </View>
      <View style={[styles.row, styles.searchbar]}>
        <Input
          value={value}
          setValue={Value => valueChange(Value)}
          width={'75%'}
          Leading_icon={Search}
          leadingsize={23}
          leadingcolor={'#5669FF'}
          placeholder={'Search'}
          fontSize={23}
          seperator={1}
          seperatorHeight={30}
          borderWidth={0}
          paddingVertical={0}
        />
        <Button
          paddingVertical={5}
          text={'Filters'}
          width={null}
          borderRadius={30}
          fontSize={15}
          color={'white'}
          backgroundColor={'#5D56F3'}
          textspacing={6}
          TextIcon={Filters}
          texticonsize={21}
          texticoncolor={'#A29EF0'}
          onPress={() => {
            refRBSheet.current.open();
          }}
        />
      </View>
      <FilterSheet refRBSheet={refRBSheet} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  spacing: {
    padding: 5,
  },
  statusbar: {
    marginBottom: 15,
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
    // height: 50,
  },
});

export default SearchStatusbar;
