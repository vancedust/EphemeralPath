

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function titleupdate(){
    var tit = document.getElementById("namebox").value +"-"+ document.getElementById("unittot1").value;
    //document.getElementById("unittab").value = tit
    document.title=tit
    }

function statimgupdate(){
    var bck = document.querySelector(':root');
    var hp_s = document.getElementById("hp").value;
    var hp_i = parseInt(hp_s);
    var mov_s = document.getElementById("mov").value;
    var mov_i = parseInt(mov_s);
    var frc_s = document.getElementById("frc").value;
    var frc_i = parseInt(frc_s);
    var rng_s = document.getElementById("rng").value;
    var rng_i = parseInt(rng_s);
    var basesum = document.getElementById("unittot1").value;
    var minisize = document.getElementById("sizesel").value;
    var basedim = document.getElementById("basedia").value;
    var actnum = 3
    if (minisize == "lea"){
      actnum = 2;
    }
    if (basedim > 55){
      actnum = 2;
    }
    var imname = 'url("backa' + actnum + 'h' + hp_i +'.png")'
    bck.style.setProperty('--statimg', imname);
}

//Refresh a unit's points
function refresh(){
    var unitpnt = 0;
    var hp_s = document.getElementById("hp").value;
    var hp_i = parseInt(hp_s);
    var mov_s = document.getElementById("mov").value;
    var mov_i = parseInt(mov_s);
    var frc_s = document.getElementById("frc").value;
    var frc_i = parseInt(frc_s);
    var rng_s = document.getElementById("rng").value;
    var rng_i = parseInt(rng_s);
    var ab1_s = document.getElementById("ab1pnts").value;
    var ab1_i = parseInt(ab1_s);
    var ab2_s = document.getElementById("ab2pnts").value;
    var ab2_i = parseInt(ab2_s);
    var ab3_s = document.getElementById("ab3pnts").value;
    var ab3_i = parseInt(ab3_s);
    unitpnt = hp_i+mov_i+frc_i+rng_i+ab1_i+ab2_i+ab3_i;
    document.getElementById("unittot1").value = unitpnt;
    titleupdate()
    statimgupdate()
}

function abpnts(id){
    var pstring = document.getElementById(id).value;
    var textname = id + "pnts";
    if (pstring == "Select Ability"){
        document.getElementById(textname).value = 0;
	refresh()
	return
    }
    var pntsarray = pstring.split(';');
    var abpoints = pntsarray[2];
    document.getElementById(textname).value = abpoints;
    refresh()
}



//Sets ability drop downs by units
function abdrop(){
    statimgupdate()
    document.getElementById("ab1pnts").value = 0
    document.getElementById("ab2pnts").value = 0
    document.getElementById("ab3pnts").value = 0
    var optionsm = ["Select Ability",
		    "D1; Pnts; 6; Attack - Targets 2 - Range 1 - Damage: Force + [D4]",
		    "D2; Pnts; 3; 2 Spray Damage after standard attack - Spray Range 1 [D4]",
		    "D3; Pnts; 5; Attack - Damage: [D4] - Range 1 - Rush",
      	     	    "D4; Pnts; 4; Attack - Target 1 - Range +2 - Damage: Force + [D6]",
		    "D5; Pnts; 6; Attack - Range +6 - Damage: [(D6)]",
		    "D6; Pnts; 3; Prep - Use 1 prep token to increase this figure’s force by 4 for it’s next attack - Recurring",
		    "D7; Pnts; 7; Melee - Damage: [(D8)] - Rush",
		    "D8; Pnts; 5; Attack - Target 1 - Range +2 - Damage: Force + [D8]",
		    "D9; Pnts; 5; Attack - Target 1 - Damage: Force + [D10]",
		    "D10; Pnts; 6; Attack - Damage: 0 - Immobilize - Add 2 spray damage for each prep token discarded [D10]",
		    "D11; Pnts; 6; Melee - Damage [D12] - Resistible + 2",
		    "D12; Pnts; 8; Attack - Damage: [D12] + 2 - Immobile - Gain 1 Prep token"];

    var optionmd = ["Select Ability",
		    ];
    var optionlg = ["Select Ability",
		    ];
var optionrn = ["Select Ability",   ] 

    // start filling in drop down boxes ability 1
    var select = document.getElementById("ab1");
    var minisize = document.getElementById("sizesel").value
    // Optional: Clear all existing options first:
    select.innerHTML = "";
    if (minisize == "dis"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    if (minisize == "run"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionrn.length; i++) {
    	  var opt = optionrn[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "tac"){
      document.getElementById("bspoint").innerHTML = "15 - 30";
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "lea"){
      document.getElementById("bspoint").innerHTML = "20 - 35";
      for(var l = 0; l < optionlg.length; l++) {
    	  var opt = optionlg[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    // end drop down boxes ability 1
   
    // start filling in drop down boxes ability 2
    var select = document.getElementById("ab2");
    var minisize = document.getElementById("sizesel").value
    // Optional: Clear all existing options first:
    select.innerHTML = "";
    if (minisize == "dis"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    if (minisize == "run"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionrn.length; i++) {
    	  var opt = optionrn[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "tac"){
      document.getElementById("bspoint").innerHTML = "15 - 30";
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "lea"){
      document.getElementById("bspoint").innerHTML = "20 - 35";
      for(var l = 0; l < optionlg.length; l++) {
    	  var opt = optionlg[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
   // end drop down boxes ability 2

    // start filling in drop down boxes ability 3
    var select = document.getElementById("ab3");
    var minisize = document.getElementById("sizesel").value
    // Optional: Clear all existing options first:
    select.innerHTML = "";
    if (minisize == "dis"){
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    if (minisize == "run"){
      for(var i = 0; i < optionrn.length; i++) {
    	  var opt = optionrn[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "tac"){
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "lea"){
      for(var l = 0; l < optionlg.length; l++) {
    	  var opt = optionlg[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
   // end drop down boxes ability 3


}
