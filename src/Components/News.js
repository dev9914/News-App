import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import LoadingBar from 'react-top-loading-bar'


const News = (props)=>{
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [totalResults, setTotalResults] = useState('');
  
  const updateNews = async ()=>{
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f81c1ead20eb4fa2ac2527cd84bfb8d2&page=${page}&pageSize=9`;
    let data = await fetch(url);
    setProgress(30);
    let parseData = await data.json();
    setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setProgress(100);
  }



  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  },[]);

  const handlePrevClick = async()=>{
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f81c1ead20eb4fa2ac2527cd84bfb8d2&page=${page-1}&pageSize=9`;
    let data = await fetch(url);
    setPage(page - 1);
    setProgress(30);
    let parseData = await data.json();
    setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setProgress(100);
  }
   const handleNextClick =async()=>{
    if(page + 1 >Math.ceil({totalResults}/9)){
    }
    
    else{
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f81c1ead20eb4fa2ac2527cd84bfb8d2&page=${page+1}&pageSize=9`;
    let data = await fetch(url);
    setPage(page + 1);
    setProgress(30);
    let parseData = await data.json();
    setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setProgress(100);
    }
  }

    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop: "75px"}}>24*7 News - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt}
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.financialexpress.com/wp-content/uploads/2024/02/jacob-granneman-iYb4Cj0KNhE-unsplash-1.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={page<=1} onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={handleNextClick} disabled={page+1 >Math.ceil({totalResults}/9)} className="btn btn-dark" >Next &rarr;</button>
        </div>
      </div>
      </>
    );
}
export default News


News.defaultProps = {
  country: "in",
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  }