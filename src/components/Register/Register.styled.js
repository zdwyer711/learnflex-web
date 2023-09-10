import styled from 'styled-components';

export const GridWrapper = styled.div`
    background-color: #2e3612;
    padding: 10px;
    min-height: calc(-200px + 100vh);
    margin-top: 71px;
    text-align: center;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: calc(-142px + 100vh);

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const Column = styled.div`
    flex: 25%;
    padding: 20px;

    @media screen and (max-width: 992px){
        flex: 50%;
    }
`;

export const RegisterEmailInput = styled.input`
    border-radius: 25px;
    border: 2px solid #2e3612;
    padding: 10px; 
    width: 200px;
    height: 15px;
    display:  ${ props => !props.isEmailConfirmed ? '' : 'none'};

    &:focus {
        border-color: #2e3612;
        outline: none;
    }
  }
`;

export const RegisterEmailInputErrorMessage = styled.p`
    font-family: initial;
    margin-top: -3%;
    margin-bottom: 0%;
    font-size: 12px;
    color: red;
    margin-right: 12%;
    display: ${ props => props.isEmailValid ? 'none' : ''};
`;

export const EmailConfirmationMessage = styled.p`
    margin: 0%;
    margin-top: -3%;
`;

export const RegisterForm = styled.form`
    top: -346px;
    position: relative;
    text-align: center;
`;

export const SignUpButton = styled.button`
  z-index: 30;
  position: relative;
  margin-left: -30px;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #2e3612;
  border-radius: 100px;
  box-sizing: border-box;
  color: #171815;
  cursor: pointer;
  display: ${ props => !props.isEmailConfirmed ? 'inline-flex' : 'none'};
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 42px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: ${ props => props.isEmailValid ? '#2e3612' : '#ffffff' };
    color: ${ props => props.isEmailValid ? '#ffffff' : '#171815' };
  }

  &:active {
    background: #09223b;
    color: rgb(255, 255, 255, .7);
  }

  :disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, .08);
    color: rgba(0, 0, 0, .3);
  }
`;
