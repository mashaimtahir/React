import React from 'react';
import {ScrollView} from 'react-native';
import EventCard from './EventCard';

const ProfileEvents = () => {
  let state = [
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
    },
  ];
  return (
    <>
      {state.length !== 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {state.map((data, key) => {
            return (
              <EventCard
                key={key}
                date={data.date}
                title={data.title}
                location={data.location}
                img={data.img}
              />
            );
          })}
        </ScrollView>
      ) : null}
    </>
  );
};

export default ProfileEvents;
