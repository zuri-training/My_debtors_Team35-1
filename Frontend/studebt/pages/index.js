import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Hero from '../components/home/hero'
import HistorySection from '../components/home/historysection'  
import FeatureSection from '../components/home/featuresection'
import  DashboardOneSection  from '../components/home/dashboardonesection'
import  DashboardTwoSection  from '../components/home/dashboardtwosection'
import CustomerReviews from '../components/home/customerreviews'
import Newslettter from '../components/home/newsletter'

export default function Home( props ) {
  return (
    <>
      <Hero />
      <HistorySection />
      <FeatureSection />
      <DashboardOneSection />
      <DashboardTwoSection />
      <CustomerReviews />
      <Newslettter />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout title="Home">
      <HomeLayout>{page}</HomeLayout>
    </Layout>
  )
}