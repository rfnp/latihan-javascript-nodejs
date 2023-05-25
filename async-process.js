// Callback based code
// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];

//         if(isOffline) {
//             callback(new Error('cannot retrieve users due offline'), null);

//             return;
//         }

//         callback(null, users)
//     }, 3000)
// }

// function usersCallback(error, users) {
//     if(error) {
//         console.log('process failed:', error.message);
//         return;
//     }

//     console.log('process success:', users)
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due to offline

// Using Promise in async process
function getUsers(isOffline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if(isOffline) {
                reject(new Error('cannot retrieve users due to offline'));

                return;
            }

            resolve(users);
        }, 3000);
    });
}

getUsers(false)
.then(users => console.log(users))
.catch(err => console.log(err.message));

getUsers(true)
.then(users => console.log(users))
.catch(err => console.log(err.message));