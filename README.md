# Would You Rather Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Project Overview
In the "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## How to Run:

* Download or Run git clone https://github.com/nchathu2014/would-you-rather-project.git to clone this repository.
* Install all project dependencies with `npm install`.
* Start the development server with `npm start`.
* App can be seen at: http://localhost:3000.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|


## Contracts

###USERS

```
users: {
	johndoe: {
		answers: {xj352vofupe1dqz9emx13r: "optionOne", vthrdm985a262al8qx3do: "optionTwo", 6ni6ok3ym7mf1p33lnez: "optionTwo"}
		avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg"
		id: "johndoe"
		name: "John Doe"
		questions: (2) ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
	},
	sarahedo: {id: "sarahedo", name: "Sarah Edo", avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg", answers: {…}, questions: Array(2)}
	tylermcginnis: {id: "tylermcginnis", name: "Tyler McGinnis", avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg", answers: {…}, questions: Array(2)}
}
```



###QUESTIONS

```
questions: {
	6ni6ok3ym7mf1p33lnez:{
		id: "6ni6ok3ym7mf1p33lnez"
		author: "johndoe"
		optionOne: {votes: Array(0), text: "become a superhero"}
		optionTwo: {votes: Array(2), text: "become a supervillain"}
		timestamp: 1468479767190
	
	},
	8xf0y6ziyjabvozdd253nd: {id: "8xf0y6ziyjabvozdd253nd", author: "sarahedo", timestamp: 1467166872634, optionOne: {…}, optionTwo: {…}}
	am8ehyc8byjqgar0jgpub9: {id: "am8ehyc8byjqgar0jgpub9", author: "sarahedo", timestamp: 1488579767190, optionOne: {…}, optionTwo: {…}}
	loxhs1bqm25b708cmbf3g: {id: "loxhs1bqm25b708cmbf3g", author: "tylermcginnis", timestamp: 1482579767190, optionOne: {…}, optionTwo: {…}}
	vthrdm985a262al8qx3do: {id: "vthrdm985a262al8qx3do", author: "tylermcginnis", timestamp: 1489579767190, optionOne: {…}, optionTwo: {…}}
	xj352vofupe1dqz9emx13r: {id: "xj352vofupe1dqz9emx13r", author: "johndoe", timestamp: 1493579767190, optionOne: {…}, optionTwo: {…}}		
}
```

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
