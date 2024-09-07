

import './App.css'
import AgentsList from './pages/agents/Agents'
import Banner from './pages/banner/Banner'
import Button from './pages/button/Button'
import Cards from './pages/Cards/Cards'
import CardSection from './pages/cardSection/CardSection'
import CompanyCard from './pages/companyCard/CompanyCard'
import Count from './pages/count\'/Count'
import Footer from './pages/footer/Footer'
import Hr from './pages/hr/Hr'
import Login from './pages/login And SignUp/Login'
import Misson from './pages/Mission/Misson'
import Navbar from './pages/navbar/Navbar'
import PopularCard from './pages/Popular/PopularCard'
import Properties from './pages/Properties/Properties'
import Testimonial from './pages/Testimonial/Testimonial'
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
     <AgentsList></AgentsList>
     <Count></Count>
     <Testimonial></Testimonial>
     <PopularCard></PopularCard>
     <CompanyCard></CompanyCard>
     <Button></Button>
     <Footer></Footer>
      </div>
    </>
  )
}

export default App
