import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import SingleBox from './SingleBox';
import { getPosts } from '../redux/arrayReducer';

export default function Box() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.array.status)

  React.useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <section>
      {isLoading ? <SingleBox /> : <Loader /> }
    </section>
  )
}