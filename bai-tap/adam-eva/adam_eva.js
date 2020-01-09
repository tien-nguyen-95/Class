class Apple {
    constructor (){
        this.weight = 10;
    }
    decrease (){
        this.weight--;
    }
    isEmpty() {
        return (this.weight <= 0) ? true : false;
    }
    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    eat(apple) {
        if (!apple.isEmpty()) {
            apple.weight--;
            document.getElementById('WeightApple').innerHTML = apple.getWeight();
            this.weight++;
        } else {
            location.reload();
            alert("Táo đã bị ăn hết!");
        }
    }
}
function main(){
        let adam = new Human ('Adam','male',60);
let eva = new Human ('Eva','female',50);
console.log(adam.name);
const nameAdam = adam.name;
document.getElementById('name1').innerHTML = nameAdam;
document.getElementById('name2').innerHTML = eva.name;
let apple = new Apple();
let eat1 = document.getElementById('eat1');
let eat2 = document.getElementById('eat2');
eat1.onclick = function(){
    adam.eat(apple);
}

eat2.onclick = function(){eva.eat(apple);}

document.getElementById('weight1').innerHTML = adam.weight;
document.getElementById('weight2').innerHTML = eva.weight;
document.getElementById('sex1').innerHTML = adam.gender;
document.getElementById('sex2').innerHTML = eva.gender;
document.getElementById('WeightApple').innerHTML = apple.getWeight();
}