import styled from "styled-components";

export const Container = styled.button`
    width:140px;
    height:50px;
    border:none;
    position: fixed;
    right: 0;
    background-color:unset;
    justify-content:flex-end;

    &:hover{
        cursor:pointer;
    }
`

export const Text = styled.p`
    width:20px;
    height:20px;
    font-size:20px;
    color:white;

    &:hover {
        cursor: pointer;
        transition: .4s ease;
        border-radius: 10px;
    }
`

