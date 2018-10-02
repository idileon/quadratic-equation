function solQuadEq(a, b, c) {
    const discr = calcDiscr(a, b, c);
    if (discr == 0) {
        const comroot = -bNum / (2 * aNum);
        return 'solution have one common root = ' + comroot;
    } else if (discr > 0) {
        const x1 = (-bNum + Math.sqrt(discr)) / (2*aNum);
        const x2 = (-bNum - Math.sqrt(discr)) / (2*aNum);
        return 'Solution have 2 roots: root1 = ' +  x1  + ' and root2 = ' + x2;
    }  else {
        return 'have no solution, because d<0';
    }
}

function calcDiscr(a, b, c) {
const d = bNum * bNum - 4 * aNum * cNum;
return d;
}

const aNum = parseFloat(prompt('enter A'));
const bNum = parseFloat(prompt('enter B'));
const cNum = parseFloat(prompt('enter C'));

alert(solQuadEq(aNum, bNum, cNum));

