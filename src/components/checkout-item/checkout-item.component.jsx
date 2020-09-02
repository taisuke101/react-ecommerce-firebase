import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItems,
    Image,
    RemoveButton,
    Arrow,
    Quantity,
    Value,
    Word,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItems>
            <Image>
                <img src={imageUrl} alt='item' style={{ width: '100%', height: '100%'}}/>
            </Image>
            <Word>{name}</Word>
            <Quantity>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value>
                {quantity}
            </Value>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Word>{price}</Word>
            <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItems>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
