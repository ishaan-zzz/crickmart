import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import "./Heromain.css";
import "./product.css";
import ProductCard from "./ProductCard";

import Title from "./Title";
import Heroitem from "./Heroitem";
import { Link } from "react-router-dom";
const Heromain = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/getproperty/get"
        ); // Replace with your API endpoint
        setProperties(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/getproperty/get"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the latest products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (products.length === 0) {
    return <div>Server Stop Working Please Check</div>;
  }

  return (
    <section className="section-all-re">
      <div className="container mx-auto">
        <div class="main">
          <div class="StartDiv">
            <div class="StartDiv_1">
              <span>
                <h2>
                  Hello! What Would <br />
                  you like to Buy
                </h2>
                <p>
                  Search between millions of Product from hundreds different
                  online shops. Our price comparsion service helps you find the
                  best deal on the market.
                </p>
                <Link to={`sproduct/${products[currentImageIndex].id}`} >
               
               
                <button>Shop Now</button>
                </Link>
              </span>
              <img
                src={`http://localhost:9000/uploads/${products[currentImageIndex].images}`}
                alt={products[currentImageIndex].name}
              />
            </div>
            <h3>New launch</h3>
            <div class="StartDiv_2">
              {products.slice(0, 3).map((product, index) => (
                <span key={index}>
                  <div>
                    <h5>{product.title}</h5>
                    <p>{product.category}</p>
                    <Link to={`sproduct/${products[currentImageIndex].id}`} >
               
               
               <button>Shop Now</button>
               </Link>
                  </div>
                  <img
                    src={`http://localhost:9000/uploads/${product.images}`}
                    alt={product.title}
                    srcSet=""
                  />
                </span>
              ))}
            </div>
          </div>

          <div id="chjjsvghcvghbsdc">
            <h3>Explore More</h3>
            <span id="cbshjavchvjaksnchsba">
            {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </span>
          </div>
         
          {/* <div id="cbhasbjkcac6784566caa">
            <h2>Our Key Features</h2>
            <div>
              <section class="cvghascxhjbjknsbh">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <h4>Easy to Use</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet nobis praesentium
                </p>
              </section>
              <section class="cvghascxhjbjknsbh">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <h4>Easy to Use</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet nobis praesentium
                </p>
              </section>
              <section class="cvghascxhjbjknsbh">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <h4>Easy to Use</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet nobis praesentium
                </p>
              </section>
              <section class="cvghascxhjbjknsbh">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <h4>Easy to Use</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet nobis praesentium
                </p>
              </section>
            </div>
          </div> */}
          {/* <div id="cvhgsvdghcghasghcgvhjaj446vsd">
            <h2>Using Conventional Methods</h2>
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZpNVONiEcHJwrzZWO088-g99APTJyqRVQvBkjAx_6w&s"
                alt=""
                srcset=""
              />
              <img
                src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png"
                alt=""
                srcset=""
              />
              <img
                src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg"
                alt=""
                srcset=""
              />
              <img
                src="https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                alt=""
                srcset=""
              />
            </span>
          </div> */}
        </div>
        {/* <Title title={title.text} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            properties.map((property) => (
              <div key={property.id}>
                <Heroitem
                  title={property.title}
                  id={property.id}
                  description={property.description}
                  iiimsrc={property.images}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Heromain;
