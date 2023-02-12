// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details, btnClicked, isActive} = props
  const {language, id} = details
  const languageClicked = () => {
    btnClicked(id)
  }
  const isClicked = isActive ? 'yes' : 'no'

  return (
    <button className={isClicked} type="button" onClick={languageClicked}>
      <li>{language}</li>
    </button>
  )
}
export default LanguageFilterItem
