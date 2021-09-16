import {
    Container,
    ProfilePicture
} from './UserComponentPicture'

const UserPicture = props => {
    return (
        <Container>
            <ProfilePicture src={props?.url} alt={props?.alternativeText}>
            </ProfilePicture>
        </Container>

    )
};

export default UserPicture;