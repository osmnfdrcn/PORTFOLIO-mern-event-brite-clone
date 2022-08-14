import styled from 'styled-components'
const Wrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;   
  margin-top: 40px;
 
  p{
    font-size: 20px;
    color: var(--grey-600);
    letter-spacing: 5px;
  }

  .image-container{
    width: 300px;
    max-height: 300px;
  }
  .image-container img{
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 300px;
  }
 .upload-form{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  
 }
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
  padding: 5px 10px;
    font-size: 1em;
    /* font-weight: 700; */
    color: white;
    background-color: black;
    display: inline-block;
    
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: var(--primary-700);
}
.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}


`
export default Wrapper