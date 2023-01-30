import { useQuery } from '@tanstack/react-query';
import React from 'react';
import banner from '../../../assets/Phones/Nokia/long-img.png'
import w1 from '../../../assets/Exclusive/f1.png'
import w2 from '../../../assets/Exclusive/f2.jpg'
import w3 from '../../../assets/Exclusive/f3.png'
import w4 from '../../../assets/Exclusive/f4.jpg'
import Card from './Card';


const Ad = () => {
    const { data: advertised = [], refetch, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`)
            const data = await res.json()
            console.log(data)
            return data
        }
    })
    const watchData = [
        {
            id: 1,
            img: w1,
            itemName: "Watch series 1",
            price: "$150"
        },
        {
            id: 2,
            img: w2,
            itemName: "Watch series 2",
            price: "$250"
        },
        {
            id: 3,
            img: w3,
            itemName: "Watch series 3",
            price: "$350"
        },
        {
            id: 4,
            img: w4,
            itemName: "Watch series 4",
            price: "$450"
        },
        {
            id: 5,
            img: w1,
            itemName: "Watch series 1",
            price: "$150"
        },
        {
            id: 6,
            img: w2,
            itemName: "Watch series 2",
            price: "$250"
        },
    ]
    return (
        <div className='py-28 text-center max-w-[1100px] mx-auto  px-6 lg:px-0'>
            <h1 className='text-white font-bold text-3xl lg:text-4xl'>Exclusive Collection</h1>
            <p className='text-gray-100 '>Sponsored</p>
           
            <div className='flex flex-col md:flex-row gap-2 mt-20 '>
                {/* <div className='w-1/2'>
                    <img className='' src={banner} />
                </div> */}

                <div className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 '>
                        {
                            watchData.map(data => <Card
                            key={data.id}
                            card={data}
                            ></Card>)
                        }
                        {
                            advertised.map(data => <Card
                                key={data.id}
                                card={data}
                            ></Card>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ad;