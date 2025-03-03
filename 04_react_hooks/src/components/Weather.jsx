import React, { useState, useEffect } from "react";

const Weather = () => {
  // 定义状态变量
  const [weatherData, setWeatherData] = useState(null); // 存储天气数据
  const [loading, setLoading] = useState(false); // 加载状态
  const [error, setError] = useState(null); // 错误信息
  const [city, setCity] = useState(""); // 用户输入的城市

  // 高德天气 API 的 URL 和参数
  const apiKey = "3332a2fcdb485cffe007667949a9020c";
  const extensions = "all"; // 获取详细天气信息

  // 调用 API 函数
  const fetchWeather = async () => {
    if (!city) return; // 如果没有输入城市，不进行 API 调用

    try {
      setLoading(true); // 设置加载状态为 true
      const response = await fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?key=${apiKey}&city=${city}&extensions=${extensions}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      console.log(data); // 打印返回的数据结构，方便调试
      setWeatherData(data); // 设置天气数据
      setLoading(false); // 设置加载状态为 false
    } catch (err) {
      setError(err.message); // 设置错误信息
      setLoading(false); // 设置加载状态为 false
    }
  };

  // 使用 useEffect 监听城市变化并调用 API
  useEffect(() => {
    fetchWeather();
  }, [city]); // 依赖数组，当 city 改变时重新调用

  // 渲染组件
  return (
    <div>
      <h1>天气信息</h1>
      <div>
        <input
          type="text"
          placeholder="请输入城市"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} disabled={loading}>
          查询天气
        </button>
      </div>
      {loading && <p>正在加载天气信息...</p>}
      {error && <p style={{ color: "red" }}>加载失败：{error}</p>}
      {weatherData && (
        <div>
          <h2>当前城市：{city}</h2>
          {weatherData.forecasts.map((forecast, index) => (
            <div key={index}>
              <h3>{forecast.date}</h3>
              <h4>白天</h4>
              <p>风力：{forecast.casts[0].daypower}</p>
              <p>温度：{forecast.casts[0].daytemp}℃</p>
              <p>天气：{forecast.casts[0].dayweather}</p>
              <p>风向：{forecast.casts[0].daywind}</p>
              <h4>夜间</h4>
              <p>风力：{forecast.casts[0].nightpower}</p>
              <p>温度：{forecast.casts[0].nighttemp}℃</p>
              <p>天气：{forecast.casts[0].nightweather}</p>
              <p>风向：{forecast.casts[0].nightwind}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
