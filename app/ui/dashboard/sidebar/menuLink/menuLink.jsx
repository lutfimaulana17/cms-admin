import Link from 'next/link'
import style from './menuLink.module.css'

const MenuLink = ({ menu }) => {
  return (
    <Link href={menu.path} className={style.container}>
        {menu.icon}
        {menu.title}
    </Link>
  )
}

export default MenuLink