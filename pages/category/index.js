import React, { useState, useEffect } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
const Category = () => {
  const [category, setCategory] = useState(null);
  const GET_CATEGORY = gql`
    query GraphQL {
      categories {
        nodes {
          name
          slug
          id
          uri
        }
      }
    }
  `;
  const GET_LIST_POSTS = gql`
      query GraphQL {
        informationalPost(where: { categoryName: ${category?.name} }) {
          nodes {
            title
          }
        }
      }
    `;

  const { loading, error, data } = useQuery(GET_CATEGORY);
  const [callGetListPosts, { data: listPosts }] = useLazyQuery(GET_LIST_POSTS, {
    fetchPolicy: "network-only",
  });

  const categoryList = data?.categories?.nodes;

  const getListPosts = (item) => {
    setCategory(item);
    callGetListPosts({
      variables: {
        categoryName: item.name,
      },
    });
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <p className="text-center">Catelogy</p>
        <div className="catelogy flex justify-center">
          {categoryList?.map((item) => (
            <a
              onClick={() => getListPosts(item)}
              className="nav-link mt-4"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="false"
            >
              <ul
                className="nav nav-tabs text-center"
                id="myTab"
                role="tablist"
              >
                <li className="cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">
                  {item.name}
                </li>
              </ul>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
