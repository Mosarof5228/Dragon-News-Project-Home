import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div className="lg:px-4 px-2  ">
            <h2 className="font-bold text-2xl">Categories Are : {categories.length} </h2>
            <div className="font-semibold mt-4 space-y-4 text-xl">
                {
                    categories.map(category => <Link
                        className="block "
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</Link>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;