import Link from 'next/link'
import { products, categories } from '@/data/products'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import FilterSidebar from '@/components/FilterSidebar'

// Define the shape of the 'params' prop provided by Next.js
interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

// This is a Server Component, so it's 'async' by default
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params

  // helper to create a simple slug for matching (spaces -> '-', lowercase)
  const slugify = (s: string) =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  // Find the canonical category name from the categories list using the slug
  const categoryObj = categories.find(
    (c) => c.slug === decodeURIComponent(category)
  )
  const categoryName = categoryObj
    ? categoryObj.name
    : decodeURIComponent(category)

  // Debug logging
  console.log('CategoryPage Debug:', {
    category,
    categoryObj,
    categoryName,
    allCategories: categories.map((c) => ({ slug: c.slug, name: c.name })),
  })

  // This filtering logic runs on the server. We compare against the canonical
  // category name so products that use slightly different casing/spacing still match.
  const filteredProducts = products.filter((product) => {
    return product.category.toLowerCase() === categoryName.toLowerCase()
  })

  const brands = [
    ...new Set(
      filteredProducts.map((p) => p.name.split(' ')[0]).filter(Boolean)
    ),
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* Use next/link with href prop */}
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="capitalize text-foreground">{categoryName}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Pass the server-computed 'brands' list to the
            Client Component as a prop.
          */}
          <aside className="md:col-span-1">
            <FilterSidebar brands={brands} />
          </aside>

          {/* Products Grid */}
          <main className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold capitalize">
                {categoryName}
                <span className="text-muted-foreground text-base ml-2">
                  ({filteredProducts.length} products)
                </span>
              </h2>
              <Button variant="outline" size="sm">
                Sort by: Featured
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
