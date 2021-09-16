import React, { useContext } from 'react';
import Menu from '../Components/Menubar/Menu';
import UserPicture from '../Components/UserPicture/UserPicture'
import UserDetails from '../Components/UserDetails/UserDetails';
import ExitButton from '../Components/ExitButton/ExitButton';
import UserNumbers from '../Components/UserNumbers/Usernum';
import Userbio from '../Components/UserBio/UserBio'
import {context} from '../Components/Context/Context';
export default function UserPage (){
    const ctx = useContext(context);
    return(
        <>
            <ExitButton></ExitButton>
            <UserPicture 
            url = {ctx.userData?.avatar_url} 
            alternativeText = {ctx.userData?.login}
            ></UserPicture>
            <UserDetails
            name ={ctx.userData?.name}
            login ={"#"+ctx.userData?.login}
            email = {ctx.userData?.email}
            location = {ctx.userData?.location}
            ></UserDetails>
            <UserNumbers
            repos={ctx.userData?.public_repos}
            followers={ctx.userData?.followers}
            following={ctx.userData?.following}
            ></UserNumbers>
            <Userbio
            bio={ctx.userData?.bio}
            ></Userbio>
            <Menu></Menu>
        </>
      
    )
};