import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: #171815;
    width: 100%;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    z-index: 50;
    box-shadow: -4px 5px 5px #171815;
`;

export const HeaderGridWrapper = styled.div`
    background-color: #171815;
    margin-right: 28.4%;
    margin-left: 20%;
    min-height: 56px;
    display: grid;

    @media screen and (max-width: 1200px) {
      margin-right: 0% !important;
      margin-left: 0% !important;
    }
`;

export const HeaderRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const HeaderColumn = styled.div`
    flex: 25%;
    display: flex;
    max-height: 52px;
`;

export const DefaultButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #171815;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 30px;
  min-width: 100px;
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
  margin-top: 12px;
  margin-right: 0;
  margin-left: auto;  

  &:hover,
  &:focus {
    background-color: #2e3612;
    color: #ffffff;
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