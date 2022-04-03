import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_LIST_POSTS } from "@/api/graphql/queries";
import moment from "moment";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [callGetListPosts, { data: listPosts }] = useLazyQuery(GET_LIST_POSTS, {
    fetchPolicy: "cache-and-network",
  });
  const postLists = listPosts?.informationalPost?.nodes;
  useEffect(() => {
    if (slug) {
      callGetListPosts({
        variables: {
          categoryName: slug,
        },
      });
    }
  }, [slug]);

  const callGetPost = (item) => {
    router.push(`/post/${slug}/${item.slug}`)
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <p className="text-center">Posts by category</p>
        <div
          className="banner-page"
          style={{
            backgroundImage:
              'url("https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/09/Nutrition1.jpg")',
          }}
        >
          <div className="container">
            <div className="info text-center">
              <h1>Nutrition</h1>
              <div className="des" />
            </div>
          </div>
        </div>
        <main id="content" className="cate-content">
          <div className="link-page">
            <div className="container">
              <p id="breadcrumbs">
                <span>
                  <span>
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/">
                      Home
                    </a>{" "}
                    »{" "}
                    <span className="breadcrumb_last" aria-current="page">
                      Nutrition
                    </span>
                  </span>
                </span>
              </p>{" "}
            </div>
          </div>
          <div className="container">
            <div className="author-post-2">
              <h3 className="font24">Nutrition</h3>
              <div className="author-post-list the-lpost">
                {postLists?.map((item) => (
                  <div
                    className="home-post-big row"
                    onClick={() => callGetPost(item)}
                  >
                    <div className="post-feature col-md-4">
                      <img
                        width={300}
                        height={182}
                        src={`https://wordpress-749115-2523479.cloudwaysapps.com/"${item?.featuredImage?.node?.uri}`}
                        className="attachment-medium size-medium wp-post-image"
                        alt=""
                        loading="lazy"
                      />{" "}
                    </div>
                    <div className="post-info col-md-8">
                      <h4 className="post-date">
                        {moment(item.date).format("DD/MM/YYYY")}
                      </h4>
                      <h3 className="post-title">{item.title}</h3>
                      <div className="post-des"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="noteLoad" attr-value={24} />
            </div>
          </div>
        </main>
        <div className="verifield"></div>
      </div>
      {/* {postLists?.map((item) => (
          <div
            className="card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded"
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
  );
};
export default Category;
