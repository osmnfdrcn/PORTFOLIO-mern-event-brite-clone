import styled from "styled-components";

const Wrapper = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	.register-container{
		width: 350px;
		form{
			.title{
				display: block;
				font-size: 28px;
				margin-bottom: 20px;
				text-align: center;
			}
		}
		p {
			width: 100%;
			display: block;
			font-size: 15px;
			text-align: center;
			color: var(--grey-300);
		}
	}
	.social-login{
		cursor: pointer;
		border:1px solid var(--grey-200);
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding :15px 0;
		span{
			font-size: 14px;
			color: var(--grey-400);
		}
		svg{
			font-size: 30px;
		}
	}
	.toggle-button{
		width: 100%;
		padding: 10px;
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.toggleCheckbox {
   display: none;
 	}
	.toggleContainer {
   position: relative;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width: fit-content;
   border-radius: 30px;
   background: var(--grey-300);
   color: #343434;
   cursor: pointer;
	}
	.toggleContainer::before {
   content: '';
   position: absolute;
   width: 50%;
   height: 100%;
   left: 0%;
   border-radius:30px;
   background: #ff4f00;
	}
	.toggleContainer div {
   padding: 4px 10px;
   text-align: center;
   z-index: 1;
	}
	.toggleCheckbox:checked + .toggleContainer::before {
   left: 50%;
	}
	.toggleCheckbox:checked + .toggleContainer div:first-child,
	.toggleCheckbox:checked + .toggleContainer div:last-child,
	.toggleCheckbox + .toggleContainer div:first-child,
	.toggleCheckbox + .toggleContainer div:last-child{
   color: white;
	}
	


`;

export default Wrapper;