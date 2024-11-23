/**
 * A partir du code ci-dessous, compléter le code pour qu'à la création de l'objet
 * la propriété element contienne l'id de l'élément à modifier
 * et la propriété color la valeur hexadécimale, rgb ou nommée d'arrière plan à appliquer
 */

const Btn = {
    applyColor : function(){
        let btns = document.querySelectorAll(this.element);
        btns = Array.from(btns);
        for (let k in btns){
            console.log(k);
             btns[k].style.backgroundColor = this.color[k];
            }
    }
}


const props = {
    element:{
        value: ".bouton",
        writable: true,
        enumerable: true,
        configurable: true
},
    color:{ 
        value: ["red","blue"],
        writable: false,
        enumerable: true,
        configurable: true
}
}

const myBtn = Object.create(Btn, props);
myBtn.applyColor();
myBtn.color =  ["purple", "pink"];
myBtn.applyColor();