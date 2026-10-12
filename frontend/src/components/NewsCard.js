function NewsCard({ news, onClick }) {
    const imageUrl = news.image || news.urlToImage;

    return (
        <div
            className="news-card"
            onClick={() => onClick(news)}
        >
            {imageUrl ? (
                <img
                    className="news-image"
                    src={imageUrl}
                    alt={news.title || "News"}
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            ) : (
                <div className="news-image-placeholder">
                    Image not available
                </div>
            )}

            <div className="news-content">
                <div className="news-info">
                    <span>{news.category || "News"}</span>
                    <span>{news.date || news.publishedAt || ""}</span>
                </div>

                <h3>{news.title || "Untitled News"}</h3>

                <p>
                    {news.description || "No description available."}
                </p>

                <div className="news-source">
                    {typeof news.source === "object"
                        ? news.source?.name || "Newsly"
                        : news.source || "Newsly"}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;