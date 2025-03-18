import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MOVIE_API from "../api/movie";
import "../styles/MovieList.css";

const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    MOVIE_API.getMovieList({ num: currentPage, pageSize })
      .then((result) => {
        setMovies(result.newslist);
        setTotalPages(Math.ceil(result.total / pageSize));
        setLoading(false);
      })
      .catch((err) => {
        setError("获取电影列表失败：" + err.message);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) {
    return <div className="loading-container">加载中...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="movie-list-container">
      <h1>影视资讯</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => {
              navigate(`/movies/${index}`, { state: { movie } });
            }}
            style={{ cursor: "pointer" }}
          >
            {movie.picUrl && (
              <div className="movie-image">
                <img src={movie.picUrl} alt={movie.title} />
              </div>
            )}
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div className="movie-meta">
                <span>{movie.ctime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          上一页
        </button>
        <span>
          第 {currentPage} 页 / 共 {totalPages} 页
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default MovieList;
