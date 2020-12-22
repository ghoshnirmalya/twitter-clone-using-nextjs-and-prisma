import React from "react";
import Head from "next/head";
import Page from "components/pages/error";
import { NextPage } from "next";

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Page statusCode={404} />
    </>
  );
};

export default Custom404Page;
