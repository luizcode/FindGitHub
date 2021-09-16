import {
    Container,
    Bio,
    TextBio
} from './UserComponentBio'


const UserBio = props => {
    return(
        <Container>
            <Bio>
                Bio
                <TextBio>
                    {props?.bio}
                </TextBio>
            </Bio>
        </Container>


    )}

export default UserBio;