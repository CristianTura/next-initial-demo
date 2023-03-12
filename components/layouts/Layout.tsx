import React, { FC } from 'react'

import Head from 'next/head'

export const Layout: FC<{title:string}> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name='author' content='Cristian Buenaventura'/>
            <meta name='description' content={`Información sobre el pokémon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
        </Head>

        <main>
            { children }
        </main>
    </>
  )
}
