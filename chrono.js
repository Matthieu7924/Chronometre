'use strict'


let count =0
let countm = 0
let counts = 0
let countcs =0

document.addEventListener ('DOMContentLoaded' , function() {
let start= document.getElementById('start')
let stopp= document.getElementById('stop')
let reset= document.getElementById('reset')
let chrono = document.getElementById('chrono')
let t1



    function stm (){ 
        countcs= countcs+1 
        if (countcs>99) {
            countcs = 0;
            counts++;
            } 
        if (counts>= 60) {
            counts = 0;
            countm++;
            } 
        chrono.innerText = countm + ":" + counts + ":" + countcs
        t1 = setTimeout(stm, 10)
    }


    function stp(){
        window.clearTimeout(t1)
        }

    function zero(){
        counts=0
        countm=0
    }

    start.addEventListener('click',stm)
    stopp.addEventListener('click',stp)
    reset.addEventListener('click',zero)

    })

