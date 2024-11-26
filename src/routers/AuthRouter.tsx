import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'

const { Title } = Typography

const AuthRouter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center d-none d-lg-block" style={{ marginTop: '17%' }}>
                    <div className='mb-4'>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/kanban-7ef41.appspot.com/o/Logo.png?alt=media&token=96306259-6d1d-41d0-a1a4-a483b31a373c'} alt='logo-kanban' />
                        <Title style={{ color: '#1570EF', marginTop: 30 }}>KANBAN</Title>
                    </div>
                </div>
                <div className="col box-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/sign-up' element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>

    )
}

export default AuthRouter