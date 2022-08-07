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
			display: inline-block;
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


`;

export default Wrapper;