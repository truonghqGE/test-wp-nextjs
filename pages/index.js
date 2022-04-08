import React from "react";
import client from "@/api/base/axios-client";
import { GET_CATEGORY, GET_ALL_POST } from "@/api/graphql/queries";
import Link from "next/link";
import dayjs from "dayjs";

export async function getStaticProps() {
  const { data: resultPosts } = await client.query({
    query: GET_ALL_POST,
  });
  const { data: resultCategories } = await client.query({
    query: GET_CATEGORY,
  });
  const categories = resultCategories?.categories?.nodes || [];
  const posts = resultPosts?.informationalPost?.edges || [];
  return { props: { posts, categories }, revalidate: 10 * 60 * 1000 };
}

export default function Home({ posts }) {
  return (
    <div>
      <main id="content" className="cate-content">
        <div className="link-page">
          <div className="container">
            <p id="breadcrumbs">
              <span>Home</span>
            </p>{" "}
          </div>
        </div>
        <div className="container">
          <div className="author-post-2">
            <h3 className="font24">All Posts</h3>
            <div className="author-post-list the-lpost">
              {posts.map((item, index) => {
                const element = item.node;
                return (
                  <div className="home-post-big row" key={element.slug + index}>
                    <div className="post-feature col-md-4">
                      <Link href={"/post/" + element.slug}>
                        <img
                          width={300}
                          height={182}
                          src={element.featuredImage?.node?.sourceUrl}
                          className="attachment-medium size-medium wp-post-image"
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="post-info col-md-8">
                      <h4 className="post-date">
                        {/* {dayjs(element.modified)} */}
                        {dayjs(element.modified).format("MMMM D, YYYY")}
                      </h4>
                      <h3 className="post-title">
                        <Link href={"/post/" + element.slug}>
                          {element.title}
                        </Link>
                      </h3>
                      <div className="post-des">
                        <p>
                          Do you constantly have trouble staying hydrated? Take
                          a look at these Liquid IV reviews 2022 to learn if it
                          could be your solution!
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="noteLoad" attr-value={24} />
          </div>
        </div>
      </main>
      <div className="verifield"></div>
    </div>
  );
}
