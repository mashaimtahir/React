import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import ValidText from '../Abstracts/ValidText';
import Scale from '../Function/Scale';
import List from '../Modules/List';
import RadioList from '../Modules/RadioList';
import {Colors, FontSize} from '../Theme';

const ImgSize = Scale(375, 375, 280);
const BtnSize = Scale(375, 54, 54);
const btnfont = FontSize.Body;
const AddOrder = ({navigation, route}) => {
  const [counter, setCounter] = useState(0);
  const item = useSelector(
    state => state.resturant.filter(items => items.id === route.params.id)[0],
  );
  const params = route.params;
  return (
    <>
      {console.log(item)}
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ScrollView>
        <Image
          style={{width: ImgSize.WIDTH, height: ImgSize.HEIGHT}}
          source={{
            uri: item.image,
          }}
        />
        <Container>
          <Text style={{fontSize: FontSize.H3}}>{item.title}</Text>
          <Text>{item.subtitle}</Text>
          <Text>
            <ValidText text={item.cost} />
            {(item.cost && item.State) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={item.State} />
            {(item.State && item.State2) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={item.State2} />
            {(item.food && item.State2) || true ? (
              <Text style={styles.textdot}>{'\t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={item.food} />
          </Text>
          <Text
            style={{
              fontSize: FontSize.Subhead,
              paddingTop: FontSize.H3,
              paddingBottom: FontSize.Caption,
            }}>
            Choice of top Cookie
          </Text>
          <RadioList
            FontSize={FontSize.Body}
            choices={[
              'Chocolate Chip',
              'Cookies and Cream',
              'Funfetti',
              'M and M',
              'Red Velvet',
              'Peanut Butter',
              'Snikerdoodle',
              'White Chocolate Macadamia',
            ]}
          />
          <Text
            style={{
              fontSize: FontSize.Subhead,
              paddingTop: FontSize.H3,
              paddingBottom: FontSize.Caption,
            }}>
            Choice of Bottom Cookie
          </Text>
          <RadioList
            FontSize={FontSize.Body}
            choices={[
              'Chocolate Chip',
              'Cookies and Cream',
              'Funfetti',
              'M and M',
              'Red Velvet',
              'Peanut Butter',
              'Snikerdoodle',
              'White Chocolate Macadamia',
            ]}
          />
          <List text={'Add Special Instructions'} />
          <View style={styles.row}>
            <Button
              text={'-'}
              fontSize={FontSize.H1}
              borderRadius={999}
              width={BtnSize.WIDTH}
              height={BtnSize.HEIGHT}
              backgroundColor={Colors.lightgrey}
              onPress={() =>
                setCounter(count => (count <= 0 ? count : count - 1))
              }
            />
            <Text>{counter}</Text>
            <Button
              text={'+'}
              fontSize={FontSize.H3}
              borderRadius={999}
              width={BtnSize.WIDTH}
              height={BtnSize.HEIGHT}
              backgroundColor={Colors.lightgrey}
              onPress={() => setCounter(count => count + 1)}
            />
          </View>
          <Button
            text={'ADD TO ORDER($11.98)'}
            width={'100%'}
            fontSize={btnfont}
            color={Colors.white}
            backgroundColor={Colors.green}
          />
        </Container>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdot: {
    color: Colors.grey + '88',
  },
});

export default AddOrder;
