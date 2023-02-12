// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="list">
      <img className="img" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <p>
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        {starsCount} stars
      </p>
      <p>
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        {forksCount} forks
      </p>
      <p>
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        {issuesCount} open issues
      </p>
    </li>
  )
}

export default RepositoryItem
