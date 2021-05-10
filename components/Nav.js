import Link from 'next/link'
import styles from '../styles/Home.module.css';




const Nav = () => {

  
    // const { user, error, isLoading } = useUser();
  
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
  
    // if (user) {
    //   return (
    //     <>
    //     <div className="authnav flex justify-items-center items-center w-full">
    //     <Link href="/">
    //         <a><span className="logoname mx-8">mOOdFlics</span></a>
    //       </Link>
    //     </div>
    //     <div className="authnav flex justify-items-center items-center w-full justify-end">
    //       <span className="text-white flex justify-items-end space-x-4 mx-8">
    //         Welcome {user.name}! <img className="rounded-full h-12 w-12" src={user.picture} alt={user.name} />
    //         <Link href="/profile">
    //           <a className="flex space-x-8 mx-8" >Edit Profile</a>
    //         </Link>
    //         <Link href="/api/auth/logout">
    //           <a className="flex space-x-8 mx-8" >Logout</a>
    //         </Link>
    //       </span>
    //     </div>
    //     </>
    //   );
    // }
  
    // return <div className="authnav flex justify-items-center items-center w-full ">
    //   <Link href="/">
    //     <a><span className="logoname mx-8">mOOdFlics</span></a>
    //   </Link>
    //   <a href="/api/auth/login" id="applogin"  className="text-white flex justify-items-end space-x-4">Login</a>;
    // </div>
   
  
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
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                  <span className="sr-only">Open main mnu</span>
                  Heroicon name: outline/menu
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* <button onClick={
              authentication
            }></button> */}
            
            {/* <Link href="/api/auth/login">
              <a  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              Sign up | Login
              </a>
            </Link> */}
          </div>
        </nav>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              
            </div>
            <div className="-mr-2">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="mt-6 px-5">
              <Link href="#"><a  className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Register</a></Link>
            </div>
            <div className="mt-6 px-5">
              <p className="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" className="text-gray-900 hover:underline">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
        </>
    )
}

export default Nav



