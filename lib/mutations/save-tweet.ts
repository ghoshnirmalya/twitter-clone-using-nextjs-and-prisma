const saveTweet = async (body: any) => {
  const res = await fetch("/api/tweets", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export default saveTweet;
