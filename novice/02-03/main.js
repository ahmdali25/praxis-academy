// Synchronous Callback

function calculate(param1,param2,callback){
    //default operation
    result = param1 + param2;
    
    // callback is function ?
    if (typeof callback == 'function'){
     result= callback(param1,param2);
    }
    
    return result;
}
  
console.log("addition: ", calculate(2, 2));
console.log("divide: ", calculate(10,2, (a,b) => (a/b)));
console.log("subtraction: ",calculate(10,5, (a,b) => (a-b)));

// Asynchronous Callback

function p1() {
    console.log('p1 done');
  }
  function p2(callback) {
    //setTimeout or delay for asynchronous simulation 
    setTimeout(
        function() {
          console.log('p2 done')
          callback();
        }, 100);
  }
  function p3() {
    console.log('p3 done');
  }
  p1();
  p2(p3);

// Promise Aynchronous

let fullfiled = true;
const promise = new Promise((resolve, reject) => {
    if ( fullfiled ) {
        setTimeout(() => {
            resolve('Promise fullfilled');
        }, 500);
    } else {
        setTimeout(() => {
            reject('Promise rejected');
        })
    }
});

console.log('mulai');
promise
    .finally(() => console.log(' selesai menunggu'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));
console.log('selesai');

// Async Await

function cobaPromise() {
    return new Promise((resolve, reject) => {
     const time = 3000;
     if (time < 5000) {
        setTimeout(() => {
            resolve('selesai');
        }, time); 
     }  else {
         reject('kelamaan!');
     }
    });
}

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.log(err);
    }
}

cobaAsync();