import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState, useEffect } from "react";

const ProductDetails = () => {
    const axiosPublic = useAxios();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get(`/product/${id}`);
                setProduct(response.data); // Assuming response contains product details
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
        };
    }, [axiosPublic, id]);

    if (loading) {
        return <div>
            <div className="flex flex-col gap-4 w-52">
  <div className="skeleton h-72 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
        </div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {product && (
                <>
                    <div className="container mx-auto py-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt="Product"
            className="w-[75%] rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-4">Color: {product.color}</p>
            <p className="text-gray-800 mb-4">
              Description: {product.description}.
            </p>
          </div>
          <div className="flex flex-col ">
            <div>
              <p className="text-gray-600 mb-2">Features:</p>
              <ul className="list-disc ml-6 text-gray-800">
                <li>{product.feature}</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Price:</p>
              <p className="text-2xl font-semibold text-green-600">$99.99</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-2">In Stock: {product.stock}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
