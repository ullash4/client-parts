import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ReviewCard from './ReviewCard';

function AllReviews() {
    const { isLoading, data: reviews } = useQuery("reviews", () =>
    fetch("fakereview.json").then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  return (
    <div className='px-10 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {
                reviews.map(rev=><ReviewCard key={rev._id} rev={rev}></ReviewCard>)
            }
        </div>
    </div>
  )
}

export default AllReviews