import styled from 'styled-components'


export const Button = styled.button`
margin-top: 130px;
width: 342px;
height: 74px;
font-weight: 700;
font-size: 17px;
line-height: 28px;
cursor: pointer;
color: #FFFFFF;
border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border-radius: 14px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

img{
    transform: ${props => props.isBack ? 'rotateY(180deg)' : '' };
}

`