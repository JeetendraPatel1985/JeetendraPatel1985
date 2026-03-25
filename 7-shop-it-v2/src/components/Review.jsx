

function renderStars(rating) {
    return Array.from({ length: rating }, (_, index) => (
        <i key={index} style={{color: 'orange'}} className="fa fa-star"></i>
    ))
}

function Review({ review }) {
    return (
        <div className="alert alert-info">
            <h5>{review.name} - {renderStars(review.rating)}</h5>
            <p>{review.comment}</p>
            <p>{review.date}</p>
        </div>
    )
}

export default Review;