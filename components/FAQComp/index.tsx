import React, { useState } from "react";
import {MdOutlineKeyboardArrowDown ,MdKeyboardArrowUp} from "react-icons/md"
const FAQComp = (item: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className="font-['Manrope']">
      <div
        className="relative p-4 border"
      >
        <button
          type="button"
          className="w-full flex justify-between text-left items-center"          
          onClick={() => {
            setShow(!show);
          }}
        >
          <div
            className="font-semibold text-md lg:text-lg"
          >
            {item?.q}
          </div>
          <div>
            {show ? (
              <div>
                <MdKeyboardArrowUp />
              </div>
            ) : (
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
            )}
          </div>
        </button>
        <div
          style={{ maxHeight: show ? "200px" : 0 }}
          onClick={() => setShow(!open)}
          className="
           overflow-auto transition-max-height duration-700 rounded-md  ease-in-out cursor-pointer"
        >
          <div className=" default:text-sm text-lg">{item?.a}</div>
        </div>
      </div>
    </div>
  );
};
export default FAQComp;
