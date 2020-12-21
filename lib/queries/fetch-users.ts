const fetchUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const data = await res.json();

  return data;
};

export default fetchUsers;
