import qzone1 from "/src/assets/qZone1.png";
import qzone2 from "/src/assets/qZone2.png";
import qzone3 from "/src/assets/qZone3.png";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div >
            <div>
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-outline  w-full my-4 px-4">
                    <FaGoogle />
                    Login With Goggle
                </button>
                <button className="btn btn-outline  w-full px-4">
                    <FaGithub />
                    Login With Goggle
                </button>
            </div>
            <div className="my-8">
                <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
                <a href="#" className="flex items-center gap-2 border py-3 px-4 rounded-t-lg ">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-2 border-x py-3 px-4  ">
                    <FaTwitter></FaTwitter>
                    <span>FaTwitter</span>
                </a>
                <a href="#" className="flex items-center gap-2  py-3 px-4 border rounded-b-lg ">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            {/* kids zone */}
            <div className="bg-slate-50 p-2 ">
                <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>

                <img className="w-full" src={qzone1} alt="" />
                <img className="w-full" src={qzone2} alt="" />
                <img className="w-full" src={qzone3} alt="" />


            </div>
        </div>
    );
};

export default RightSideNav;