const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tweets`);
  const data = await res.json();

  return data;
};

export default fetchTweets;
