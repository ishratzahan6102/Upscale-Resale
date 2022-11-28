import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertised = [], refetch, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`)
            const data = await res.json()
            console.log(data)
            return data
        }
    })

    return (
        <div>
            {
                advertised.length > 0 &&
                <>
                    <h2 className='text-4xl font-bold text-white'>Advertisement</h2>
                    <small>Sponsored</small>

                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 my-10 text-white'>
                        <div>
                            <div className="hero  h-72  bg-primary">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-3xl font-bold">Hello there!</h1>
                                        <p className="py-6">We have the most exclusive collection of second hand phones. Have a look on our most requested products</p>
                                        <button className="btn btn-">Go Ahead </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            advertised &&
                            advertised?.map(ad => <AdvertiseCard
                                key={ad._id}
                                ad={ad}>
                            </AdvertiseCard>)
                        }
                        <div>
                            <div className="hero h-72 " style={{ backgroundImage: `url("https://fdn.gsmarena.com/imgroot/news/19/12/phones-of-the-decade/-727w2/gsmarena_001.jpg")` }}>
                                <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <button className="btn btn-primary">See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            }

        </div>
    );
};

export default Advertise;
