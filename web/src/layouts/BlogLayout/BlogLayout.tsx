import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log({ currentUser })

  return (
    <>
      <header>
        <div className="flex-between">
          <div>
            <Link to={routes.home()}>
              <h1>Redwood Blog</h1>
            </Link>
          </div>
          <div>
            {isAuthenticated ? (
              <div>
                <span>Logged in as {currentUser?.email}</span>{' '}
                <button type="button" onClick={logOut}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
