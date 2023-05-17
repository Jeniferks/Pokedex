import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
background: ${mainColor};
height: 8vh;
color: white;
display:flex;
align-items: center;
justify-content: center;
position: relative;
margin:0;
padding:0;
`

export const LeftHeaderButton = styled.button`
    position: absolute;
    left: 2vh;
`

export const RightHeaderButton = styled.button`
    position: absolute;
    right: 2vh;
`