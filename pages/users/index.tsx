import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/users";
import fetchUsers from "lib/queries/fetch-users";
import queryClient from "lib/react-query-client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const MyAccountPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  session,
}) => {
  const { data } = useQuery("users", fetchUsers);

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>My Account Page</title>
      </Head>
      <Page users={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  await queryClient.prefetchQuery("users", fetchUsers);

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyAccountPage;
