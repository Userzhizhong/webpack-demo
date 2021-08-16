// import _ from 'lodash';
// import './style.css';
// // import Poly from './poly.jpeg'
// import printMe from './print';
// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
//   const br = document.createElement('br');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' '); //lodash

//   element.classList.add('hello');

//   btn.innerHTML = 'click me and check the console';
//   btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//     const print = module.default;
//     print();
//   });
//   element.appendChild(br);
//   element.appendChild(btn);
//   return element;
// }

// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js',function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染“component”,以便更新click事件处理函数
//     document.body.appendChild(element);
//   })
// }

// function getComponent() {
//   const element = document.createElement('div');
//   return import(/* webpackPrefetch: true */'lodash')
//     .then(({default:_}) => {
//       const element = document.createElement('div');
      
//       element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
//       return element;
//     })
//     .catch((error) => 'an error occurred while loading the component');
// }
// getComponent.then((component) => {
//   document.body.appendChild(component);
// })

async function getComponent() {
  const element = document.createElement('div');
  const {default: _} = await import (/* webpackChunkName: "lodash" */'lodash');
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  return element
}
getComponent.then((component) => {
  document.body.appendChild(component);
})
