import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ReviewCard from './ReviewCard';

function Reviews() {
    const { isLoading, data: reviews } = useQuery("reviews", () =>
    fetch("fakereview.json").then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  const num = reviews.length -6;
  const num2= reviews.length;
  return (
    <div className='px-10 py-10 bg-accent'>
        <h1 className='max-w-xl text-3xl font-bold sm:text-6xl mb-10'>Our Happy Clients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {
                reviews.slice(num, num2).reverse().map(rev=><ReviewCard key={rev._id} rev={rev}></ReviewCard>)
            }
        </div>
    </div>
  )
}

export default Reviews