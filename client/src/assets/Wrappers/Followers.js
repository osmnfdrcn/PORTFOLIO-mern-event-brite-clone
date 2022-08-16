import styled from 'styled-components'
const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  @media (min-width: 960px) {
    padding : 50px 100px;
  }

`
export default Wrapper