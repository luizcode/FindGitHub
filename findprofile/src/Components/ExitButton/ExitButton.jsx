import {
    Container,
     Text
} from './ExitComponentButton'

import {IoMdExit} from 'react-icons/io'
import { useHistory } from 'react-router-dom';


const ExitButton = () => {
    const history = useHistory('')
    const back = route => history.push(route)
    return(
        <Container onClick = {() => back('/')}>
            <Text value='sair'>
               <IoMdExit color = 'red' size='5vh'/> 
            </Text>
        </Container>
    )

};

export default ExitButton