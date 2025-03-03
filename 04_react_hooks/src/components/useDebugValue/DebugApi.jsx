import { useState, useEffect, useDebugValue } from "react";

function useApi(url) {
  const [data, setData] = useState(null);
  useDebugValue(data ? "Data Loaded" : "Loading");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);

  return data;
}

const DebugApi = () => {
  const data = useApi("https://api.xygeng.cn/one");

  if (!data) return <p>加载中...</p>;
  return (
    <div>
      <h2>{data.data.content}</h2>
      <p>来源：{data.data.origin}</p>
      <p>作者：{data.data.name}</p>
      <p>标签：{data.data.tag}</p>
    </div>
  );
};

export default DebugApi;
