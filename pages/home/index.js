import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CATEGORY } from "@/api/graphql/queries";

const Home = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    fetchPolicy: "network-only",
  });

  const categoryList = data?.categories?.nodes;
  const getListPosts = (item) => {
    router.push("/category/" + item.slug);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <p className="text-center">Catelogy</p>
        <div className="catelogy flex justify-center">
          {categoryList?.map((item) => (
            <div onClick={() => getListPosts(item)}>
              <ul
                className="nav nav-tabs text-center"
                id="myTab"
                role="tablist"
              >
                <li className="cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">
                  {item.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
