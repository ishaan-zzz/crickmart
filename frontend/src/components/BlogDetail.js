


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import References from "./References";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top left corner of the window
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blogbyid/${id}`);
      setProduct(res.data);
      console.log()
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="pd-wrap py-10 font-poppins">
      <div className="container mx-auto">
        <div className="heading-section mb-8">
          <h2 className="text-3xl font-semibold">Blog Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div id="thumb" className="owl-carousel product-thumb">
              <img
                src={`http://localhost:9000/uploads/${product?.image_url}`}
                alt={product?.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name text-2xl font-semibold">
                  {product?.title}
                </div>
                <div className="reviews-counter flex items-center">
                  <div className="rate"></div>
   
                </div>
                <div className="product-price-discount mt-2">
                 
                
                </div>
              </div>
              <p className="text-gray-700 mt-4"> {product?.description}</p>

              <div className=" mt-4 flex items-center">
                <div className="mt-4 flex items-center">
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info-tabs mt-8">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="description-tab"
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Description
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p className="text-gray-700 mt-4">{product?.description}</p>
            </div>
            <div
              className="tab-pane fade"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              {/* Reviews */}
            </div>
          </div>
        </div>
      </div>

      <References />
    </div>
  );
}
