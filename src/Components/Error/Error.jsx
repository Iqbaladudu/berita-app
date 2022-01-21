import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.container}>
            <p className={styles.error}>Error, mohon muat ulang halaman!</p>
        </div>
    )
}

export default Error