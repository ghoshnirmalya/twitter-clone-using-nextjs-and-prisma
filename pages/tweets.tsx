import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/tweets";
import fetchTweets from "lib/queries/fetch-tweets";
import queryClient from "lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const TweetsPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("tweets", fetchTweets, {
    refetchInterval: 5000,
  });
  const [session] = useSession();

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Tweets Page</title>
      </Head>
      <Page tweets={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  await queryClient.prefetchQuery("tweets", fetchTweets);

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TweetsPage;
