/**
* Renvoie un nombre aléatoire compris entre 0 et x inclus
* @param {number} x
*/
const randomNumber =  (x: number) => {
    return Math.floor(Math.random() * x);
}

export default randomNumber;