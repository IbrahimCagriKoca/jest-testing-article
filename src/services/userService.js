export function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: 'John Doe' });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}
