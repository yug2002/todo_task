'use strict'

// export const waitFor = (condition) => new Promise(resolve => {
//   const delay = 500;
//   const f = () => {      
//     if (condition) {
//         resolve(true);
//     } else {
//         setTimeout(f, delay);
//     }
//   }
//   f();
// });

export const waitFor = async (condition) => {
  const delay = 500;
  let res = () => await condition;
  if(!res) {
    setTimeout(res, delay);
  }
  res();
}