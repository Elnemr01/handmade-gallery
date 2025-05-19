import { products } from '../assets/assets'

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="py-20 bg-gradient-to-br from-rose-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">
            Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-lg">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products 