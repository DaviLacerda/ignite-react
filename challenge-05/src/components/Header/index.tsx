import Link from 'next/link'
import styles from './header.module.scss'
import commonStyles from '../../styles/common.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src='/logo.svg' alt='logo' />
        </a>
      </Link>
    </header>
  )
}
