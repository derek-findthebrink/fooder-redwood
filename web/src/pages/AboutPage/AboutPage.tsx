import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <h1>About</h1>
      <p>This is a mighty site! You'll love it I bet!</p>
    </>
  )
}

export default AboutPage
