import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/users";
import fetchUsers from "lib/queries/fetch-users";
import queryClient from "lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const MyAccountPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("users", fetchUsers);
  const [session] = useSession();

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>All users</title>
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
