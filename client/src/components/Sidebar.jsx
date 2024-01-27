import React from "react";
import { IoMdClose } from "react-icons/io";
const Sidebarsss = () => {
  return (
    <div className="fixed right-0 top-0 z-40 h-full w-96 border border-white bg-black">
      <div className=" border">
        <div className="size-8 p-5">
          <IoMdClose className="text-2xl" />
        </div>
        <ul className="flex flex-col gap-5 p-5 text-white">
          <li>
            Home <hr />
          </li>

          <li>
            Seo <hr />
          </li>
          <li>
            About <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebarsss;
