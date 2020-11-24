import React,{Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import {saveNewQuestionToBE} from "../actions/shared";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class NewQuestion extends Component{

     handleSubmit = () => {
         const {loggedUser} = this.props;
        //console.log('!!!!!!!!!',loggedUser,this.optionOne.value)
        const newQuestion = {
            author:loggedUser,
            optionOneText:this.optionOne.value,
            optionTwoText:this.optionTwo.value
        };
        this.props.dispatch(saveNewQuestionToBE(newQuestion));
        this.props.history.push('/home');
    };
    render() {



        return(
            <Card className="text-center" style={{width:'50%',margin:'10% auto'}}>
                <Card.Header style={{fontWeight:'bold',fontSize:25}}> Create New Question </Card.Header>
                <Card.Body>
                    <Card.Title>Complete the question:</Card.Title>
                    <Card.Title>Would you rather...</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Control
                                type="text"
                                ref = {(value)=> this.optionOne = value}
                                placeholder="Enter Option One Text Here" />
                            OR
                            <Form.Control
                                type="text"
                                ref = {(value)=> this.optionTwo = value}
                                placeholder="Enter Option Two Text Here" />
                        </Form>
                    </Card.Text>
                    <Button variant="success" onClick={this.handleSubmit}>Submit</Button>
                </Card.Body>
            </Card>
        );
    }


}

export default withRouter(connect()(NewQuestion));