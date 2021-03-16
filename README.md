# react-redux-setup
Very bare minimum react app that will guide you through the step by step process of setting up redux.

## Scenario / Summary
The react app will execute the following scenario, there is a local cake shop that sells cake. 

| Entities   | Actions                                           |
|------------|---------------------------------------------------|
| Cake Shop  | Giving a receipt to keep a log of transations     |
| Shop Owner | Shopkeeper will remove/add a cake from inventory  |
| Customer   | Customer buying a cake                            |

#### Store
A term that you will hear about in redux. It holds the state of your application. In the real world scenario the shop can be thought of as the store.

#### Action
Describes what happened, in the scenario the customer is telling the shopkeeper that we wish to purchase a cake. This intention is what is known as an action in redux. 

#### Reducer
What ties the store and action together. In the scenario, the reducer is the shopkeeper, he receives the action by the customer and then removes a cake from the shelf. 

#### Summary
Redux is mainly formed about these three concepts.
- a store that holds the state of your application 
- an action that describes the changes in the state of the application 
- a reducer which actually carries to the state transition depending on the action

## Import
- redux
- react-redux

## Setup
A brief explanation of what may be the best way to set up your redux. Start by creating the action and types then to reducers then lastly create the store and connect to react.

### Action
We created a redux dir that will hold all of our actions and reducers. Note that this folder structure may differ to another developers, just find what works best for you.

In the action dir, we created a CakeAction and a CakeType, each storing their respective code. 

### Reducer 
You will create a reducer that will accept the action object. This reducer is a function that accepts a state as well as an action. We will want to setup the initialState to pass that into the reducer and the reducer will be a switch case statement that will follow out certain actions based on the action.type

In this case, the action.type is BUY_CAKE which will result in one deduction of our cakes. You will want to ensure that you export this reducer. 

### Store 
We created a store.js in the redux dir and here we will import the createStore from redux and we will use that to create a store, the accepts two arguments, one being the reducer and the other is like helper technology to connect it with the chrome dev tools but you can also applyMiddleware such as thunk (this will be talked about later).

We will need to export the store

### Connecting the Store
In your App.js you will need to import the store and the Provider from react-redux. You will wrap your App with the Provider and pass the store we created as a prop in the Provider tag. This will allow the store to be accessible by all components.

You also need to go to the component in which you need to use redux for and also import the connect function from react-redux. You will need to create two functions outside of the component which will return the state and the action creator. You will then need to connect these functions by passing them both as argument to the connect fn and pass the component right after. By doing so, you will now be able to access the state and action creator through props. 

### Redux DevTools
This is an extension that works with chrome and you will need to ensure that you have the extension installed. After that you will need to `npm i --save redux-devtools-extension`

From this library you will need to import `import {composeWithDevTools} from 'redux-devtools-extension'` and from here you will import that into your store file because you need to pass it as the second argument in the createStore(), the argument that this function accepts is the applyMiddleware function and you can pass it middleware such as logger or thunk

### Payload
1. in your action creator, we only have ‘type’ as the property for our action object, but we can actually create another property named payload. This is the naming convention and you’ll most likely encounter this terminology in your career.
2. In the payload property, you can retrieve a value that is given from the frontend, in this scenario we have an input tag that will be controlled with a state named number, it will have a default state 1 but the user will be able to type in the amount of cakes that they wish to buy and it will do the math accordingly.
3. You will need to make a state and then connect it with an element to make it a controlled component/element.
4. For method 1 of connecting redux to your component (ie using the connect function) you will need to ensure that you pass this state to the action creator which is in the function outside of the component and used to connect to the component. 
5. For method 2 (not using the connect fn but using hooks instead) you will just need to pass this to the action creator inside of the dispatch
6. From there you will need to go to the action creator and make it aware of the number, so you pass that as a parameter into the function and then you assign that value to the payload. 
7. Next you will want to go to the reducer and then what you do from here is that you will need to call that property. So in this scenario instead of numOfCakes reducing by 1, you will reduce it by action.payload which holds the number that you want to reduce it by. 
