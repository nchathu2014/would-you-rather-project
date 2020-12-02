import React,{Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import {getQuestionsFromBE, getUsersFromBE, saveNewQuestionToBE} from "../actions/shared";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import questionImg from "../assets/images/question.png";



class NewQuestion extends Component{

    componentDidMount() {

        this.props.dispatch(getQuestionsFromBE());
    }

     handleSubmit = () => {
         const {loggedUser} = this.props;
        console.log(this.props);
        const newQuestion = {
            author:loggedUser.id,
            optionOneText:this.optionOne.value,
            optionTwoText:this.optionTwo.value
        };

        this.props.dispatch(saveNewQuestionToBE(newQuestion));
        this.props.history.push('/dashboard');
    };
    render() {

        return(
            <Card className="text-center" style={{width:'35%',margin:'30px auto'}}>
                <Card.Header style={{fontWeight:'bold',fontSize:18}}> Create New Question </Card.Header>
                <Card.Img variant="top" src={questionImg} style={{width: '20%', margin: '10px auto'}}/>
                <Card.Body>
                    <Card.Title style={{fontSize:16}}>
                        <div>Complete the question:</div>
                        <div><b>Would you rather...</b></div>
                    </Card.Title>

                    <Card.Text>
                        <Form>
                            <Form.Control
                                type="text"
                                ref = {(value)=> this.optionOne = value}
                                placeholder="Enter Option One Text Here" />
                            <div style={{margin:'10px 0'}}>OR</div>
                            <Form.Control
                                type="text"
                                ref = {(value)=> this.optionTwo = value}
                                placeholder="Enter Option Two Text Here" />
                        </Form>
                    </Card.Text>
                    <Button variant="dark" onClick={this.handleSubmit}>Submit</Button>
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({loggedUser}){
    return{
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));