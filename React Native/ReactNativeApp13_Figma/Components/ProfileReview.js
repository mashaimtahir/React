import React from 'react';
import {View} from 'react-native';
import ReviewCard from './ReviewCard';

const ProfileReview = () => {
  let state = [
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: '5: 30 PM',
      title: 'Jo Malone',
      location: 'Radius Gallery • Santa Cruz, CA',
      stars: 3,
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: '5: 30 PM',
      title: 'Jo Malone',
      location: 'Radius Gallery • Santa Cruz, CA',
      stars: 4,
    },
  ];
  return (
    <>
      {state.map((data, key) => {
        return (
          <View key={key}>
            <ReviewCard
              img={data.img}
              title={data.title}
              date={data.date}
              star={data.stars}
              eventoccurance={data.location}
            />
          </View>
        );
      })}
    </>
  );
};

export default ProfileReview;
