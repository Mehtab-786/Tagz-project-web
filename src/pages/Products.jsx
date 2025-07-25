import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

function Products() {
  const { products } = useSelector((state) => state.ProductReducer);

  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mt-10">
        {products?.map((item, idx) => (
          <Suspense
            key={idx}
            fallback={
              <div className="w-64 h-80 flex items-center justify-center bg-white rounded-xl shadow-lg animate-pulse border border-gray-200">
                <span className="text-blue-500 font-semibold">Loading...</span>
              </div>
            }
          >
            <ProductTemplate item={item} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default Products;
