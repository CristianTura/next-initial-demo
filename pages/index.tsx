
import Link from 'next/link'
import { Layout } from '../components/layouts'
import { MainLayout } from '../components/layouts/MainLayout'
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi'


export default function HomePage(props:any) {

  console.log(props)

  return (
    <Layout title={'Listado de Pokémons'}>
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
        {/* <h1>Home Page</h1>
        
        <h1 className="title">
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151')

  return {
    props:{
      pokemons: data.results,
    }
  }
}

