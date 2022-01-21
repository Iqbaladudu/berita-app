import Navbar from '../Components/Navbar/Navbar'
import Container from '../Components/Container/Container'
import Loading from '../Components/Loading/Loading'
import Error from '../Components/Error/Error'
import { getNews } from '../Services/getNews'
import { useEffect, useState } from 'react'
import NewsList from '../Components/NewsList/NewsList'
import { useParams } from 'react-router-dom'


function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { id } = useParams()
  const DEFAULT_SEARCH_QUERY = 'tesla'

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true)

      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY
      })

      if (!res) {
        setLoading(false)
        setError(true)

        return
      }

      setLoading(false)
      setArticles(res.articles)
    }

    fetchTechNews()
  }, [id])

  console.log(articles);

  return (
    <>
      <Navbar />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {(!loading && articles.length > 0) && (
          <NewsList articles={articles} />
        )}
      </Container>
    </>
  )
}

export default App;
