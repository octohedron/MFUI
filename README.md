# MFUI stands for Meteor Filter User Interface

Cloud-enabled, full-responsive, Item filtering UI

### Version
0.0.3 Alpha

### Tech

* [Meteor] - Awesome framework for web applications
* [ReactJS] - A JavaScript library for building user interfaces
* [Twitter Bootstrap] - great UI boilerplate for modern web apps _Will be replaced by cloudflare UI_

### Installation

```sh
$ curl https://install.meteor.com/ | sh
$ clone this repo
$ cd MFUI
$ meteor npm install --save react react-dom lodash react-addons-pure-render-mixin meteor-node-stubs
$ meteor
```
Optionally, load the data from the json file to see some mock data, you need to be standing where the json file is.

```sh
$ mongoimport -h localhost:3001 --db meteor --collection papers --type json --file papers.json --jsonArray
```

Now, go to http://localhost:3000/ in your browser to see the app in development mode.

### TESTING

***Tools***

* [Chai] - BDD / TDD assertion library for node and the browser
* [Mocha] - Feature-rich JavaScript test framework running on Node.js and in the browser
* [Enzyme] - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

***Preparation***
```sh
$ meteor add dburles:factory
$ meteor npm install --save enzyme react-addons-test-utils
```

***Running the tests***
```sh
$ meteor test --driver-package practicalmeteor:mocha --port 3100
```

Now, go to http://localhost:3100/ for nicely formatted Mocha output of the test results

***The terminal should output***
```sh
=> Meteor server restarted
I20160728-13:42:30.734(2)? MochaRunner.runServerTests: Starting server side tests with run id 67nJBskPPmhZavQ4r
I20160728-13:42:30.778(2)? { title: 'testing',
I20160728-13:42:30.779(2)?   thumbnail: 'https://placeimg.com/400/400/any',
I20160728-13:42:30.779(2)?   creator:
I20160728-13:42:30.779(2)?    { name: 'Test author',
I20160728-13:42:30.779(2)?      profileUrl: 'http://dev.science.cx/' },
I20160728-13:42:30.780(2)?   createdAt: 'July 31, 2015' }
W20160728-13:42:30.831(2)? (STDERR) MochaRunner.runServerTests: failures: 0
```

### TODO

 - Write more tests
 - Add account system
 - Add comments
 - Port to mobile
 - More awesome stuff

   [Mocha]: <https://mochajs.org/>
   [Meteor]: <https://www.meteor.com>
   [Chai]: <https://github.com/chaijs/chai>
   [Enzyme]: <https://github.com/airbnb/enzyme>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [ReactJS]: <https://facebook.github.io/react/>