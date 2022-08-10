import { Header, Footer } from './'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>   
    </>
  )
}

export default Layout