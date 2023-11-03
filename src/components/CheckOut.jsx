import img from "../images//course-image.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
  const notify = () => {
    toast.success('Thank you for purchasing this course! ❤️✅', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  return (
    <div className="mx-4 h-auto">
      <header className="text-center my-5 py-4 text-2xl font-bold border-2 border-black-300 rounded-tl-xl rounded-tr-xl">
        <h1>Checkout</h1>
      </header>

      <div className="main mx-5">
        <div className="top-header py-5 px-10 text-gray-300 text-xl font-bold border-2 rounded-lg flex justify-between items-center">
          <div className="first flex items-center gap-3 text-[#782da8]">
            <p className="rounded-full px-4 py-2 text-white bg-[#782da8]">1</p>
            <p>Apply Offers</p>
          </div>
          <div className="second flex items-center gap-3">
            <p className="rounded-full px-4 py-2 text-white bg-gray-300">2</p>
            <p>Fill Details</p>
          </div>
          <div className="third flex items-center gap-3">
            <p className="rounded-full px-4 py-2 text-white bg-gray-300">3</p>
            <p>Payments</p>
          </div>
        </div>
        <div className="two-box flex my-5 gap-3 font-medium text-xl">
          <div className="left-box w-2/4 border-2 rounded-lg">
            <div className="flex justify-between px-5 py-4 border-b-2">
              <h1>Enter Coupon Code</h1>
              <h1 className="text-[#d8bbf3]">APPLY</h1>
            </div>
            <h1 className="px-5 my-5">Available Offers</h1>
            <div className="flex flex-col gap-4 text-[#af43f6] mx-5">
              <div className="first-offer flex flex-col gap-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-md py-1">
                <div className="flex justify-between border-b-2 border-gray-300 pb-2 border-dashed px-3">
                  <p className="border-[#af43f6] border-2 border-dashed text-sm rounded-xl px-3 ">
                    XYZU
                  </p>
                  <button className="bg-[#af43f6] text-white rounded-xl text-sm px-4">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between px-3 ">
                  <p>Flat ₹50 OFF</p>
                  <p className="text-gray-500 text-sm">
                    Expire On: <span>10-12-2023</span>
                  </p>
                </div>
              </div>
              <div className="second-offer flex flex-col gap-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-md py-1">
                <div className="flex justify-between border-b-2 border-gray-300 pb-2 border-dashed px-3">
                  <p className="border-[#af43f6] border-2 border-dashed text-sm rounded-xl px-3 ">
                    XYZU
                  </p>
                  <button className="bg-[#af43f6] text-white rounded-xl text-sm px-4 py-">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between px-3">
                  <p>Flat ₹50 OFF</p>
                </div>
              </div>
              <div className="third-offer flex flex-col gap-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-md py-1 mb-7">
                <div className="flex justify-between border-b-2 border-gray-300 pb-2 border-dashed px-3">
                  <p className="border-[#af43f6] border-2 border-dashed text-sm rounded-xl px-3">
                    XYZU
                  </p>
                  <button className="bg-[#af43f6] text-white rounded-xl text-sm px-4">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between px-3">
                  <p>Flat ₹50 OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-box w-2/4 border-2 rounded-lg">
            <div className="flex justify-between px-5 py-4 border-b-2">
              <h1>Order Details</h1>
            </div>
            <div>
              <div className="flex gap-4 mx-4 my-2 border-b-2 pb-5">
                <img className="w-2/6 h-30 rounded-md" src={img} alt="1" />
                <div className="text-sm">
                  <p>JAVA Full Stack Development Course by Jeevan</p>
                  <p>
                    All students Eligibile in this course 2023: enroll now :
                    book
                  </p>
                  <p className="text-[#af43f6] text-sm my-2">
                    (Validity 12 Months)
                  </p>
                  <div className="flex gap-7">
                    <p className="text-xl font-bold">
                      ₹2450 <span className="text-gray-500 text-lg">only</span>
                    </p>
                    <p className="text-gray-300 text-lg">
                      ₹5990 <span className="text-green-600">55% OFF</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-5">
                <h1 className="text-xl mx-3">Payable Amount</h1>
                <div className="flex flex-col gap-1 my-2 mx-3 px-3 py-2 text-base shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-md">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>₹ 5990</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-green-600">Discount(Coupan WIN55)</p>
                    <p>-₹ 3540</p>
                  </div>
                  <div className="flex justify-between border-t-2">
                    <p>To Pay</p>
                    <p>₹ 2450</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  className="bg-[#af43f6] text-white text-base py-2 my-3 mx-5 px-60 text-center rounded-2xl"
                  onClick={notify}
                >
                  Continue
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
