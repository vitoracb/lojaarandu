import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface FeaturedProductsProps {
  showAll?: boolean;
}

function FeaturedProducts({ showAll = false }: FeaturedProductsProps) {
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Vaso Cerâmica Terracota",
      price: "R$ 89,90",
      image: "https://images.pexels.com/photos/6194430/pexels-photo-6194430.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Vaso artesanal em cerâmica com acabamento rústico"
    },
    {
      id: 2,
      name: "Luminária Bambú Natural",
      price: "R$ 156,90",
      image: "https://images.pexels.com/photos/4846083/pexels-photo-4846083.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Luminária sustentável em bambú com design minimalista"
    },
    {
      id: 3,
      name: "Quadro Folhagem Dourada",
      price: "R$ 124,90",
      image: "https://images.pexels.com/photos/5998047/pexels-photo-5998047.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Arte botânica com detalhes dourados em moldura clean"
    },
    {
      id: 4,
      name: "Almofadas Linho Natural",
      price: "R$ 78,90",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Set de almofadas em linho 100% natural"
    },
    {
      id: 5,
      name: "Espelho Rattan Circular",
      price: "R$ 198,90",
      image: "https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Espelho com moldura em rattan trançado à mão"
    },
    {
      id: 6,
      name: "Macramê Parede Grande",
      price: "R$ 145,90",
      image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      description: "Painel decorativo em macramê com cordas naturais"
    }
  ];

  const displayProducts = showAll ? allProducts : allProducts.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Peças cuidadosamente selecionadas para transformar seus ambientes com elegância e personalidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-sand-50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-olive-600" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 font-medium transition-colors flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Comprar</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-olive-700 mb-2 group-hover:text-olive-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-light">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif text-terracotta-600 font-medium">
                    {product.price}
                  </span>
                  <button className="text-olive-600 hover:text-olive-700 font-medium transition-colors">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105">
              Ver Todos os Produtos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;