import React from "react";

const Category = ({ data }) => {
  const categoryList = data || [];
  return (
    <div>
      <div className="container mx-auto p-4">
        {/* <p className="text-center">Catelogy</p> */}
        <div className="catelogy flex justify-center">
          {categoryList?.map((item) => (
            <div>
              <ul
                className="nav nav-tabs text-center"
                id="myTab"
                role="tablist"
              >
                <li className="cursor-pointer rounded h-20 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">
                  {item.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center">Posts by category</p>
        {/* {postLists?.map((item) => (
          <div
            className="card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded"
            onClick={() => callGetPost(item)}
          >
            <img
              width="200"
              height="100"
              className="mr-3"
              src={
                "https://wordpress-749115-2523479.cloudwaysapps.com/" +
                item?.featuredImage?.node?.uri
              }
            ></img>
            <p className="mt-3">{item.title}</p>
          </div>
        ))} */}
        <div className="mt-8" id="content"></div>
      </div>
    </div>
  );
};
export default Category;
