import { Title } from './components/Title'
import { ProductSection } from './components/ProductSection'
import { Pagination } from './components/Pagination'
import { CalculateValue } from './components/CalculateValue'

export default function Home() {
  return (
    <main className="flex justify-start flex-col w-screen items-center h-auto min-h-screen bg-stone-500">
      <Title/>
      <Pagination/>
      <ProductSection/>
      <CalculateValue/>
    </main>
  )
}
