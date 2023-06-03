import { Spacer, Text, useTheme } from '@nextui-org/react';
import { ActiveLink } from '../ActiveLink';
import styles from './Navbar.module.css';
import Image from 'next/image';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    // <nav className={ styles['menu-container'] }>
    //     {
    //       menuItems.map( ({ text, href }) => (
    //         <ActiveLink key={ href } text={ text } href={ href } />    
    //       ))

    //     }
    // </nav>
    <div className={ styles['menu-container'] } style={{
      backgroundColor: theme?.colors.gray400.value,
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt='icono de la app'
        width={70}
        height={70}
      />
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okémon</Text>

      <Spacer css={{ flex: 1}}/>
      <Text color='white'>Favoritos</Text>
    </div>
  );
};
