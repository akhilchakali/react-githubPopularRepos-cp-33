import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    idClicked: 'ALL',
    returnedData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {idClicked} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${idClicked}`
    const response = await fetch(url)
    const data = await response.json()
    const convertingData = data.popular_repos
    const modifiedData = convertingData.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    if (response.ok === true) {
      this.setState({
        returnedData: modifiedData,
        isLoading: false,
      })
    }
  }

  sentData = () => {
    const {returnedData} = this.state
    return (
      <ul className="ul2">
        {returnedData.map(each => (
          <RepositoryItem details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  btnClicked = id => {
    this.setState({idClicked: id}, this.getData)
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {idClicked, isLoading} = this.state
    return (
      <div className="whole">
        <h1>Popular</h1>
        <ul className="ul1">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              btnClicked={this.btnClicked}
              isActive={idClicked === each.id}
            />
          ))}
        </ul>
        {isLoading ? this.loader() : this.sentData()}
      </div>
    )
  }
}

export default GithubPopularRepos
