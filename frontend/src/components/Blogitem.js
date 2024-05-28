import { Link } from "react-router-dom";

const BlogItem = ({ id, description, iiimsrc, title }) => {
    console.log(id)
    return (
        <div id={id}  className="col-lg-4 md:col-6 xl:col-3 mb-4 " >
            <div className="blog-item border border-gray-200 rounded overflow-hidden">
                <div className="blog-img">
                    <img src={`http://localhost:9000/uploads/${iiimsrc}`} alt="product" className="w-full h-auto" />
                </div>
                <div className="blog-content p-4">
                    <h2 className="blog-title">
                        <Link to={`/blog/${id}`} className="text-xl font-semibold hover:text-blue-500">{title} rrwrrrr</Link>
                    </h2>
                    <div className="blog-text mt-2">
                        <p className="text-sm text-gray-700">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
