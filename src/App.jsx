
import './App.css'
import Banner from './pages/banner/Banner'
import Cards from './pages/Cards/Cards'
import CardSection from './pages/cardSection/CardSection'
import Hr from './pages/hr/Hr'
import Login from './pages/login And SignUp/Login'
import Misson from './pages/Mission/Misson'
import Navbar from './pages/navbar/Navbar'
import Properties from './pages/Properties/Properties'
function App() {


  return (
    <>
      <div>
        <Login></Login>
      <Navbar></Navbar>
      <Banner></Banner>
      <Misson></Misson>
      <Hr></Hr>
      <Properties></Properties>
      <CardSection></CardSection>
      <Cards></Cards>
      </div>
    </>
  )
}

export default App
