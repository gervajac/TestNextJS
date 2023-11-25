import Image from 'next/image'
import { Title } from './components/Title'
import { ProductSection } from './components/ProductSection'
import { Pagination } from './components/Pagination'

export default function Home() {
  return (
    <main className="flex justify-start flex-col w-screen items-center h-auto min-h-screen bg-stone-500">
      <Title/>
      <Pagination/>
      <ProductSection/>
    </main>
  )
}
