import SideBar from "../../components/SideBar";
import Stories, { UserStoriesData } from "../../components/Stories";
import Sugestoes from "../../components/Sugestoes";
import { HomeDiv, Timeline } from "./style";

import Homi from '../../assets/homi.jpg';

export default function Home() {

    const arrayUsuarios: Array<UserStoriesData> = [
        {pic: Homi, nome: 'abacatinho123'},
        {pic: Homi, nome: 'iago'},
        {pic: Homi, nome: 'gabrielA'},
        {pic: Homi, nome: 'brunaN'},
        {pic: Homi, nome: 'jorgeS'},
        {pic: Homi, nome: 'asnjan'},
        {pic: Homi, nome: 'afmdkmkmcrm'},
        {pic: Homi, nome: 'lmjcakeienf'},
        {pic: Homi, nome: 'ejmvkdmckdmc'},
        {pic: Homi, nome: 'dk,cdc'},
        {pic: Homi, nome: 'lfvl,dcsc'},
        {pic: Homi, nome: 'gujrnekmdc'},
        {pic: Homi, nome: 'lkjhgbasnd'},
        {pic: Homi, nome: 'qemfjmrkcc'},
        {pic: Homi, nome: 'vnhnejfmcso'},
    ]

    return (
        <HomeDiv>
            <SideBar/>

            <Timeline>
                <Stories usuarios={arrayUsuarios}/>
            </Timeline>

            <Sugestoes/>
        </HomeDiv>
    );
}