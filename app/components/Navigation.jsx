import styles from './Navigation.module.css' // Convention: .module.css to export hash classes
import Link from 'next/link'
const links = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Posts', route: '/posts' }
]
export function Navigation () {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {/* <li>Home</li> */}
                    {links.map(({ label, route }) => (
                        <li key={`${route}`}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
