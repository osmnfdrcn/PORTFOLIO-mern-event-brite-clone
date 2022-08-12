
const MainHeaderItem = ({ reactIcon, text, classname, onClick }) => {
  return (
    <div className={classname} onClick={onClick}>
      {reactIcon}
      <span>{text}</span>
    </div>
  )
}

export default MainHeaderItem