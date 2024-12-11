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

const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        //in case it's undefined
        doNext && doNext();
    }, delay)
};

delayColorChange('red', 1000, () => {
    delayColorChange('orange', 1000, () => {
        delayColorChange('yellow', 1000, () => {
            delayColorChange('green', 1000, () => {
                delayColorChange('blue', 1000, () => {
                    delayColorChange('purple', 1000)
                })
            })
        })
    })
});

/* Callback hell: passing a ton of callbacks with lots of nesting */