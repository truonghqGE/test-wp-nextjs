import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CATEGORY, GET_LIST_POSTS } from "@/api/graphql/queries";

const Category = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    fetchPolicy: "network-only",
  });
  const [callGetListPosts, { data: listPosts }] = useLazyQuery(GET_LIST_POSTS, {
    fetchPolicy: "cache-and-network",
  });

  const categoryList = data?.categories?.nodes;
  const postLists = listPosts?.informationalPost?.nodes;
  const getListPosts = (item) => {
    // router.push("/category/" + item.slug);
    callGetListPosts({
      variables: {
        categoryName: item.name,
      },
    });
  };
  const callGetPost = (item) => {
    var content = document.getElementById("content");
    content.innerHTML = item.content;
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
        <p className="text-center">Posts by category</p>
        {postLists?.map((item) => (
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
        ))}
        <div className="mt-8" id="content"></div>
      </div>
    </div>
  );
};
export default Category;
