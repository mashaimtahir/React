import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import Button from '../Abstract Component/Button';
import Container from '../Abstract Component/Container';
import ForwardArrowSm from '../Svg/ForwardArrowSm';
import Explore from './../Svg/Explore';
import Location from './../Svg/Location';
import CalenderNormal from './../Svg/CalenderNormal';
import Add from './../Svg/Add';
import LgEventCard from './LgEventCard';
import EventCard from './EventCard';
import ProfileSolid from '../Svg/ProfileSolid';
import InviteSheet from './InviteSheet';

const HomeBody = ({navigation, route}) => {
  const ref = useRef();
  let state = [
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
    },
  ];
  const Size = useWindowDimensions().scale * 4 + 2;
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    center: {
      alignSelf: 'center',
    },
    spacing2: {
      padding: 6,
    },
    container: {
      width: '100%',
      height: useWindowDimensions().width * 0.09,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      backgroundColor: '#fff',
      zIndex: -1,
      borderBottomColor: '#5669FF',
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    },
    textcontainer: {
      paddingVertical: Size * 0.5,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      fontSize: Size * 1.2 + 6,
      fontWeight: '500',
    },
    lgcard: {
      marginHorizontal: 5,
    },
    bottomnavigationbar: {
      width: '100%',
      paddingVertical: 5,
      justifyContent: 'space-evenly',
    },
    addbtn: {
      top: -26,
    },
    invitecontainer: {
      backgroundColor: '#00F8FF3a',
      padding: 15,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#40af60',
      // opacity: 0.1,
    },
    invitetitle: {
      fontSize: Size * 1.3 + 2,
      fontWeight: '600',
    },
    invitesubtitle: {
      fontSize: Size * 1.1 + 2,
      paddingBottom: 5,
    },
  });
  return (
    <>
      <View style={styles.container} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container paddingVertical={0}>
          <View style={[styles.row, styles.textcontainer]}>
            <Text style={styles.titleText}>Upcoming Events</Text>
            <Button
              onPress={() => navigation.navigate('Event')}
              text={'See All'}
              fontSize={Size * 1.4 + 2}
              width={Size * 5 + 55}
              Tailing_icon={ForwardArrowSm}
              tailingsize={Size * 0.9 + 5}
            />
          </View>
        </Container>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.spacing2} />
            {state.map((data, key) => {
              return (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() => navigation.navigate('EventDetail')}>
                  <View style={styles.lgcard}>
                    <LgEventCard
                      title={data.title}
                      img={data.img}
                      location={data.location}
                      bookmark={true}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
            <LgEventCard />
          </ScrollView>
        </View>
        <Container>
          <View style={styles.invitecontainer}>
            <Text style={styles.invitetitle}>Invite your friends</Text>
            <Text style={styles.invitesubtitle}>Get $20 for ticket</Text>
            <Button
              style={{alignSelf: 'flex-start'}}
              width={null}
              text={'INVITE'}
              fontSize={Size * 0.6 + 6}
              color={'#fff'}
              borderRadius={6}
              backgroundColor={'#00F8FF'}
              onPress={() => ref.current.open()}
            />
          </View>
          <View style={[styles.row, styles.textcontainer]}>
            <Text style={styles.titleText}>Nearby You</Text>
            <Button
              onPress={() => navigation.navigate('Event')}
              text={'See All'}
              fontSize={16}
              width={110}
              Tailing_icon={ForwardArrowSm}
            />
          </View>
          {state.map((data, key) => {
            return (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => {
                  navigation.navigate('EventDetail');
                }}>
                <View>
                  <EventCard
                    date={data.date}
                    title={data.title}
                    location={data.location}
                    img={data.img}
                  />
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </Container>
      </ScrollView>
      <View style={[styles.row, styles.bottomnavigationbar]}>
        <View>
          <Button
            width={null}
            fontSize={15}
            btncardname={'Explore'}
            TextIcon={Explore}
            texticonsize={25}
          />
        </View>
        <View>
          <Button
            width={null}
            onPress={() => navigation.navigate('Event')}
            btncardname={'Events'}
            fontSize={15}
            texticonsize={25}
            texticoncolor={'#DADADA'}
            TextIcon={CalenderNormal}
          />
        </View>
        <View style={styles.addbtn}>
          <Button
            width={null}
            borderRadius={30}
            backgroundColor={'#5669FF'}
            TextIcon={Add}
            texticoncolor={'white'}
            texticonsize={20}
            paddingHorizontal={15}
            paddingVertical={15}
          />
        </View>
        <View>
          <Button
            width={null}
            onPress={() => navigation.navigate('Map')}
            btncardname={'Map'}
            fontSize={15}
            TextIcon={Location}
            texticoncolor={'#DADADA'}
            texticonsize={20}
          />
        </View>
        <View>
          <Button
            width={null}
            onPress={() => navigation.navigate('Profile')}
            btncardname={'Profile'}
            fontSize={15}
            TextIcon={ProfileSolid}
            texticoncolor={'#DADADA'}
            texticonsize={22}
          />
        </View>
      </View>
      <InviteSheet refRBSheet={ref} />
    </>
  );
};

export default HomeBody;
