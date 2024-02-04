import React from "react";

const ServiceBtn = ({ service }) => {
  return (
    <div>
      <button className="rounded-md bg-[#3C39C6] p-1 text-xs uppercase text-white duration-300 hover:bg-white hover:text-[#3c39c6]">
        {service}
      </button>
    </div>
  );
};

export default ServiceBtn;
