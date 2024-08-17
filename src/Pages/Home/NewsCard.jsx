import PropTypes from "prop-types";
import { FaCodeBranch, FaFill } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, author, details, _id } = news;


    return (

        <div className="shadow-xl mb-8 card bg-base-100 ">
            <div className="flex items-center  justify-between  p-4 bg-slate-100 mb-4">
                <div className="flex items-center gap-4 p-2">

                    <img className="rounded-full w-10"
                        alt="Tailwind CSS Navbar component"
                        src={author.img} />

                    <h2>{author.name}</h2>
                </div>
                <div className="flex gap-4">
                    <FaCodeBranch />
                    <FaFill />
                </div>
            </div>
            <div>
                <div className="">
                    <figure>
                        <img
                            src={image_url} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>

                        {
                            details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More.....</Link> </p> : <p>{details}</p>
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

NewsCard.propTypes = {
    news: PropTypes.node,
}
export default NewsCard;