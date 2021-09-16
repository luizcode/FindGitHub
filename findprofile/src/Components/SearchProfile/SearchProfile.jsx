import { Container } from '../../Container/Login';
import Icongithub from '../assets/Icongithub.svg'
import React, { useState , useContext } from 'react';
import {context} from '../Context/Context';
import {useHistory} from 'react-router-dom'

import {
    Icongit,
    Inputprofile,
    Findprofile,
} from './SearchComponentProfile'

import client from '../../Services/client'

const ProcProfile = () => {
    const history = useHistory('')
    const click = route => history.push(route)
    const ctx = useContext(context);
    const [searchedValue, setsearchedValue] = useState('');

    async function getUserData() {
        client.get(`/${searchedValue}`)
            .then(response => {
                ctx.setUserData(response.data)
                click('/Userpage')
            })
            .catch (error =>  {
                alert("Preencha o campo com valor valido")
            });
    }
    return (
        <Container>
            <Icongit src={Icongithub}></Icongit>
            <Inputprofile
                type="text"
                placeholder="Usuário"
                value={searchedValue}
                onChange={event => setsearchedValue(event.target.value)}
                required>
            </Inputprofile>
            <Findprofile
                onClick={getUserData}
            > Entrar &rarr;</Findprofile>
        </Container>
    )
};

export default ProcProfile;