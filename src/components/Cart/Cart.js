import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const userdata = props.cart;
    let salary = 0;
    for (let i = 0; i < userdata.length; i++) {
        const userSalary = userdata[i].salary;
        salary= salary+userSalary;
        
    }

    return (
        <div >
            <h1>Total</h1>
            <h3>User Selected: {props.cart.length} </h3>
            <h4>Total Salary: {salary} </h4>
        </div>
    );
};

export default Cart;