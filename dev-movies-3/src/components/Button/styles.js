import styled, {css} from 'styled-components'


const buttonSyles = css`
border: 3px solid #ffffff;
background: transparent;
color: #ffffff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
font-weight: 500;


&:hover {
    color: #ff0000;
    background: #ffffff;
}

`


export const ButtonWhite = styled.button`
    ${buttonSyles}
`



export const ButtonRed = styled.button`
    ${buttonSyles}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgba(255 00 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgba(255 0 0 / 30%);
        background: #ff0000;
        color: #ffffff;
    }
`



