import Layout from "src/core/layouts/Layout"
import data from '../core/data.json'

export async function getStaticProps() {
  return {
    props: {
      data
    }
  }
}

const Home = ({ data }) => {
  return <Layout title="Tu Hora Divina" data={data}>{null}</Layout>
}

export default Home
