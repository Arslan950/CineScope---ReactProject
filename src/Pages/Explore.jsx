import { Trending, Bollywood, webseries } from '../MoviesDB/moviesList.js'
import CardSection from '../components/Cards/CardSection.jsx'
import SearchBar from '../components/SearchBar.jsx'
const Explore = () => {
    return (
        <div>      
            <SearchBar />
            <CardSection movieList={Trending} name={`Trending`} />
            <CardSection movieList={Bollywood} name={`Bollywood hits`} />
            <CardSection movieList={webseries} name={`Web series hits`} />
        </div>
    )
}

export default Explore
