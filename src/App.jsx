import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Counter } from './components/Counter'
import { Jetton } from './components/Jetton'
import { TransferTon } from './components/TransferTon'
import styled from 'styled-components'
import { Button, FlexBoxCol, FlexBoxRow } from './components/styled/styled'
import { useTonConnect } from './hooks/useTonConnect'
import { CHAIN } from '@tonconnect/protocol'
import '@twa-dev/sdk'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Learn from './components/Learn'

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

function App() {
  const { network } = useTonConnect()

  return (
    <BrowserRouter>
      <StyledApp>
        <AppContainer>
          <FlexBoxCol>
            <FlexBoxRow></FlexBoxRow>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/learn" element={<Learn/>} />
            </Routes>
          </FlexBoxCol>
        </AppContainer>
      </StyledApp>
    </BrowserRouter>
  )
}

export default App
