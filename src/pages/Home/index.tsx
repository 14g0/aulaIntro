import SideBar from "../../components/SideBar";
import Stories from "../../components/Stories";
import Sugestoes from "../../components/Sugestoes";
import { HomeDiv, Timeline } from "./style";

export default function Home() {
    return (
        <HomeDiv>
            <SideBar/>

            <Timeline>
                <Stories/>
            </Timeline>

            <Sugestoes/>
        </HomeDiv>
    );
}