import {
    Container,
    NumberContainer
} from './UserComponentNum'
import {React ,} from 'react';
import {useHistory} from 'react-router-dom'

const UserNumbers = props => {
    const history = useHistory('')
    const go = route => history.push(route)
    return (
        <Container>
            <NumberContainer
                onClick = {() => go('/Userpage/followers')}
            >
                <h1>{props?.followers}</h1>
                <h2>Seguidores</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props?.following}</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
            
            <NumberContainer>
                <h1>{props?.repos}</h1>
                <h2>Repos</h2>
            </NumberContainer>
        </Container>
    );
}

export default UserNumbers;