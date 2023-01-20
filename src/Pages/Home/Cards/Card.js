import React from 'react';
import { FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ card }) => {
    const { brand, _id, img } = card





    return (
        <div className='text-start'>
            <div className="card  mx-auto w-72  ">
                <img src={img} className='h-72 lg:h-full w-72 lg:w-96 relative mx-auto card-img' alt="Shoes" />
                <div className=' h-full w-72  product-hover mx-auto absolute top-0 right-0 lg:right-0 '>
                    <div className='top-10 p-4 right-0 flex flex-col lg:right-0 absolute'>
                        <Link>
                            <button className="btn rounded-none  text-primary    btn-outline btn-square">
                                <FaSearch></FaSearch>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  my-2  text-primary    btn-outline btn-square">
                                <FaHeart></FaHeart>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  text-primary    btn-outline btn-square">
                                <FaShoppingBag></FaShoppingBag>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body product-card text-start">
                <h2 className="text-xl text-black">
                    {brand}

                </h2>
                <p className='text-sm text-gray-800 '>Watch More Collection</p>
                <button className="btn btn-primary btn-sm w-1/3 rounded-none  text-white mr-4">
                <Link to={`/category/${brand}`} >Shop</Link>
                </button>

            </div>
           

        </div>

    );
};

export default Card;