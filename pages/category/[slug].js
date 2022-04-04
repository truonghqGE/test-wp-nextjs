import React from "react";
import client from "@/api/base/axios-client";
import {
  GET_CATEGORY,
  GET_LIST_POSTS,
  GET_CATEGORY_BY_SLUG,
} from "@/api/graphql/queries";
import moment from "moment";
import Link from "next/link";

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_CATEGORY });
  const paths = data.categories.nodes.map((element) => ({
    params: { ...element, slug: element.name },
  }));
  return { paths: paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data: resultCategory } = await client.query({
    query: GET_CATEGORY_BY_SLUG,
    variables: { slug: params.slug },
  });
  const category = resultCategory.categories.edges[0]?.node || {};
  const { data: resultPosts } = await client.query({
    query: GET_LIST_POSTS,
    variables: { categoryName: category.name },
  });
  const { data: resultCategories } = await client.query({
    query: GET_CATEGORY,
  });
  const categories = resultCategories?.categories?.nodes || [];
  const posts = resultPosts?.informationalPost?.nodes || [];
  return { props: { posts, category, categories, fallback: true } };
}

export default function Home(props) {
  const { posts, category, categories } = props;
  return (
    <div>
      <div
        className="banner-page"
        style={{
          backgroundImage:
            'url("https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/09/Nutrition1.jpg")',
        }}
      >
        <div className="container">
          <div className="info text-center">
            <h1>{category?.name}</h1>
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
                    {category?.name}
                  </span>
                </span>
              </span>
            </p>{" "}
          </div>
        </div>
        <div className="container">
          <div className="author-post-2">
            <h3 className="font24">{category?.name}</h3>
            <div className="author-post-list the-lpost">
              {posts?.map((item) => (
                <Link href={`/post/${item?.slug}`}>
                  <div className="home-post-big row" key={item.id}>
                    <div className="post-feature col-md-4">
                      <img
                        width={300}
                        height={182}
                        src={`https://wordpress-749115-2523479.cloudwaysapps.com/${item?.featuredImage?.node?.uri}`}
                        className="attachment-medium size-medium wp-post-image"
                        alt=""
                        loading="lazy"
                      />{" "}
                    </div>
                    <div className="post-info col-md-8">
                      <h4 className="post-date">
                        {moment(item?.date).format("DD/MM/YYYY")}
                      </h4>
                      <h3 className="post-title">{item?.title}</h3>
                      <div className="post-des">
                        <p>
                          Do you constantly have trouble staying hydrated? Take
                          a look at these Liquid IV reviews 2022 to learn if it
                          could be your solution!
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="noteLoad" attr-value={24} />
          </div>
        </div>
      </main>
      <div className="verifield"></div>
    </div>
  );
}
