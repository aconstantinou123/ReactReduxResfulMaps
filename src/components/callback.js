import { Component } from 'react'
import { setIdToken, setAccessToken } from '../utils/AuthService'

class CallBack extends Component {

    componentDidMount(){
        setAccessToken()
        setIdToken()
        window.location.href = '/home'
    }

    render(){
        return null
    }

}

export default CallBack