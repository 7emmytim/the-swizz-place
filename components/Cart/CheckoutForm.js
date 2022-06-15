import { Button, Form, Input } from 'antd'

const CheckoutForm = ({ saveUser, prev, user }) => {

    const [checkoutForm] = Form.useForm()

    const handleFinish = values => {
        saveUser(values)
    }

    return (
        <div>
            <Form
                layout='vertical'
                form={checkoutForm}
                onFinish={handleFinish}
                initialValues={{
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone: user.phone
                }}
            >
                <div className='md:w-4/5 lg:w-3/5 mx-auto'>
                    <div>
                        <Form.Item label='First name' name='first_name' rules={[{ required: true, message: 'Please input your first name' }]}>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label='Last name' name='last_name' rules={[{ required: true, message: 'Please input your first name' }]}>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email' }, { type: 'email', message: 'Input a valid email' }]}>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label='Phone' name='phone' rules={[{ required: true, message: 'Please input your number' }]}>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                </div>



                <div className='mt-5 text-center'>
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        GO BACK
                    </Button>
                    <Button type='primary' htmlType='submit'>
                        PROCEED
                    </Button>
                </div>
            </Form>
        </div >
    )
}

export default CheckoutForm
