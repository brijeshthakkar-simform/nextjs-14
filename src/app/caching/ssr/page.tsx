const getRandomNumber = async () => {
  const response = await fetch("http://localhost:3000/api/random", {
    // cache: 'no-store',
    // cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

const CachingSSR = async () => {
  const { random } = await getRandomNumber();
  return (
    <div>
      <div>Caching: Server Side Rendering</div>
      <div>{random}</div>
    </div>
  );
};

export default CachingSSR;
