import React from 'react';

const Review = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-white font-bold text-4xl'>Recent Reviews</h1>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/0.jpg" />
                    </div>
                </div>
                <div className="chat-bubble">Absolutely agree, my s22ultra 512gb note20ultra 512gb has the ugly curves.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/90.jpg" />
                    </div>
                </div>
                <div className="chat-bubble">it would be the greatest phone out there,</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-bubble">I have this same version and I don't agree at all.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://randomuser.me/api/portraits/men/51.jpg" />
                    </div>
                </div>
                <div className="chat-bubble">S22 ultra
                    a beast in hardware but disapointing in software features.</div>
            </div>
            <div className="indicator w-5/6 mt-6">
                <div className="indicator-item indicator-bottom">
                    <button className="btn btn-primary">Apply</button>
                </div>
                <div className="card border w-full">
                    <div className="card-body">
                        <h2 className="card-title">Give a review</h2>
                        <p>Your Review here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;