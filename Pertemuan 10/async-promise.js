const persiapan=() => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("Persiapan...");
        }, 3000);
    });
};