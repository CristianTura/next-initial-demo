import React, { FC } from 'react'

import Head from 'next/head'
import { Navbar } from '../ui'

import styles from './MainLayout.module.css';

export const Layout: FC<{title:string}> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name='author' content='Cristian Buenaventura'/>
            <meta name='description' content={`Información sobre el pokémon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
        </Head>

        <Navbar/>

        <main className={styles.main}>
            { children }
        </main>
    </>
  )
}
