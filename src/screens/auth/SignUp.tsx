import React, { useState } from 'react'
import { Button, Card, Form, Input, message, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
import handleAPI from '../../apis/handleAPI'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../reduxs/reducers/authReducer'
// import { localDataNames } from '../../constants/appInfos'


const { Title, Paragraph, Text } = Typography

const SignUp = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)


    const handleLogin = async (values: { email: string; password: string }) => {
		const api = `/auth/register`;

		setIsLoading(true);
		try {
			const res: any = await handleAPI(api, values, 'post')
			if (res.data) {
                // localStorage.setItem(localDataNames.authData, JSON.stringify(res.data.data))
				message.success(res.message);
				dispatch(addAuth(res.data))
			}
		} catch (error: any) {
			message.error(error.response.data.message)
		} finally {
			setIsLoading(false);
		}
	}
    // const handleLogin = async (values: { email: string; password: string }) => {
    //     const api = '/auth/register'
    //     setIsLoading(true)
    //     try {
    //         const res = await handleAPI(api, values, 'post')
    //         console.log(res)
    //     } catch (error:any) {
    //         console.log(error)
    //         message.error(error.message)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }
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
                    <Button loading={isLoading} type='primary' style={{
                        width: '100%'
                    }} size='large' onClick={() => form.submit()}>
                        Sign Up
                    </Button>
                </div>
                <SocialLogin isRemember={false} />
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