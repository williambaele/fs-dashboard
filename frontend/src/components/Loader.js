import React from "react";
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Rings
        height="80"
        width="80"
        color="#3b82f6"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
