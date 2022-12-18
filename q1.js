const isValid = (s) => {
    let list = [];
    let small = ['(', ')'];
    let middle = ['[', ']'];
    let large = ['{', '}'];
    let right = ['(', '[', '{'];
    let oppsit = [')', ']', '}'];
    for (let i = 0;i < s.length;i++) {
        let char = s[i];
        if (list.length === 0 && match.indexOf(char) >= 0) {
            return false;
        }
        if (list.length === 0) {
            list.push(char);
        }
        if (list.length !== 0) {
            if (right.indexOf(char) >= 0) {
                list.push(char);
            } else {
                getMatch(char, list);
            }
        }
    }
    return list.length === 0;
};

function getMatch () {
    let a = 1;
    console.log(a);
}