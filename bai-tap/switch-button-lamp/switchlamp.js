class SwitchButton {
    constructor() {
        this.status = false;
    }
    switchOn() {
        this.status = true;
    }
    switchOff() {
        this.status = false;
    }
    connectToLamp(electricLamp) {
        if(this.status && !electricLamp.status){
            electricLamp.turnOn();
        }
        if(!this.status && electricLamp.status){
            electricLamp.turnOff();
        }
    }
}

class ElectricLamp {
    constructor() {
        this.status = false;
    }
    turnOn() {
        document.getElementById('myImage').src="bulbon.png";
        this.status= true;
    }
    turnOff() {
        document.getElementById('myImage').src="bulboff.png";
        this.status = false;
    }
}
function main(){
    let switchButton = new SwitchButton();
    let electricLamp = new ElectricLamp();
    let buttonOn = document.getElementById("on");
    let buttonOff = document.getElementById("off");
    buttonOn.onclick = function(){
        switchButton.switchOn();
        switchButton.connectToLamp(electricLamp);
    }
    buttonOff.onclick = function(){
        switchButton.switchOff();
        switchButton.connectToLamp(electricLamp);
    }
}
window.onload = main();