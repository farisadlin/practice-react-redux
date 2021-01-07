import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../redux/actions/article-actions";
import "./Article.scss";

const Article = ({ title, fetchArticles, articleData }) => {
  useEffect(() => {
    fetchArticles();
  }, []);

  const titleLength = Math.floor(Math.random() * articleData.articles.length)

  console.log(articleData.articles[titleLength])


  return articleData.loading ? (
    <h2 style={{ textAlign: "center" }}>Loading</h2>
  ) : articleData.error ? (
    <h2>{articleData.error}</h2>
  ) : (
    <div>
      <div className="article">
        <h1>{title}</h1>
        <div className="wrapper border">
          <div className="wrapper article">
            {articleData &&
              articleData.articles &&
              articleData.articles.slice(0, 8).map(({ title }) => 
                <p>{title}</p>
              )}
          </div>
          {/* <div className="wrapper button">
            <button>Random Title</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articleData: state.article,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
