import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // 在实际应用中，这里应该从列表页传递电影数据或通过API获取
    const movieData = window.history.state?.movie;
    if (movieData) {
      setMovie(movieData);
    } else {
      navigate("/movies");
    }
  }, [id, navigate]);

  if (!movie) {
    return <div className="loading-container">加载中...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-card">
        <button className="back-button" onClick={() => navigate("/movies")}>
          返回列表
        </button>
        {movie.picUrl && (
          <div className="movie-detail-image">
            <img src={movie.picUrl} alt={movie.title} />
          </div>
        )}
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <div className="movie-detail-meta">
            <span>发布时间：{movie.ctime}</span>
          </div>
          <div className="movie-detail-description">
            <p>{movie.description}</p>
          </div>
          {movie.source && (
            <div className="movie-detail-source">
              <span>来源：{movie.source}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
