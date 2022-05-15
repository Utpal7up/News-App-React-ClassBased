import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { title, description, imageURL, url, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: "0"}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageURL ? "https://static01.nyt.com/images/2022/05/02/us/02TRUMP-ATLANTA01/02TRUMP-ATLANTA01-facebookJumbo.jpg" : imageURL} className="card-img-top" alt="..." />  {/*Setting default imageUrl with if else*/}
                    <h5 className="card-title">{title}... </h5>
                    <div className="card-body">
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                        </small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Open link</a>
                    </div>
                </div>
            </div>
        )
    }
}
