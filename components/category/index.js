import Link from "next/link";
import React from "react";

const Category = ({ data }) => {
  const categoryList = data || [];
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="catelogy flex justify-center">
          {categoryList?.map((item) => (
            <Link href={"/category/" + item.slug}  key={item.name}>
              <div className="cursor-pointer rounded h-20 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center">Posts by category</p>
        <div className="mt-8" id="content"></div>
      </div>
    </div>
  );
};
export default Category;
