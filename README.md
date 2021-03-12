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

