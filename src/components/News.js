import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `FastNews - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
        updateNews();
    },[])


    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

        return (
            <div className='container mt-4 100v'>
                <h1 className='text-center mb-4'>FastNews - <small>Top headlines of the day in {props.category} category!</small></h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner />} >
                    <div className='container row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title !== null ? element.title.slice(0, 45) : element.title} description={element.description !== null ? element.description.slice(0, 85) : element.description} imglink={element.urlToImage ? element.urlToImage : "data:image/jpeg;base64,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"} artcllink={element.url} source={element.source.name} author={element.author} time={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
}

News.defaultProps = {
    pageSize: '10',
    country: 'in',
    category: 'general',
    apiKey: '048f5034da8d4e9884a814e1f57d7079'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string
}