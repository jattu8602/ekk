import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categoryImages: Record<string, string> = {
  'category-seeds.jpg': '/category-seeds.jpg',
  'category-fertilizers.jpg': '/category-fertilizers.jpg',
  'category-chemicals.jpg': '/category-chemicals.jpg',
  'category-tools.jpg': '/category-tools.jpg',
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/hero-banner.jpg"
          alt="Agricultural Products"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Ekta Krishi Kendra
              </h1>
              <p className="text-lg mb-6">
                India's trusted source for quality seeds, fertilizers, and crop
                protection products
              </p>
              <Button size="lg" className="shadow-lg">
                Shop Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Bestsellers</h2>
            <p className="text-muted-foreground">
              Top-rated products trusted by farmers
            </p>
          </div>
          <Link href="/seeds">
            <Button variant="link" className="hidden md:flex items-center">
              See More <ArrowRight className="ml-1" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop By Category Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">
              Find products for every farming need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover-lift border border-border"
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={categoryImages[category.image]}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
