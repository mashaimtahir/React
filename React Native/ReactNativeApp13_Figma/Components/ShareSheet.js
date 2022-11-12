import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Button from '../Abstract Component/Button';
import Container from '../Abstract Component/Container';
import Facebook from '../Svg/Facebook';
import WhatsApp from '../Svg/WhatsApp';
import BottomSheet from './BottomSheet';

const ShareSheet = ({refRBSheet}) => {
  const [state, setState] = useState([
    {
      title: 'WhatsApp',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
    {
      title: 'Facebook',
      Icon: Facebook,
    },
  ]);
  const Size = useWindowDimensions().scale * 4 + 4;
  const styles = StyleSheet.create({
    title: {
      fontSize: Size * 1.3 + 3,
      marginBottom: 5,
    },
    row: {
      flexDirection: 'row',
    },
    wrap: {
      flexWrap: 'wrap',
    },
    btnscontainer: {
      paddingVertical: Size * 1,
      // justifyContent: 'space-between',
    },
    btncontaier: {
      marginBottom: 15,
      paddingHorizontal: Size * 0.4 + 1,
    },
  });
  return (
    <BottomSheet refRBSheet={refRBSheet} height={Size * 13 + 120}>
      <Container>
        <View>
          <Text style={styles.title}>Share with friends</Text>
        </View>
        <View style={[styles.row, styles.wrap, styles.btnscontainer]}>
          {state.map((data, key) => {
            return (
              <View key={key} style={styles.btncontaier}>
                <Button
                  width={null}
                  height={null}
                  btncardname={'Facebook'}
                  fontSize={Size * 1}
                  paddingHorizontal={0}
                  paddingVertical={0}
                  TextIcon={Facebook}
                  texticonsize={Size * 2 + 10}
                />
              </View>
            );
          })}
        </View>
        <Button
          text={'CANCEL'}
          paddingVertical={Size * 0.7}
          fontSize={Size * 0.8 + 5}
          backgroundColor={'#EEEEEF'}
        />
      </Container>
    </BottomSheet>
  );
};

export default ShareSheet;
