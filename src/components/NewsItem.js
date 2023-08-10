import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/08/04/1600x900/hardik-rona-dhona_1691148488696_1691148503762.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...<span className="badge bg-secondary">New</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem