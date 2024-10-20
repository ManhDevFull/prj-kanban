import React, { useState } from 'react'
import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
const { Title, Paragraph, Text } = Typography


const Login = () => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [isRemember, setIsRemember] = useState(false)
    const handleLogin = (values: { email: string; password: string }) => {
        console.log(values)
    }
    return (
        <div>
            <Card>
                <div className='text-center' style={{width:'100%'}}>
                    <Title level={2} style={{width: '60vh'}}>Log in to your account</Title>
                    <Paragraph type='secondary'>
                        Welcome back! Please enter your details.
                    </Paragraph>
                </div>
                <Form 
                    layout='vertical' 
                    form={form} 
                    onFinish={handleLogin} 
                    disabled={isLoading}
                    size='large' >
                        <Form.Item name={'email'} label='Email' rules={[
                            {
                                required: true,
                                message: 'Please enter your email.'
                            }
                        ]}>
                        <Input placeholder='Enter yuor email.' allowClear maxLength={100} type='email' />
                    </Form.Item>
                        <Form.Item name={'password'} label='Password' rules={[
                            {
                                required: true,
                                message: 'Please enter your password.'
                            }
                        ]}>
                        <Input.Password placeholder='Enter yuor email.' maxLength={100} type='password' />
                    </Form.Item>
                </Form>
                <div className="row">
                    <div className="col">
                        <Checkbox
                        checked={isRemember}
                        onChange={(val)=> setIsRemember(val.target.checked)}>
                            Remember for 30 days
                        </Checkbox>
                    </div>
                    <div className="col text-end">
                        <Link to={'/'}>Forgot password?</Link>
                    </div>
                </div>
                <div className='mt-4 mb-3'>
                    <Button type='primary' style={{
                        width: '100%'
                    }} size='large' onClick={()=> form.submit()}>
                        Login
                    </Button>
                </div>
                <SocialLogin />
                <div className="mt-4 text-center">
                    <Space>
                        <Text type='secondary'>Don't have an account?</Text>
                        <Link to={'/sign-up'}>Sign up</Link>
                    </Space>
                </div>
            </Card>
        </div>
    )
}

export default Login