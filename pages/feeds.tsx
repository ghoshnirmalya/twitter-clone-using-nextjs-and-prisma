import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/feeds";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React from "react";

const FeedsPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  session,
}) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Feeds Page</title>
      </Head>
      <Page />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default FeedsPage;
