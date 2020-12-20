import { PrismaClient } from "@prisma/client";
import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/tweets";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React from "react";

const prisma = new PrismaClient();

const TweetsPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  session,
  tweets,
}) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Tweets Page</title>
      </Head>
      <Page tweets={tweets} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const tweets = await prisma.tweet.findMany({
    include: {
      author: true,
    },
  });

  return {
    props: {
      session,
      tweets,
    },
  };
};

export default TweetsPage;
