import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //使用useEffect来获取数据
  useEffect(() => {
    //执行fetch 请求，从api 获取数据，会在组件加载完成后执行一次
    fetch("https://api.xygeng.cn/one")
      .then(
        //处理响应的结果
        (response) => {
          if (!response.ok) {
            throw new Error("网络错误加载失败");
          }
          return response.json();
        }
      )
      .then((json) => {
        if (json.code === 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "数据加载失败");
        }
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  //如果数据加载成功，返回数据
  return (
    <div>
      <p>来源：{data.origin}</p>
      <p>作者：{data.name}</p>
      <p>标签：{data.tag}</p>
      <p>内容：{data.content}</p>
    </div>
  );
};

export default FetchData;
