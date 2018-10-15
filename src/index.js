import React from 'react'
import styled from 'styled-components'

const FlashContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 20px !important;
  border: 1px solid transparent;
  border-radius: 4px;
`
const FlashError = styled(FlashContainer)`
  color: #A94442;
  background-color: #F2DEDE;
  border-color: #EBCCD1;
`

const FlashSuccess = styled(FlashContainer)`
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
`

const FlashInfo = styled(FlashContainer)`
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
`

const Close = styled.span`
  float: right;
  color:: gray;
  cursor: pointer;
  padding-right: 50px
`

class Flash extends React.Component {
  state = {...this.props}

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      this.setState({...this.props})
  }

  fade = () => {
    setTimeout( () => {
      this.clearFlash()
    }, this.props.duration || 10000 )
  }

  clearFlash = () => {
    this.setState({ message: '', msgType: ''})
  }

  render() {
    let FlashComponent 

    const { message, msgType } = this,state
    if (message) {
      switch(msgType){
        case 'success':
          FlashComponent = FlashSuccess
          break 
        case 'error':
          FlashComponent = FlashError
          break 
        default: 
          FlashComponent = FlashInfo
      }
    
    return (
      <FlashComponent>
        {message}
        { this.fade() }
        <Close onClick={this.clearFlash}>close</Close>
      </FlashComponent>
    )
    } else {
      return null 
    }
  } 
}
export default Flash 
