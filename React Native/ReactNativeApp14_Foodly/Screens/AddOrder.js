import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
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
const AddOrder = ({navigation, route, Price, State, State2, Food}) => {
  const [counter, setCounter] = useState(0);
  const params = route.params;
  console.log(params);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ScrollView>
        <Image
          style={{width: ImgSize.WIDTH, height: ImgSize.HEIGHT}}
          source={{
            uri: 'https://images.all-free-download.com/images/graphiclarge/beauty_of_nature_15_211311.jpg',
          }}
        />
        <Container>
          <Text style={{fontSize: FontSize.H3}}>Cookie Sandwich</Text>
          <Text>
            Shortbread, chocolate turtle cookies, and red velvet. 8 ounces cream
            cheese, softened.
          </Text>
          <Text>
            <ValidText text={'Price'} />
            {(Price && State) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={'State'} />
            {(State && State2) || true ? (
              <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={'State2'} />
            {(Food && State2) || true ? (
              <Text style={styles.textdot}>{'\t\u25cf\t'}</Text>
            ) : null}
            <ValidText text={'Food'} />
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
