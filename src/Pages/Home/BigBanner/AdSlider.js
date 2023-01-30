import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Slide from './Slide';
const AdSlider = () => {

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
        <div className='carousel grid grid-cols-4 gap-2 '>

          {
                advertised.map(slide => <img src={slide.img}/>
                  
              )



                
           }


           
            
        </div>
    );
};

export default AdSlider;