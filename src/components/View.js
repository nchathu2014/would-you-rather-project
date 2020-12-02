import React,{Component} from "react";
import {Card, Button, Container, Row, Col, Alert, ProgressBar, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {saveNewQuestionToBE, saveQuestionAnswer} from "../actions/shared";
import {_saveQuestionAnswer} from "../utils/_DATA";
import {Link,Redirect} from "react-router-dom";


class View extends Component{
   /* console.log('######### VIEW PAGE: ',props.location.state);

    const {filteredQuestion,userName,avatarURL} = props.location.state;
    const optionOneText = filteredQuestion[0].optionOne.text;
    const optionTwoText = filteredQuestion[0].optionTwo.text;*/

   state = {
       selectOption:""
   };

    handleSelection = (event) => {
      this.setState({
          selectOption: event.target.value
      })
    };

  handleSubmit = (question,selectOption) => {
    console.log('handleSubmit() => ',question,selectOption);


    this.props.dispatch(saveQuestionAnswer(question,selectOption));
    this.props.history.push('/dashboard');
    };

    render(){

       if(this.props.loggedUser === null){return <Redirect to="/login"/>}

        const {filteredQuestion,userName,avatarURL} = this.props.location.state;
        const optionOneText = filteredQuestion[0].optionOne.text;
        const optionTwoText = filteredQuestion[0].optionTwo.text;

        const {author,id} = filteredQuestion[0];
        const {selectOption} = this.state;






    return(
        <div>

            <Card style={{ width: '35rem' , margin:'40px auto'}}>
                <Card.Header><strong>{userName}</strong> asks</Card.Header>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <Card.Img variant="top" src={avatarURL} />
                            <Link to="/dashboard">[Back]</Link>
                        </Col>
                        <Col sm={7}>
                            <Card.Body>
                                <Card.Title>{"Would You Rather..."}</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={optionOneText}
                                            name={'grp1'}
                                            value={'optionOne'}
                                            onChange={this.handleSelection}
                                        />
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={optionTwoText}
                                            name={'grp1'}
                                            value={'optionTwo'}
                                            onChange={this.handleSelection}
                                        />


                                    </Form>
                                </Card.Text>
                                <Button
                                    variant="success"
                                    disabled={!this.state.selectOption}
                                    onClick={() => this.handleSubmit(filteredQuestion[0],selectOption)}>Submit</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>


            </Card>

        </div>
    );
     }
}

function mapStateToProps({loggedUser}){
    return{
        loggedUser
    }
}

export default connect(mapStateToProps)(View);