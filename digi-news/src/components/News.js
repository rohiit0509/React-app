import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false);

  }
  const capitalizeFirstLetter=(string)=>{
 return string.charAt(0).toUpperCase()+string.slice(1);
  }

  useEffect(() => {
    updateNews();
    document.title=`${capitalizeFirstLetter(props.category)}-DigiNews`
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
  return (
    <div className='continer my-5'>
      <h2 className='text-center' style={{marginTop:"90px"}}>DigiNews-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.elngth !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <Newsitems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}


          </div>
        </div>
      </InfiniteScroll>
    </div>
  )


}
export default News