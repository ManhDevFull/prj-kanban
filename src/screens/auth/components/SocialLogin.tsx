import { Button } from 'antd'
import React from 'react'

const SocialLogin = () => {
  return (
    <Button style={{width:'100%'}} size='large' icon={<img
        width="50" 
        height="50"
        src="https://img.icons8.com/clouds/100/google-logo.png" 
        alt="google-logo"/>}>
        Google
    </Button>
  )
}

export default SocialLogin