import styles from './Header.module.css'
import logo from '../assets/Logo.png'
export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  )
}