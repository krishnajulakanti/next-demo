export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <h1>Product details of {params.productId}</h1>
    );
}
