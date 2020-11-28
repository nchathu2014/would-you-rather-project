import React from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

 const WouldYouRatherView = function WouldYouRatherView(props){
  console.log('ZpropspropsZZ',props)

    const {questions} = props;

    const handleOnClick = (id) => {
        console.log('^^^^',props.mode);
        if(props.mode === 'result'){
            //props.history.push(`/question/${id}/results`)
        }else{
           props.history.push(`/question/${id}`)
        }

    };

    return(<div>
            {questions.map(item => (
                <Card className="text-center" style={{width:'35%',margin:'10% auto'}}>
                    <Card.Header style={{fontWeight:'bold',fontSize:14}}>
                        <h5>{item.author}</h5>
                    </Card.Header>
                    <Card.Body>
                        <Container fluid="md">
                            <Row>
                                <Col sm={3}>{item.avatarURL}</Col>
                                <Col sm={9}>
                                    <p style={{fontWeight:'normal'}}>{item.optionOne.text}</p>
                                    <p>OR</p>
                                    <p style={{fontWeight:'normal'}}>{item.optionTwo.text}</p>

                                    <Button variant="success" onClick={handleOnClick(item.id)}>View Poll</Button>

                                </Col>

                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            ))}
        </div>

    );
}

export default withRouter(connect()(WouldYouRatherView));