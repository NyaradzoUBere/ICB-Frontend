# I Can't Breathe-Frontend


## Table of Contents
* [About](#about-icb)
* [Video](#icb-walkthrough-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#icb-features)
* [Status](#status)
* [Contact](#contact)
* [License](#license)

## About ICB
I Can't Breathe is built to serve as a first step resource towards anti-racism and reversing negative racial bias. It was created in response to the protests occuring around the country as a result of the death of George Floyd. Previously, in order to gain information and educate yourself about deaths resulting from police brutality and racist-driven attacks, one had to devote a lot of time to research and search through the web. Now, that information is provided immediately, allowing for ease of use and making the self-education process overall simpler.


## ICB Walkthrough Video
<!-- [I Can't Breathe Walkthrough](https://youtu.be/k4dwUqnWSz4) -->
Coming Soon

## Technologies
React.js - Version 16.13.1

JavaScript ES6

HTML5 / CSS3

ICB is also a Progressive Web App

## Setup

1. To run this project, please go to the [ICB Backend repo](https://github.com/NyaradzoUBere/ICB-Backend) and follow setup instructions
2. Run ~ npm start in your front-end directory

## Code Examples

```
    componentDidMount() {
        window.scrollTo(0, 0)
        const answerOptions = quizQuestions.map(question =>
        (question.answers)
        );
        this.setState({
        question: quizQuestions[0].question,
        answerOptions: answerOptions[0]
    }
```
```
    <div className = "what-happened-aftermath">
        <div className = "what-happened">
            <h1 className = "what-happened-label">What Happened</h1>
            <p className = "details-details">{props.person.details}</p>
        </div>
        <div className = "aftermath">
            <h1 className = "aftermath-label">The Aftermath</h1>
            <p className = "details-aftermath">{props.person.aftermath}</p>
        </div>
    </div>
```
## ICB Features
* Read through the case of your choice, learning what happened, when, where, and the aftermath
* Complete an unconscious bias self assessment to take steps towards self awareness
* Read articles related to the black community, blm, trials, etc.
* Coming Soon: Access to anti-racism resources such as movies, shows, books, and podcasts


To-Do List:
* Complete anti-racism resource feature

## Status
Completed.

## Contact
Created by [Nyaradzo Bere](http://www.linkedin.com/in/nyaradzo-bere)

## License
[View Here](License.txt)
