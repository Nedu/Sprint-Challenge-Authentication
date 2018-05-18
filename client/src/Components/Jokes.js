import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';

import { styles } from '../styles';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  componentDidMount() {
    this.getJokes();
  }

  getJokes = () => {
    const token = localStorage.getItem('token');
    const authToken = `${token}`;
    const requestOptions = {
      headers: {
        Authorization: authToken,
      },
    };

    axios
      .get(`http://localhost:5000/api/jokes`, requestOptions)
      .then(jokes => {
        this.setState({ jokes: jokes.data });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/signin');
      });
  };

  render() {
    return (
      <div>
        <Container>
            <Row>
                {this.state.jokes.map(jokes => {
                return <div key={jokes.id}>
                    <Col style={styles.CardLayout} sm="12" md="4">
                      <Card body>
                        <CardTitle>{jokes.setup}</CardTitle>
                        <CardText>{jokes.punchline}</CardText>
                      </Card>
                    </Col>
                  </div>;
                })}
            </Row>
        </Container>
      </div>
    );
  }
}

export default Jokes;
