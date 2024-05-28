import Title from "./Title";
import { useState, useEffect } from "react";
import axios from 'axios';
import BlogItem from "./Blogitem";

const Blog = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/blog/get');
            setProperties(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    const title = {
        text: "Explore the Latest  Blog",
        description: "Explore the Latest Listings with Propertest dolor sit ame"
    };

    return (
        <section className="section-references bg-gray-100">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {properties.map((item, index) => (
                       
                        <BlogItem
                            key={index}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            iiimsrc={item.image_url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
