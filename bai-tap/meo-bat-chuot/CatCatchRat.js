class Rat {
    constructor(weight,speed) {
        this.name = 'Jerry';
        this.weight = weight;
        this.speed = speed;
        this.status = 'Alive';
    }
    say(){
        return "chit chit";
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
}

class Cat {
    constructor(weight,speed) {
        this.name = 'Tom';
        this.weight = weight;
        this.speed = speed;
    }
    say(){
        return "meo meo";
    }
    catch(speedMouse){
        if(this.speed>speedMouse){
            return 'Catched';
        }
        return 'Miss';
    }
    eat(WeightMouse){
        if(this.catch(WeightMouse)){
           return this.weight+=WeightMouse;
        }
    }
}
function IsValidNumber(num){
    num = parseFloat(num);
    return !isNaN(num) && num >= 1;
}

function CheckInPut(value1,value2,value3,value4) {
    return IsValidNumber(value1) && IsValidNumber(value2) && IsValidNumber(value3) && IsValidNumber(value4);
}

function CatchAndEat() {
    
    let speedTom = parseFloat(document.getElementById("speedCat").value);
    let speedJerry = parseFloat(document.getElementById("speedRat").value);
    let weightTom = parseFloat(document.getElementById("weightCat").value);
    let weightJerry = parseFloat(document.getElementById("weightRat").value);
    let check = CheckInPut(speedJerry,speedTom,weightJerry,weightTom);
    let tom = new Cat( weightTom, speedTom );
    let jerry = new Rat( weightJerry, speedJerry );

    if(check){
        if(tom.catch(jerry.speed)==='Catched' && jerry.status ==='Alive'){
            tom.eat(jerry.weight);
            jerry.setStatus('Dead');
            jerry.weight= 0;
        }
        document.getElementById('statusCat').value = tom.catch(jerry.speed);
        document.getElementById('statusRat').value = jerry.getStatus();
        document.getElementById('weightCat').value = tom.weight;
        document.getElementById('weightRat').value = jerry.weight;
        document.getElementById('Cat').value = tom.say();
        document.getElementById('Rat').value = jerry.say();
        document.getElementById('catName').innerHTML = tom.name;
        document.getElementById('ratName').innerHTML = jerry.name;
    }
    else {
        alert("Invalid value !!!");
    }
}