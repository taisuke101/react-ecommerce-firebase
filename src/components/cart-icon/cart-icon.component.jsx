import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { 
    CartIcons,
    ItemCount
} from './cart-icon.styles';



const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIcons  onClick={toggleCartHidden}>
            <ShoppingIcon style={{width: '24px', height: '24px'}} />
            <ItemCount className='item-count'>{itemCount}</ItemCount>
        </CartIcons>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon) ;
