import PropTypes from 'prop-types'
import NewsCard from '../NewsCard/NewsCard'

import styles from './NewsList.module.css'

const NewsList = ({ articles }) => {
    return (
        <div className={styles.newsList}>
            {articles.map(({
                urlToImage,
                title,
                publishedAt,
                author,
                source,
                descirption,
                content,
                url
            }, index, arr) => {
                if (!urlToImage || !author || !content) {
                    return null
                }
                
                return (
                    <NewsCard
                        key={index}
                        src={urlToImage}
                        title={title}
                        publishedAt={publishedAt}
                        author={author}
                        sourceName={source.name}
                        description={descirption}
                        url={url}
                        notLastChild={!(arr.length === index + 1)}
                    />
                )
            })}
        </div>
    )
}

NewsList.propTypes = {
    articles: PropTypes.array
}

export default NewsList