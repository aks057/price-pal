import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import HeroCarousel from '@/components/HeroCarousel'
import { getAllProducts } from '@/lib/actions'
import Product from '@/lib/models/product.model'
import ProductCard from '@/components/ProductCard'

const Home = async () => {
  const allProducts = await getAllProducts();
  return (
   <>
   <section className='px-6 md:px-20 py-24 '>
    <div className='flex max-x1:flex-col gap-26'>
      <div className='flex flex-col justify-center'>
        <p className='small-text'>
          Savvy shopping begins now:
          <Image
            src="/assets/icons/arrow-right.svg"
            alt='arrow-right'
            width={16}
            height={16}
          />
        </p>
        <h1 className='head-text'>
        Maximize Savings with <span className='text-yellow-400'>PricePal</span>
        </h1>
        <p className='mt-6'>
        Discover a smarter way to shop, maximize your savings on every purchase, and make the most of your money with our innovative platform.
        </p>
        
        <SearchBar/>
      </div>
      
      <HeroCarousel/>
    </div>
    
   </section>
   <section className='trending-section'>
    <h2 className='section-text'>Trending</h2>
    <div className='flex flex-wrap gap-x-8 gap-y-16'>
      {allProducts?.map((product)=> (
         <ProductCard key={product._id} product={product} />
        
      ))}
    </div>
    
   </section>
   </>
  )
}

export default Home