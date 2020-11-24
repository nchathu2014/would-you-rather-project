import React from "react";
import {Tabs,Tab} from "react-bootstrap";
import WouldYouRatherView from "./WouldYourRatherView";

import {connect} from "react-redux";

const Home = function Home(props){



           console.log('!!!!!!XXX!!!!!1',props.question);


        return (
            <div>
                <Tabs defaultActiveKey="unAnsweredQs" id="uncontrolled-tab-example">
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions">
                        <WouldYouRatherView/>
                    </Tab>
                    <Tab eventKey="answeredQs" title="Answered Questions">
                        <WouldYouRatherView/>
                    </Tab>
                </Tabs>
            </div>
        );

};

function mapStateToProps({questions},{questionIds}) {

return{
    question:questions[questionIds]
}
}

export default connect(mapStateToProps)(Home);
