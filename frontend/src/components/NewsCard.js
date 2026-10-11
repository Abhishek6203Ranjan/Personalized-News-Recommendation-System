function NewsCard({ news, onClick }) {
    return (
        <div
            className="news-card"
            onClick={() => onClick(news)}
        >

            <img
                className="news-image"
                src={news.image}
                alt={news.title}
            />

            <div className="news-content">

                <div className="news-info">
                    <span>{news.category}</span>
                    <span>{news.date}</span>
                </div>

                <h3>{news.title}</h3>

                <p>{news.description}</p>

                <div className="news-source">
                    {news.source}
                </div>

            </div>

        </div>
    );
}

export default NewsCard;