import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Contact = () => {
  // State for form fields
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key]);
      }
      setLoading(true);

      const response = await axios.post(
        "http://localhost:9000/contact",
        params
      );
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Thank you for Contact us",
        text: "send your response shortly",
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });

      setFormData({
        name: "",
        phone: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    // <section className="contact  bg-gray-100">
    //   <div className="page-top text-center">
    //     <div className="container">
    //       <h1 className="page-title">Contact</h1>
    //       <h2 className="page-description">Contact</h2>
    //     </div>
    //   </div>
    //   <div className="page-content">
    //     <div className="container mx-auto">
    //       <div className="lg:flex lg:justify-center bg-gray-100 ">
    //         <div className="lg:w-1/2 bg-white shadow-md p-5">
    //           <div className="lg:mx-auto lg:w-4/5">
    //             <form onSubmit={handleSubmit}>
    //               <div className="lg:flex lg:flex-wrap lg:-mx-4 mt-8">
    //                 <div className="lg:w-full px-4 mb-4">
    //                   <label className="block mb-1">Name Surname</label>
    //                   <input
    //                     type="text"
    //                     className="inp-contact w-full"
    //                     name="name"
    //                     value={formData.name}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>
    //                 <div className="lg:w-1/2 px-4 mb-4">
    //                   <label className="block mb-1">Phone</label>
    //                   <input
    //                     type="text"
    //                     className="inp-contact w-full"
    //                     name="phone"
    //                     value={formData.phone}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>
    //                 <div className="lg:w-1/2 px-4 mb-4">
    //                   <label className="block mb-1">Email</label>
    //                   <input
    //                     type="text"
    //                     className="inp-contact w-full"
    //                     name="email"
    //                     value={formData.email}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>
    //                 <div className="lg:w-full px-4 mb-4">
    //                   <label className="block mb-1">Subject</label>
    //                   <input
    //                     type="text"
    //                     className="inp-contact w-full"
    //                     name="subject"
    //                     value={formData.subject}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>
    //                 <div className="lg:w-full px-4 mb-4">
    //                   <label className="block mb-1">Message</label>
    //                   <textarea
    //                     type="text"
    //                     className="ta-contact w-full"
    //                     rows="4"
    //                     name="message"
    //                     value={formData.message}
    //                     onChange={handleInputChange}
    //                   ></textarea>
    //                 </div>
    //                 <div className="lg:w-full px-4 mb-4">
    //                   <button
    //                     type="submit"
    //                     className="btn-contact w-full"
    //                     disabled={loading}
    //                   >
    //                     {loading ? "Send Messg..." : "Send Message"}
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
        <div className="container mx-auto px-4 my-5" >
      <div className="flex flex-col lg:flex-row">
        
        <div className="contact-info w-full lg:w-1/2">
          <div className="contact-info-item flex items-start mb-4">
            <div className="contact-info-icon text-2xl mr-4">
              <i className="fas fa-home"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className="text-lg font-semibold">Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota,<br/> 55060</p>
            </div>
          </div>
          
          <div className="contact-info-item flex items-start mb-4">
            <div className="contact-info-icon text-2xl mr-4">
              <i className="fas fa-phone"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div className="contact-info-item flex items-start mb-4">
            <div className="contact-info-icon text-2xl mr-4">
              <i className="fas fa-envelope"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className="text-lg font-semibold">Email</h4>
              <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form w-full lg:w-1/2 mt-8 lg:mt-0">
          <form action="" id="contact-form" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Send Message</h2>
            <div className="input-box relative">
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="fullName" />
              <span className="absolute left-4 top-0 transform -translate-y-1/2 bg-white px-1 text-gray-600">Full Name</span>
            </div>
            
            <div className="input-box relative">
              <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="email" />
              <span className="absolute left-4 top-0 transform -translate-y-1/2 bg-white px-1 text-gray-600">Email</span>
            </div>
            
            <div className="input-box relative">
              <textarea required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="message"></textarea>
              <span className="absolute left-4 top-0 transform -translate-y-1/2 bg-white px-1 text-gray-600">Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="submit" value="Send" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" name="submit" />
            </div>
          </form>
        </div>
        
      </div>
    </div>

    </>
  );
};

export default Contact;
