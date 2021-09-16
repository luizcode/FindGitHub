import {
    Container,
    Home,
    Repositorios,
    Seguindo,
    Seguidores,
} from './MenuComponent'
import {useHistory} from 'react-router-dom'
const Menu = () => {
    const history = useHistory('')
    const GoOn = route => history.push(route)
    return (
        <Container>
            <Home onClick= {()=> GoOn('/Userpage')}>
                Home
            </Home>
            <Repositorios
                onClick= {()=> GoOn('/Userpage/repos')}
            >
                Repos
            </Repositorios>
            <Seguidores>
                Seguidores
            </Seguidores>
            <Seguindo>
                Seguindo
            </Seguindo>
        </Container>
    )
}

export default Menu;