import React from 'react'

import {
    CartItems,
    ItemDetails,
    Name
} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItems>
            <img src={imageUrl} alt='item' style={{width: '30%'}}/>
            <ItemDetails>
                <Name>{name}</Name>
                <Name>{quantity} x ${price}</Name>
            </ItemDetails>
        </CartItems>
    )
}

export default CartItem
