import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>this is news details page</h2>
            <h2>{id}</h2>
        </div>
    );
};

export default NewsDetails;