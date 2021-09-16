import React, { useContext } from 'react';

import { Container } from '../Container/Login';
import ReposContainer from "../components/ReposContainer/ReposComponent";

import { context } from '../Components/Context/Context';

export default function Repos (){
    const ctx = useContext(context);

    return (
        <Container>
            <ReposContainer name={ctx.name} repos={ctx.userRepos} />
        </Container>
    );
}

