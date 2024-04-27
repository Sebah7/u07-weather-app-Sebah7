import Header from './Header'
import Weather from '../components/search/WeatherSearch'
import Results from '../components/result/SearchResults'
import Forcast from '../components/result/ForcastResults'
import { Outlet } from 'react-router-dom'
import Blue from "../assets/blue.png";


function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center" 
    style={{backgroundImage: `url(${Blue})`}}>

    <div className="mx-auto max-w-screen-md py-2 px-4 sm:px-6 lg:px-8">
    <Header />
    <Weather />
    <Results />
    <Forcast/>
    <Outlet />
    </div>
    </div>
  )
}

export default HomePage