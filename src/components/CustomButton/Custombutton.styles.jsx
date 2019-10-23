import styled, { css } from 'styled-components';

const buttoStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedButtonStyles = css`
    background-color: white;
    color: #000;
    border: 1px solid #000;

    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    &:hover{
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }
    return props.inverted ? invertedButtonStyles : buttoStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 170px;
    width: max-content;
    margin: 4px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    text-align: center;
    ${getButtonStyles}
`