import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import axiosClient from "@/api/base/axios-client";
import HomePage from "./home";
export default function Home() {
  return <HomePage></HomePage>;
}
