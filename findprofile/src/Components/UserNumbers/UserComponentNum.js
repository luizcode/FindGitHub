import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    background-color:#525252;
    justify-content: space-around;
`

export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:#525252;

    h1 {
        font-size: 35px;
        text-align: center;
        color: #fff;
        margin: 0;
        background-color:#525252;
    }

    h2 {
        font-size: 17px;
        text-align: center;
        color: #fff;
        margin: 0;
        background-color:#525252;
    }

    &:hover {
        cursor: pointer;
        transition: .4s ease;
        border-radius: 10px;
    }
`