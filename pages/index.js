<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
// import { useAuth } from "hooks";
import axiosClient from "@/api/base/axios-client";
=======
import React from "react";
>>>>>>> 888b479f84f83131dc10fcb9177b7220fb3e4f95

export default function Home() {
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
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/liquid-iv-reviews">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/03/Liquid-IV-Reviews-2022-Pros-Cons-Is-It-Safe-330x200.jpg"
                      className="attachment-medium size-medium wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">March 11, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/liquid-iv-reviews">
                      Liquid IV Reviews 2022: Pros, Cons &amp; Is It Safe?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      Do you constantly have trouble staying hydrated? Take a
                      look at these Liquid IV reviews 2022 to learn if it could
                      be your solution!
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/goli-ashwagandha-reviews">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/Goli-Ashwagandha-reviews-330x200.jpeg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="Goli Ashwagandha reviews"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 26, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/goli-ashwagandha-reviews">
                      Goli Ashwagandha Reviews 2022: Do Goli Ashwa Gummies Work?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      If you are wondering how Goli Ashwagandha works, open this
                      link and read the detailed review which covers all the
                      important information 2022.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/skinny-fit-reviews">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/skinny-fit-reviews-330x200.jpg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="Skinny Fit Reviews"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 26, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/skinny-fit-reviews">
                      SkinnyFit Detox Tea Reviews 2022: Does It Work?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      It fights bloating and contains several beneficial
                      superfoods 2022. Read on to find out all there is to know
                      about SkinnyFit Detox Tea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/how-lose-weight-after-gallbladder-removal">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/12/Diet-Tips-To-Lose-Weight-After-Gallbladder-Removal-330x200.jpg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="Diet Tips To Lose Weight After Gallbladder Removal"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 20, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/how-lose-weight-after-gallbladder-removal">
                      Diet Tips To Lose Weight After Gallbladder Removal
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      A low-fat diet and healthy eating patterns ensure healthy
                      weight post- gallbladder removal surgery. Let’s read more
                      about the diet tips to maintain a healthy weight. 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/best-greens-powder">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/01/Best-Greens-Powders-330x200.jpeg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="Best Greens Powders"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 20, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/best-greens-powder">
                      5 Best Greens Powders of 2022: Top Superfood Pills To Buy
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      If you want to have a healthier life, you may want to
                      include green powders in your diet 2022. Here are the 5
                      best greens powders to get started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/how-long-does-intermittent-fasting-take-to-work">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/How-Long-Does-Intermittent-Fasting-Take-To-Work-330x200.jpeg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="How Long Does Intermittent Fasting Take To Work"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 19, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/how-long-does-intermittent-fasting-take-to-work">
                      How Long Does Intermittent Fasting Take To Work?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      People are always searching for different health and
                      fitness trends to try. Among the most popular is
                      intermittent fasting 2022.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/athletic-greens-review">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/12/athletic-greens-review-330x200.jpeg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="Athletic Greens Review"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">February 18, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/reviews/athletic-greens-review">
                      Athletic Greens Review 2022: Is It Worth Buying?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      Want to find out if this green powder drink is worth your
                      coin 2022? Hop right in for a comprehensive Athletic
                      Greens review.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/what-you-drink-during-intermittent-fasting">
                    <img
                      width={300}
                      height={182}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/10/Drink-During-Intermittent-Fasting-330x200.jpg"
                      className="attachment-medium size-medium wp-post-image"
                      alt="what can you drink during intermittent fasting"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">January 26, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/what-you-drink-during-intermittent-fasting">
                      7 Beverages You Can Drink During Intermittent Fasting
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      The best calorie-free beverages that you can drink while
                      intermittent fasting includes water, coffee, tea, and
                      apple cider vinegar 2022.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/super-green-tonik-review">
                    <img
                      width={750}
                      height={420}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/01/SuperGreen-TONIK-Review.jpeg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt="SuperGreen TONIK Review"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">January 23, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/super-green-tonik-review">
                      SuperGreen TONIK Review 2022: Natural Green Superfood
                      Powder
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      The Supergreen Tonik supplement may help improve your
                      health in many ways 2022. It is time to try and see just
                      how much it can benefit you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/round_up/reviews/best-fruit-vegetable-supplements">
                    <img
                      width={750}
                      height={420}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/12/Best-Fruit-And-Vegetable-Supplements-.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt="Best Fruit And Vegetable Supplements"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">January 8, 2022</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/round_up/reviews/best-fruit-vegetable-supplements">
                      5 Best Fruit And Vegetable Supplements 2022
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      Reach your daily fruit and vegetable consumption
                      requirement on the go with the best fruit and vegetable
                      supplements you can find 2022.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/balance-of-nature-reviews">
                    <img
                      width={750}
                      height={420}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/11/Balance-Of-Nature-Reviews.jpeg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt="Balance Of Nature Reviews"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">November 12, 2021</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/balance-of-nature-reviews">
                      Balance Of Nature Review 2022: Is It Worth Buying Or A
                      Scam?
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      In this 2022 piece, we examine all of the Balance of
                      Nature pills and tell you if they're valuable as your
                      hard-earned investment or not.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-post-big row">
                <div className="post-feature col-md-4">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/gundry-md-olive-oil">
                    <img
                      width={751}
                      height={420}
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2021/10/Gundry-MD-olive-oil.jpeg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt="Gundry MD olive oil"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="post-info col-md-8">
                  <h4 className="post-date">October 4, 2021</h4>
                  <h3 className="post-title">
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/single_reviews/reviews/gundry-md-olive-oil">
                      Gundry MD Olive Oil 2022: Polyphenol-rich Oil Result
                      Reviews
                    </a>
                  </h3>
                  <div className="post-des">
                    <p>
                      Gundry MD Olive Oil was created by Dr. Steven Grundy 2022.
                      It is an extra virgin olive oil having 30x more
                      polyphenols than regular olive oil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="noteLoad" attr-value={24} />
          </div>
        </div>
      </main>
      <div className="verifield"></div>
    </div>
  );
}
