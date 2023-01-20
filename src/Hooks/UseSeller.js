import  { useEffect, useState } from 'react';


// admin ashole admin kinc checkaitesi
//  voy pais na paira jamu keep going

const UseSeller = (email) => {
    const [isSeller , setIsSeller] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if(email) {
            fetch(`https://astor-server-ochre.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                        setIsSeller(data.isSeller)
                        setIsSellerLoading(false)
                  
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default UseSeller;