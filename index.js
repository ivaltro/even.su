function task(x) {
    return new Promise((res, rej) => x < 18 ? res("yes") : rej("no"));
}
task(17)
.then(x => console.log(x))
.catch(y => console.log(y));