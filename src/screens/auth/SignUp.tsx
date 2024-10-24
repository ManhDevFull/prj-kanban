import React, { useState } from 'react'
import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
const { Title, Paragraph, Text } = Typography

const SignUp = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const handleLogin = (values: { email: string; password: string }) => {
        console.log(values)
    }
    return (
        <div>
            <Card>
                <div className='text-center'>
                    <img
                        style={{ width: '15%' }}
                        src={'https://firebasestorage.googleapis.com/v0/b/kanban-7ef41.appspot.com/o/Logo.png?alt=media&token=96306259-6d1d-41d0-a1a4-a483b31a373c'} alt='logo-kanban' />
                    <Title level={3} style={{ width: '60vh' }}>Create an account</Title>
                    <Paragraph type='secondary'>
                        Start your 30 day free trial.
                    </Paragraph>
                </div>
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={handleLogin}
                    disabled={isLoading}
                    size='large' >
                    <Form.Item name={'name'} label='Name' rules={[
                        {
                            required: true,
                            message: 'Please enter your name.'
                        }
                    ]}>
                        <Input placeholder='Enter your name.' maxLength={100} />
                    </Form.Item>
                    <Form.Item name={'email'} label='Email' rules={[
                        {
                            required: true,
                            message: 'Please enter your email.'
                        }
                    ]}>
                        <Input placeholder='Enter your email.' allowClear maxLength={100} type='email' />
                    </Form.Item>
                    <Form.Item name={'password'} label='Password' rules={[
                        {
                            required: true,
                            message: 'Please create your password.'
                        }
                    ]}>
                        <Input.Password placeholder='Create your password.' maxLength={100} type='password' />
                    </Form.Item>
                </Form>
                <div className='mt-4 mb-3'>
                    <Button type='primary' style={{
                        width: '100%'
                    }} size='large' onClick={() => form.submit()}>
                        Login
                    </Button>
                </div>
                <SocialLogin />
                <div className="mt-4 text-center">
                    <Space>
                        <Text type='secondary'>Already an account?</Text>
                        <Link to={'/'}>Login</Link>
                    </Space>
                </div>
            </Card>
        </div>
    )
}

export default SignUp