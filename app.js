/* SEQUENTIAL */

/* The below code works, but it would be nice to not have to do the math to figure out
how long each time out needs to be */

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
// }, 4000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue';
// }, 5000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'purple';
// }, 6000);


/* NESTED */

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'purple';
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

/* using callbacks */

// const delayColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         //in case it's undefined
//         doNext && doNext();
//     }, delay)
// };

// delayColorChange('red', 1000, () => {
//     delayColorChange('orange', 1000, () => {
//         delayColorChange('yellow', 1000, () => {
//             delayColorChange('green', 1000, () => {
//                 delayColorChange('blue', 1000, () => {
//                     delayColorChange('purple', 1000)
//                 })
//             })
//         })
//     })
// });

/* Callback hell: passing a ton of callbacks with lots of nesting 
    - typical example is requests where you would pass in two callbacks, one for
       success and one for failure
*/

// const fakeRequest = (url) => {
//     return new Promise ((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve();
//             } 
//             reject('Request error');
//         }, 1000)
//     })
// };

// fakeRequest('google.com/dogs/1')
// .then(() => {
//     console.log('Done with request');
// })
// .catch((err) => {
//     console.log('Oh no!', err)
// })

const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
};

// delayColorChange('red', 1000)
//     .then(() => delayColorChange('orange', 1000))
//     .then(() => delayColorChange('yellow', 1000))
//     .then(() => delayColorChange('green', 1000))
//     .then(() => delayColorChange('blue', 1000))
//     .then(() => delayColorChange('purple', 1000))


// async + await simplifies promises even further
async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    await delayColorChange('purple', 1000)
};

// waits until the end of rainbow, then prints
rainbow().then(() => console.log('End of rainbow :)'))