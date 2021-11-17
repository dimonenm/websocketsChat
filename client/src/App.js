import { Form, Input, Button, DatePicker, Layout, Row, Col } from "antd";
import './App.css'; // ?

function App() {
  const { Header, Footer, Content, Sider } = Layout;
  return (
    <Layout>
      <Sider>

      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{overflow: 'auto'}}></Content>
        <Footer>
          <Row>
            <Col span={10} offset={1}>
              <DatePicker />
            </Col>
            <Col span={10} offset={1}>
              <Button>Ввести</Button>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
