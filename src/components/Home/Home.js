import React, { useState } from 'react';
import data from '../../data/data.json';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile'
import './Home.css';
const Home = () => {
    const all=data;
    const [userdata,setData] = useState(all);
    const [cart,setCart] = useState([])
    const clickHandeler=(userdata)=>{
        const newCart=[...cart,userdata];
        setCart(newCart);
   };
    return (
        <div className='home'>
            <div className="user">
            {
                userdata.map(userdata=>
                    <Profile userdata={userdata} clickHandeler={clickHandeler}></Profile>
                )
            }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Home;