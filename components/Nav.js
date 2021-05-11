import Link from 'next/link'
import styles from '../styles/Home.module.css';


const Nav = () => {
   
  
    return (
        <>
      <div className="relative overflow-hidden">
      <header className="relative headerpane">
      <div className="bg-black pt-6">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/"><a>
                {/* <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="logo" /> */}
                <span className="logoname text-red-800">mOOdFlics</span>
              </a></Link>

            </div>

          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">

          </div>
        </nav>
      </div>
    </header>
    </div>
        </>
    )
}

export default Nav



