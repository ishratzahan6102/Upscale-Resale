import React from 'react';
import { FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ card }) => {
    const { brand, _id, img } = card





    return (
        <div className='text-start'>
            <div className="card mx-auto w-80  ">
                <img src={img} className='h-72 w-80 lg:h-full  relative mx-auto card-img' alt="Shoes" />
                <div className=' h-full w-full  product-hover mx-auto absolute top-0 right-0 lg:right-0 '>
                    <div className='top-10 p-4 right-0 flex flex-col lg:right-0 absolute'>
                        <Link>
                            <button className="btn rounded-none  text-white   btn-square">
                                <FaSearch></FaSearch>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  my-2  text-white     btn-square">
                                <FaHeart></FaHeart>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  text-white   btn-square">
                                <FaShoppingBag></FaShoppingBag>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body w-80 mx-auto product-card bg-gray-200  text-start">
                <h2 className="text-xl font-bold text-primary">
                    {brand}

                </h2>
                <p className='text-sm text-black  '>Watch More Collection</p>
                <button className="btn btn-primary btn-sm w-1/3 rounded-none   mr-4">
                <Link to={`/category/${brand}`} >Shop</Link>
                </button>

            </div>
           

        </div>

    );
};

export default Card;