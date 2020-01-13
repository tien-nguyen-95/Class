class Remote {
    constructor(code) {
        this.code=code;
    }

    power(tv) {
        if(this.code === tv.code){
            tv.status = !tv.status;
            if(tv.status){
            document.getElementById("statusTv").innerHTML = "On";
            document.getElementById("channelTv").innerHTML = tv.channel;
                document.getElementById("volumTV").innerHTML = tv.vol;
            } else {
                document.getElementById("statusTv").innerHTML = "Off"
                document.getElementById("channelTv").innerHTML = "";
                document.getElementById("volumTV").innerHTML = "";
            }
        }
    }

    move(tv) {
        let num = parseInt(document.getElementById("channel").value);
        if(this.code === tv.code && tv.status){
            if(IsValidNumber(num)) {
                tv.channel=num;
                document.getElementById("channelTv").innerHTML = tv.channel;
            } else{
                alert ("Invalid channel value");
            }      
        }
        else{
            alert ("Please Turn On")
        }
    }

    volUp(tv) {
        if(this.code === tv.code && tv.status ){
            if(tv.vol<10) tv.vol++;
            document.getElementById("volumTV").innerHTML = tv.vol;
        }
        else{
            alert("Please turn On");
        }
    }

    volDown(tv) {
        if(this.code === tv.code && tv.status ){
            if(tv.vol>0) tv.vol--;
            document.getElementById("volumTV").innerHTML = tv.vol;
        }
        else{
            alert("Please turn On");
        }
    }
}

class Tivi {
    constructor(code,channel) {
        this.code = code;
        this.status = false;
        this.channel = channel;
        this.vol = 0;
    }
}

function IsValidNumber(num){
    num = parseInt(num);
    return !isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 10;
}


function main() {
    let remote = new Remote(1);
    let tv = new Tivi (1,7);
    
    let clickPower = document.getElementById('power');
    let clickMove = document.getElementById('move');
    let clickVolUp = document.getElementById('volUp');
    let clickVolDown = document.getElementById('volDown');

    clickPower.onclick = function() {
        remote.power(tv);
    }

    clickMove.onclick = function() {
            remote.move(tv);
    }

    clickVolUp.onclick = function() {
        remote.volUp(tv);
    }

    clickVolDown.onclick = function() {
        remote.volDown(tv); 
    }
}
window.onload = main();