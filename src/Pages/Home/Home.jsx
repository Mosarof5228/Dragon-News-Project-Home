import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Marquee from "react-fast-marquee";
import Navbar from "./Shared/Navbar/Navbar";
import NewsCard from "./NewsCard";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <div className="flex bg-gray-200">
                <button className="btn  btn-secondary mr-4">Latest</button>
                <Marquee speed={100} pauseOnHover={true}>
                    <Link className="mr-10" to='/'> I can be a React component, multiple React components......,</Link>
                    <Link className="mr-10" to='/'> I can be a React component, multiple React components....,</Link>
                    <Link className="mr-10" to='/'> I can be a React component, multiple React components.....,</Link>
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className="mt-11 gap-6  grid grid-cols-1 md:grid-cols-4 mx">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                    {
                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;