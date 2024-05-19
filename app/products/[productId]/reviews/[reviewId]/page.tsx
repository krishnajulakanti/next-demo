export default function ReviewDetails({ params }: { params: { productId: string; reviewId: string; } }) {
    return (
        <h1>Review details of {params.productId} is {params.reviewId}</h1>
    );
}
