import React, { useEffect, useState } from "react";

const useFetch =  (url) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const getData = async () => {
      let data = await fetchData();
      setData(data.posts);
    };
    getData();
  }, []);

  return data;
};

export default useFetch;
