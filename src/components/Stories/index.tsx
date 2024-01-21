import Seta from '../../assets/rightArrow.svg';
import { StoriesDiv, UserStoriesDiv } from './style';

export default function Stories() {

    const users = new Array(10).fill('abacate123');
    console.log(users);

    return (
        <StoriesDiv>
            {
                users.map(usuario => {
                    return (
                        <UserStoriesDiv>
                            {usuario}
                        </UserStoriesDiv>
                    );
                })
            }
        </StoriesDiv>
    );
}