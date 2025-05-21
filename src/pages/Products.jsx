import { products } from '../assets/assets'
import { useEffect, useRef } from 'react'

const Products = () => {
  const productsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right')
          } else {
            entry.target.classList.remove('animate-slide-in-right')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const products = productsRef.current?.querySelectorAll('.product-card')
    products?.forEach((product) => observer.observe(product))

    return () => {
      products?.forEach((product) => observer.unobserve(product))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-rose-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-12 text-white animate-fade-in-up">منتجاتنا</h1>
        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 transform hover:scale-105"
              style={{ opacity: 0 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-white">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{product.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                    اللون: {product.color}
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                    الحجم: {product.size}
                  </span>
                </div>
                <p className="text-gray-300 font-semibold">{product.price.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d])} جنيه</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products 