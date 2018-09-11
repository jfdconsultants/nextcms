import Main from '../layouts/Main.js'
import Head from 'next/head'

const Index = () => (
  <Main>
     <Head>
      <title>Welcome to the homepage</title>
    </Head>
    <h1>Homepage</h1>
    <p>Welcome</p>
    <p><a href="/admin">admin</a></p>
  </Main>
)

export default Index
