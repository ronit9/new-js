let milsec = document.getElementById('milsec').innerHTML = 0
let sec = document.getElementById('sec').innerHTML = 0
let min = document.getElementById('min').innerHTML = 0
let hour = document.getElementById('hour').innerHTML = 0

const startwatch = () => {
    stop = setInterval(() => {
        milsec++;
        document.getElementById('milsec').innerHTML = milsec
        if (milsec == 60) {
            milsec = 0;
            document.getElementById('milsec').innerHTML = milsec;
            sec++;
            document.getElementById('sec').innerHTML = sec;
            if (sec == 60) {
                sec = 0;
                document.getElementById('sec').innerHTML = sec;
                min++;
                document.getElementById('min').innerHTML = min
                if (min == 60) {
                    min = 0;
                    document.getElementById('min').innerHTML = min;
                    hour++;
                    document.getElementById('hour').innerHTML = hour
                    if (hour == 12) {
                        hour++;
                        document.getElementById('hour').innerHTML = hour
                    }
                }
            }
        }
        document.getElementById('stop').disabled = false
    }, 20)
}

const stopwatch = () => {
    clearInterval(stop)
    if (sec != 0) {

        document.getElementById('stop').disabled = true
    }
}

const resetwatch = () => {
    document.getElementById('milsec').innerHTML = "0"
    document.getElementById('sec').innerHTML = "0"
    document.getElementById('min').innerHTML = "0"
    document.getElementById('hour').innerHTML = "0"
}