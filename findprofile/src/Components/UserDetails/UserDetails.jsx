      import {
    Container,
    Name,
    Email,
    Location,
    Username,
} from './UserComponentDetails'

const UserDetails = props => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Email>{props?.email}</Email>
            <Username>{props?.login}</Username>
            <Location>{props?.location}</Location>
        </Container>
    )
}

export default UserDetails