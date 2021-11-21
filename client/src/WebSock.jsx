import { useState, useRef } from "react";
// import { Form, Input, Button, Layout, Row, Col } from "antd";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WebSock = () => {

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [connected, setConnected] = useState(false);
  const socket = useRef();
  // const { Header, Footer, Content, Sider } = Layout;

  const sendMessage = () => {
    const message = {
      event: 'message',
      username,
      message: value,
      id: Date.now()
    }
    socket.current.send(JSON.stringify(message));
    setValue('');
  }

  const connect = () => {
    socket.current = new WebSocket('ws://localhost:5000');

    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: 'connection',
        username,
        id: Date.now()
      }
      socket.current.send(JSON.stringify(message));
    }

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [message, ...prev]);
    }

    socket.current.onclose = () => { console.log('Socket соединение закрыто') }

    socket.current.onerrore = () => { console.log('Socket произошла ошибка') }
  }

  if (!connected) {
    return (
      <>
        {/* <div className="c" style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
          <div className="r">Header</div>
          <div className="r" style={{ flexGrow: '1' }}>Main</div>
          <div className="r">Footer</div>
        </div> */}
        <Container fluid style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bs-gray-600)'}}>
          <Row>
            <Col>Header</Col>
          </Row>
          <Row style={{ flexGrow: '1' }}>
            <Col>Main</Col>
          </Row>
          <Row>
            <Col>Footer</Col>
          </Row>
        </Container>
        {/* <Layout>
          <Sider></Sider>
          <Layout>
            <Header>Header</Header>
            <Content style={{ overflow: 'auto' }}></Content>
            <Footer>
              <Form
                name="basic"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Row>
                  <Col span={20}>
                    <Form.Item
                      label="UserName"
                      name="username"
                      rules={[{
                        // required: true,
                        message: 'Please input your username',
                      },]}
                    >
                      <Input value={username} onChange={e => { setUsername(e.target.value) }} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      wrapperCol={{ span: 2 }}
                    >
                      <Button type="primary" htmlType="submit" onClick={connect}>
                        Войти
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Footer>
          </Layout>
        </Layout> */}
      </>
    );
  }


  // return (
  //   <Layout>
  //     <Sider></Sider>
  //     <Layout>
  //       <Header>Header</Header>
  //       <Content style={{ overflow: 'auto' }}>
  //         {messages.map(mess => {
  //           return (
  //             <div key={mess.id}>
  //               {mess.event === "connection"
  //                 ? <div>Пользователь {mess.username} подключился</div>
  //                 : <div>{mess.username}:{mess.message}</div>
  //               }
  //             </div>
  //           );
  //         })}
  //       </Content>
  //       <Footer>
  //         <Form
  //           name="basic2"
  //           labelCol={{ span: 3 }}
  //           wrapperCol={{ span: 20 }}
  //           // initialValues={{ remember: true }}
  //           autoComplete="off"
  //         >
  //           <Row>
  //             <Col span={20}>
  //               <Form.Item
  //                 label="Message"
  //                 name="message"
  //                 rules={[{
  //                   // required: true,
  //                   message: 'Please input your message',
  //                 },]}
  //               >
  //                 <Input value={value} onChange={e => setValue(e.target.value)} />
  //               </Form.Item>
  //             </Col>
  //             <Col span={4}>
  //               <Form.Item
  //                 wrapperCol={{
  //                   span: 2,
  //                 }}
  //               >
  //                 <Button type="primary" htmlType="submit" onClick={sendMessage}>
  //                   Отправить
  //                 </Button>
  //               </Form.Item>
  //             </Col>
  //           </Row>
  //         </Form>
  //       </Footer>
  //     </Layout>
  //   </Layout>
  // );
}

export default WebSock;
