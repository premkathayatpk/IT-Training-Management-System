import { IoMdTime } from "react-icons/io";
import favicon from "/favicon.png";

const Programming = () => {
  return (
    <section>
      {/* <h1 className="text-center py-5 text-2xl font-bold">
        Programming Languages
      </h1> */}
      <div className=" text-end py-2">
        <input className="border" type="text" placeholder="Filter" />
      </div>
      <div className="flex gap-18 justify-center flex-wrap">
        <div className="hover:cursor-pointer bg-green-800  w-100 rounded-xl overflow-hidden">
          <img
            className="w-[100%] h-60"
            src="https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png"
            alt=""
          />
          <div className=" py-3 px-4 space-y-2 text-white">
            <h1 className="font-bold text-2xl text-center">
              Digital Marketing
            </h1>
            <p className="text-orange-200  text-md ">
              Job-Oriented Digital Marketing Syllabus | Mode: Physical & Online
              | Duration: 3-6 Months | 2-4 Hours / Day
            </p>
            <p className="flex items-center gap-2">
              <IoMdTime />
              <p>100hr</p>
            </p>
            <div className="flex gap-3">
              <img className="h-8" src={favicon} alt="NTA" />
              <p>
                By{" "}
                <span className="text-orange-600 font-semibold text-xl">
                  NepTech Academy
                </span>{" "}
                in{" "}
                <span className="text-green-300 text-xl">
                  Digital Marketing
                </span>
              </p>
            </div>
            <button className="py-1 text-center  w-[100%] border rounded-md hover:bg-blue-500 hover:text-white text-blue-400">
              More.....
            </button>
          </div>
        </div>
        <div className="hover:cursor-pointer bg-green-800  w-100 rounded-xl overflow-hidden">
          <img
            className="w-[100%] h-60"
            src="https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png"
            alt=""
          />
          <div className=" py-3 px-4 space-y-2 text-white">
            <h1 className="font-bold text-2xl text-center">
              Digital Marketing
            </h1>
            <p className="text-orange-200  text-md ">
              Job-Oriented Digital Marketing Syllabus | Mode: Physical & Online
              | Duration: 3-6 Months | 2-4 Hours / Day
            </p>
            <p className="flex items-center gap-2">
              <IoMdTime />
              <p>100hr</p>
            </p>
            <div className="flex gap-3">
              <img className="h-8" src={favicon} alt="NTA" />
              <p>
                By{" "}
                <span className="text-orange-600 font-semibold text-xl">
                  NepTech Academy
                </span>{" "}
                in{" "}
                <span className="text-green-300 text-xl">
                  Digital Marketing
                </span>
              </p>
            </div>
            <button className="py-1 text-center  w-[100%] border rounded-md hover:bg-blue-500 hover:text-white text-blue-400">
              More.....
            </button>
          </div>
        </div>
        <div className="hover:cursor-pointer bg-green-800  w-100 rounded-xl overflow-hidden">
          <img
            className="w-[100%] h-60"
            src="https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png"
            alt=""
          />
          <div className=" py-3 px-4 space-y-2 text-white">
            <h1 className="font-bold text-2xl text-center">
              Digital Marketing
            </h1>
            <p className="text-orange-200  text-md ">
              Job-Oriented Digital Marketing Syllabus | Mode: Physical & Online
              | Duration: 3-6 Months | 2-4 Hours / Day
            </p>
            <p className="flex items-center gap-2">
              <IoMdTime />
              <p>100hr</p>
            </p>
            <div className="flex gap-3">
              <img className="h-8" src={favicon} alt="NTA" />
              <p>
                By{" "}
                <span className="text-orange-600 font-semibold text-xl">
                  NepTech Academy
                </span>{" "}
                in{" "}
                <span className="text-green-300 text-xl">
                  Digital Marketing
                </span>
              </p>
            </div>
            <button className="py-1 text-center  w-[100%] border rounded-md hover:bg-blue-500 hover:text-white text-blue-400">
              More.....
            </button>
          </div>
        </div>
        <div className="hover:cursor-pointer bg-green-800  w-100 rounded-xl overflow-hidden">
          <img
            className="w-[100%] h-60"
            src="https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png"
            alt=""
          />
          <div className=" py-3 px-4 space-y-2 text-white">
            <h1 className="font-bold text-2xl text-center">
              Digital Marketing
            </h1>
            <p className="text-orange-200  text-md ">
              Job-Oriented Digital Marketing Syllabus | Mode: Physical & Online
              | Duration: 3-6 Months | 2-4 Hours / Day
            </p>
            <p className="flex items-center gap-2">
              <IoMdTime />
              <p>100hr</p>
            </p>
            <div className="flex gap-3">
              <img className="h-8" src={favicon} alt="NTA" />
              <p>
                By{" "}
                <span className="text-orange-600 font-semibold text-xl">
                  NepTech Academy
                </span>{" "}
                in{" "}
                <span className="text-green-300 text-xl">
                  Digital Marketing
                </span>
              </p>
            </div>
            <button className="py-1 text-center  w-[100%] border rounded-md hover:bg-blue-500 hover:text-white text-blue-400">
              More.....
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programming;
