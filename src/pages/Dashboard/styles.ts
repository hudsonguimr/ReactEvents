import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 5px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  font-family: 'Lexend', sans-serif;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    font-family: 'Lexend', sans-serif;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    font-family: 'Lexend', sans-serif;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Lexend', sans-serif;
    transition: filter 0.2s;
  }

`
export const Container = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  margin-top: -70px;
  padding: 30px;
  background: #fff;

  font-family: 'Lexend', sans-serif;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    font-family: 'Lexend', sans-serif;
  }

  ul{
    margin-top: 30px;
    border: 1px solid #ddd;
    width: 100%;
    max-width: 580px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;

  font-family: 'Lexend', sans-serif;

  }





  button {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 4px;
    align-items: center;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Lexend', sans-serif;
    transition: filter 0.2s;

    &+button{
      margin-left: 5px;
    }

  }

`
