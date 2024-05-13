import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

export const NotesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif', serif;
  text-align: center;
  margin-bottom: 16px;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px;
  border-radius: 15px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  margin-bottom: 20px;
  border: none;
  padding: 10px;
`

export const TextArea = styled.textarea`
  margin-bottom: 20px;
  border: none;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  align-items: flex-end;
`

export const AddButton = styled.button`
  width: 80px;
  height: 50px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 20px;
  background-color: #4c63b6;
  color: #ffffff;
`

export const ParaTitle = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
`

export const ParaDesc = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
`
