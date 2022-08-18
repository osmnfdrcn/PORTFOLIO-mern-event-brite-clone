import Wrapper from "../assets/Wrappers/Spinner"

const Spinner = ({ center }) => {
  return (
    <div className="dashboard-section">
      <Wrapper>
        <div className={center ? 'loading loading-center' : 'loading'}></div>
      </Wrapper>
    </div>
  )
}

export default Spinner