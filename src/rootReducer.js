import vanilla from './images/vanilla.png'
import strawberry from './images/strawberry.png'
import chocolate from './images/chocolate.png'
import banana from './images/banana.png'
import apple from './images/apple.png'
import orange from './images/orange.png'
import pineapple from './images/pineapple.png'

import pending from './images/pending.svg'
import fulfilled from './images/fulfilled.svg'
import saved from './images/saved.svg'
import logout from './images/logout.svg'
import notification from './images/notification.svg'
import cart from './images/cart.svg'

import bananaFruit from './images/treatImages/banana-fruit.jpg'
import bananaTreat from './images/treatImages/banana-treat.jpg'
import chocolateStick from './images/treatImages/chocolate-stick.jpg'
import tripleTreat from './images/treatImages/triple-treat.jpg'
import strawberryTrio from './images/treatImages/strawberry-trio.jpg'
import strawberryStick from './images/treatImages/strawberry-stick.jpg'
import vanillaTreat from './images/treatImages/vanilla-treat.jpg'
import vanillaCone from './images/treatImages/vanilla-cone.jpg'
import chocolateDuo from './images/treatImages/chocolate-duo.jpg'
import strawberryCone from './images/treatImages/strawberry-cone.jpg'
import vanillaChocolate from './images/treatImages/vanilla-chocolate.jpg'


const initState = {
    flavors: [
        { flavor: 'Vanilla', id: 1, picture: vanilla },
        { flavor: 'Strawberry', id: 2, picture: strawberry },
        { flavor: 'Chocolate', id: 3, picture: chocolate },
        { flavor: 'Banana', id: 4, picture: banana },
        { flavor: 'Apple', id: 5, picture: apple },
        { flavor: 'Orange', id: 6, picture: orange },
        { flavor: 'Pineapple', id: 7, picture: pineapple }
    ],
    accountInfo: [
        { icon: notification, text: 'Notifications', color: null, link: '/app/notification' },
        { icon: pending, text: 'Pending Orders', color: '#003CFF' },
        { icon: fulfilled, text: 'Fulfilled Orders', color: '#00FF66' },
        { icon: cart, text: 'Cart', color: '#FF9B06', link: '/app/cart' },
        { icon: saved, text: 'Saved Items', color: '#FF58BC', link: '/app/saved' },
        { icon: logout, text: 'Logout', color: '#FF0000' }
    ],
    treats: [
        { name: 'Banana Fruit', price: 5, id: 1, flavor: 'Banana', flavor2: 'Orange', picture: bananaFruit, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Chocolate Stick', price: 4, id: 2, flavor: 'Chocolate', picture: chocolateStick, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Banana Treat', price: 7, id: 3, flavor: 'Banana', picture: bananaTreat, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Triple Treat', price: 10, id: 4, flavor: 'Strawberry', flavor2: 'Orange', picture: tripleTreat, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Strawberry Trio', price: 12, id: 5, flavor: 'Strawberry', picture: strawberryTrio, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Strawberry Stick', price: 4, id: 6, flavor: 'Strawberry', picture: strawberryStick, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Vanilla Treat', price: 11, id: 7, flavor: 'Vanilla', picture: vanillaTreat, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Vanilla Cone', price: 6, id: 8, flavor: 'Vanilla', picture: vanillaCone, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Chocolate Duo', price: 7, id: 9, flavor: 'Chocolate', picture: chocolateDuo, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Strawberry Cone', price: 7, id: 10, flavor: 'Strawberry', picture: strawberryCone, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
        { name: 'Vanilla et Chocolate', price: 7, id: 11, flavor: 'Vanilla', flavour2: 'Chocolate', picture: vanillaChocolate, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer