
import useFetch from "./useFetch";

function Data() {
  let data = useFetch(`https://dummyjson.com/posts`);
  console.log(data);

  return <div>Data</div>;
}

export default Data;
