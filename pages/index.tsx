import HeadComponent from '@/components/HeadComponent'
import { Welcome } from '@/components/Welcome'

export default function Home() {
  return (
    <>
      <HeadComponent title='Chat' />
      <main>
        <Welcome />
      </main>
    </>
  )
}
