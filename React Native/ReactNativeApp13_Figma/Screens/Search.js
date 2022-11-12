import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import Container from '../Abstract Component/Container';
import SearchStatusBar from './../Components/SearchStatus';
import EventCard from './../Components/EventCard';

const Search = ({navigation, route}) => {
  let stateData = [
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Mashaim Ali',
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
  const [state, setState] = useState(stateData);
  const [value, valueChange] = useState('');
  // state = [];
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <View style={{height: StatusBar.currentHeight}} />
      <SearchStatusBar
        value={value}
        valueChange={Value => {
          console.log(Value);
          setState(prevState => {
            let temp =
              Value !== ''
                ? stateData.filter(e => e.title.search(RegExp(Value, 'i')) >= 0)
                : state;
            console.log(temp);
            return temp;
          });
          valueChange(Value);
        }}
        navigation={navigation}
        route={route}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {state.map((data, key) => {
          return (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                console.log('Navigating...');
                navigation.navigate('EventDetail');
              }}>
              <View>
                <EventCard
                  key={key}
                  date={data.date}
                  title={data.title}
                  img={data.img}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Search;
