

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
    var basesum = hp_i + mov_i + frc_i + rng_i
    var minisize = document.getElementById("sizesel").value
    var actnum = 3
    if (minisize == "large"){
      actnum = 2
    }
    if (basesum > 30){
      actnum = 2
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
    var optionsm = ["Select Ability", "SO1; Pnts; 4; Attack Target 1 Range +2 Force + [D6]", "SO2; pnts; 5; Attack Target 1 Force+[D10]", "SO3; pnts; 8; Melee (D8), Rush", "SD1; pnts; 2; Defend - Reduce attack damage by [D4] if within defending figure's range", "SD2; pnts; 8; Defend - Reduce attack damage by [D12] from any range", "SD3; pnts; 4; Heal Any figure Range +1, [D6]", "SS1; pnts; 3;Reduce climbing height by [D8]", "SS2; pnts; 2; Sneak"];
    var optionmd = ["Select Ability","MO1; Pnts; 2;Melee Target 1 Immobilize [D4]", "MO2; Pnts; 6;Mine Passive Base Contact [D10]", "MO3; pnts; 8; Remove 1 action token from target figure Range - 1 [2/3/4] Defendable", "MO4; pnts; 8; Mine Active Base contact [D8]", "MD1; Pnts; 2;Defend- Reduce attack damage by [D4] if within defending figure’s range", "MD2; Pnts; 8;Defend- Reduce attack damage by [D12] from any range", "MD3; pnts; 4; Heal [D6] Any figure Range +1", "MS1; Pnts; 6;Target 1 push or pull another unit within range by [D8]", "MS2; pnts; 3; Sneak"];
    var optionlg = ["Select Ability", "LO1; Pnts; 12;Attack Target 3 Range + 1 Immobile - Form up to 3 attack dice pools with any foraged dice. Ignore foraged value and re-roll dice for each attack", "LO2; pnts; 10; Mine Active Range 1 [D10]", "LD1; Pnts; 2;Defend- Reduce attack damage by [D4] if within defending figure’s range", "LD2; pnts; 15; Heal Target 3 Range + 3 [Up to any 3]", "LD3; pnts; 10; Heal Full Health All [8/9/10]", "LS1; Pnts; 4 - [D6] Reduce a foraged D6 on this figure by 2 then increase any other die on any figure within range by 2", "LS2; pnts; 8; Give another figure that hasn’t been activated 1 additional action [5/8]"];
    
    // start filling in drop down boxes ability 1
    var select = document.getElementById("ab1");
    var minisize = document.getElementById("sizesel").value
    // Optional: Clear all existing options first:
    select.innerHTML = "";
    if (minisize == "small"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "Med"){
      document.getElementById("bspoint").innerHTML = "15 - 30";
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "large"){
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
    if (minisize == "small"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "Med"){
      document.getElementById("bspoint").innerHTML = "15 - 30";
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "large"){
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
    if (minisize == "small"){
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "Med"){
      for(var l = 0; l < optionmd.length; l++) {
    	  var opt = optionmd[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
    if (minisize == "large"){
      for(var l = 0; l < optionlg.length; l++) {
    	  var opt = optionlg[l];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
    }
   // end drop down boxes ability 3


}
