const fetchUser = async (userId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`
  );
  const data = await res.json();

  return data;
};

export default fetchUser;
