import Header from "../Home/Shared/Header/Header";
import Navbar from "../Home/Shared/Navbar/Navbar";
import RightSideNav from "../Home/Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const { id } = useParams();

    return (

        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2>this is news details page</h2>
                    <h2>{id}</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;