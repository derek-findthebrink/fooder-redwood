import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Home</h1>
      <p>Welcome home!</p>
      <ArticlesCell />
    </>
  )
}

export default HomePage
