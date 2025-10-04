import './App.css'
import NavBar from './components/NavBar'
import Footbar from './components/Footbar'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/theme'
import { FavouritesProvider } from './context/favourites'


function App() {

  return (

    <ThemeProvider >
      <FavouritesProvider>
        <main className='min-h-screen w-screen dark:bg-[#111826] bg-slate-100 dark:text-white text-black font-Poppins flex flex-col duration-300' >
          <NavBar />
          <section className=' flex flex-grow flex-col items-center'>
            <Outlet />
          </section>
          <Footbar />
        </main>
      </FavouritesProvider>
    </ThemeProvider>

  )
}

export default App
