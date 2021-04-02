var inp_as=document.getElementById('sa_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("sa_generate");
var inp_aspeed=document.getElementById("sa_speed");
var butts_algos=document.querySelectorAll(".searchalgos button");

var div_sizes=[];
var divs=[];
var smargin_size;
var scont=document.getElementById("sarray_container");
scont.style="flex-direction:row";


inp_gen.addEventListener("click",sgenerate_array);
inp_as.addEventListener("input",supdate_array_size);

function sgenerate_array()
{
    scont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        scont.appendChild(divs[i]);
        smargin_size=0.1;
        divs[i].style=" margin:0% " +smargin_size + "%; background-color:blue; width:" + (100/array_size-(2*smargin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function supdate_array_size()
{
    array_size=inp_as.value;
    sgenerate_array();
}

window.onload=supdate_array_size();
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Linear":Linear();
                        break;
        
        
    }
}
