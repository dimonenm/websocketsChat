import { Form, Input, Button, DatePicker, Layout, Row, Col } from "antd";
import './App.css'; // ?

function App() {
  const { Header, Footer, Content, Sider } = Layout;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Sider>

      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ overflow: 'auto' }}></Content>
        <Footer>
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={20}>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{
                    // required: true,
                    message: 'Please input your message',
                  },]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  wrapperCol={{
                    span: 2,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
