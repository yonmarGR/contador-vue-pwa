if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => console.log('Registro Exitoso'))
    .catch((error) => console.log(error));
}

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./sw-test/sw.js', {scope: './sw-test/'})
//   .then((reg) => {
//     // registration worked
//     console.log('Registration succeeded. Scope is ' + reg.scope);
//   }).catch((error) => {
//     // registration failed
//     console.log('Registration failed with ' + error);
//   });
// }
