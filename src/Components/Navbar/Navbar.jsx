import styles from './Navbar.module.css'
import newsIcon from './../../assets/news-icon.svg'
import { CATEGORIES } from '../../constants/categories'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classnames from 'classnames'

const Navbar = () => {
    const [selected, setSelected] = useState('')

    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt="Navbar icon" />
                <h1 className={styles.navTitle}>News</h1>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map(({name, slug}, index) => {
                    return (
                        <Link
                            key={index}
                            onClick={() => setSelected(name)}
                            to={`/${slug}`}
                            className={classnames(styles.category, {
                                [styles.selected]: selected === name
                            })}
                        >
                            {name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar