import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.styles';

import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer >
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionDiv as='div' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </OptionDiv>
                        :
                        <OptionLink to='/auth'>
                            SIGN IN
                        </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
