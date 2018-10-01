const yourName = prompt('enter your name');
const greetings = 'Hi, there ' + yourName + ' lets find solution for your quadratic equation';
alert(greetings)

const aNum = parseFloat(prompt('enter A'));
const bNum = parseFloat(prompt('enter B'));
const cNum = parseFloat(prompt('enter C'));

function solQuadEq(a, b, c) {
    const discr = bNum * bNum - 4 * aNum * cNum;
    if (discr == 0) {
        const comroot = -bNum / (2 * aNum);
        return 'solution have one common root = ' + comroot;
    }
    else if (discr > 0) {
        const x1 = -bNum + Math.sqrt(discr) / 2*aNum;
        const x2 = -bNum - Math.sqrt(discr) / 2*aNum;
        return 'Solution have 2 roots: root1 = ' +  x1  + ' and root2 = ' + x2;
    }  
    else if (discr < 0){
        return 'No solution';
    }
}

alert(solQuadEq());

