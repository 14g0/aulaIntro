import SideBar from "../../components/SideBar";
import Stories from "../../components/Stories";
import { HomeDiv, Sugestoes, Timeline } from "./style";

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