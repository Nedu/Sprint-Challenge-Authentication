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
import FlipCard from 'react-flipcard-2'

import { styles } from '../styles';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isFlipped: false
    };
  }

  componentDidMount() {
    this.getJokes();
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
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
                return <div key={jokes.id} style={styles.CardContainer}>
                    <Col style={styles.CardLayout} sm="12" md="4">
                      <FlipCard>
                        <div>
                          <Card body>
                            <CardTitle>{jokes.setup}</CardTitle>
                          </Card>
                        </div>
                        <div>
                          <Card body>
                            <CardText>{jokes.punchline}</CardText>
                          </Card>
                        </div>
                      </FlipCard>
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
