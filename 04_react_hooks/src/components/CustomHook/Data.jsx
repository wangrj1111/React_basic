import React from "react";
import useFetch from "../CustomHook/useFetch";

const Data = () => {
  const { data, loading, error } = useFetch("https://api.xygeng.cn/one");

  if (loading) return <div>加载中...</div>;
  if (error) return <div>发生错误：{error}</div>;

  return (
    <div>
      <p>来源：{data.data.origin}</p>
      <p>作者：{data.data.name}</p>
      <p>标签：{data.data.tag}</p>
      <p>内容：{data.data.content}</p>
    </div>
  );
};

export default Data;
