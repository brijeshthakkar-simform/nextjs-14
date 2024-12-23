"use client";

import { useEffect, useState } from "react";

const CachingSSR = () => {
  const [number, setNumber] = useState();

  const getRandomNumber = async () => {
    const response = await fetch("http://localhost:3000/api/random", {
      // cache: 'force-cache',
      // cache: 'no-store',
    });
    const data = await response.json();
    setNumber(data?.random);
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  return (
    <div>
      <div>Caching: Client Side</div>
      <div>{number}</div>
    </div>
  );
};

export default CachingSSR;
