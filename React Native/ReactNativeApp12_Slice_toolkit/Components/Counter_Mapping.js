import React from 'react';
import {useSelector} from 'react-redux';
import Counter from './Counter_Component';
// import {connect} from 'react-redux';

const Counters = () => {
  const counters = useSelector(state => state.counter);
  // console.log(counters);
  return (
    <>
      {counters.map(counter => (
        <Counter key={counter.id} counter={counter} />
      ))}
    </>
  );
};

// const mapStateToProps = state => {
//   // console.log(state);
//   return {};
// };

export default Counters;
