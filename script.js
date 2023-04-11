

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
    //var basedim = document.getElementById("basedia").value;
    var basepnt = hp_i+mov_i+frc_i+rng_i;
    var actnum = 3
    if (minisize == "lea"){
      actnum = 2;
    }
    //if (basedim > 55){
      //actnum = 2;
    //}
    var imname = 'url("backa' + actnum + 'h' + hp_i +'.png")'
    bck.style.setProperty('--statimg', imname);

    var minisize = document.getElementById("sizesel").value
    if (minisize == "dis"){
      var minbase = 10;
      var maxbase = 25;
    }
    if (minisize == "run"){
      var minbase = 10;
      var maxbase = 25;
    }
    if (minisize == "tac"){
      var minbase = 15;
      var maxbase = 30;
    }
    if (minisize == "lea"){
      var minbase = 20;
      var maxbase = 35;
    }
    if (basepnt < minbase){
      bck.style.setProperty('--statimg', "url('Inv-base.png')");
    }
    if (basepnt > maxbase){
      bck.style.setProperty('--statimg', "url('Inv-base.png')");
    }
    if (minisize == "size"){
      bck.style.setProperty('--statimg', "url('Inv-base.png')");
    }

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
    var uclassl = document.getElementById("uclass").value;
    unitpnt = hp_i+mov_i+frc_i+rng_i+ab1_i+ab2_i+ab3_i;
    document.getElementById("unittot1").value = unitpnt;
    if (ab1_s == ab2_s && ab2_s == ab3_s){
      document.getElementById("uclass").innerHTML = "unclassed";
    } else {
      document.getElementById("uclass").innerHTML = " ";
    }
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

function cardchange(id){
    var pstring = document.getElementById(id).value;
    var backname = id + "img";
    var cardname = id + "over";
    if (pstring == "Select Ability"){
        document.getElementById(backname).src = "Select Abilitycard.png";
	document.getElementById(cardname).src = "blank_card.png";
	return
    }
    var cardarray = pstring.split(';');
    var cardnum = cardarray[0];
    var cardsrc = cardnum + "card.png";
    document.getElementById(cardname).src = cardsrc;

    var backstring = cardarray[3];
    if (backstring.includes("Attack.")){
      document.getElementById(backname).src = "attack_card_template.png";
      return
    }
    if (backstring.includes("Melee.")){
      document.getElementById(backname).src = "attack_card_template.png";
      return
    }
    if (backstring.includes("Mine Active.")){
      document.getElementById(backname).src = "mine_card_template.png";
      return
    }
    if (backstring.includes("Mine Passive.")){
      document.getElementById(backname).src = "mine_card_template.png";
      return
    }
    if (backstring.includes("Defend.")){
      document.getElementById(backname).src = "defense_card_template.png";
      return
    }
    if (backstring.includes("Move.")){
      document.getElementById(backname).src = "move_card_template.png";
      return
    }
    document.getElementById(backname).src = "misc_card_template.png";
    
}


//Sets ability drop downs by units
function abdrop(){
    document.getElementById("ab1img").src = "Select Abilitycard.png";
    document.getElementById("ab1over").src = "blank_card.png";
    document.getElementById("ab2img").src = "Select Abilitycard.png";
    document.getElementById("ab2over").src = "blank_card.png";
    document.getElementById("ab3img").src = "Select Abilitycard.png";
    document.getElementById("ab3over").src = "blank_card.png";
    statimgupdate()
    document.getElementById("ab1pnts").value = 0
    document.getElementById("ab2pnts").value = 0
    document.getElementById("ab3pnts").value = 0
    var optionsm = ["Select Ability",
		    "D1; Pnts; 6; Attack.  Targets 2.  Range 1.  Damage: Force + [D4]",
		    "D2; Pnts; 3; 2 Spray Damage after standard attack.  Spray Range 1 [D4] Ref",
		    "D3; Pnts; 5; Attack. Damage: [D4].  Range 1. Rush",
      	     	    "D4; Pnts; 4; Attack. Target 1. Range +2. Damage: Force + [D6]",
		    "D5; Pnts; 6; Attack. Range +6. Damage: [(D6)]",
		    "D6; Pnts; 3; Prep-Use 1 prep token to increase this figure’s force by 4 for it’s next attack. Recurring",
		    "D7; Pnts; 7; Melee. Damage: [(D8)]. Rush",
		    "D8; Pnts; 5; Attack. Target 1. Range +2. Damage: Force + [D8]",
		    "D9; Pnts; 5; Attack. Target 1. Damage: Force + [D10]",
		    "D10; Pnts; 6; Attack. Damage: 0. Immobilize. Add 2 spray damage for each prep token discarded. Remove[D10]",
		    "D11; Pnts; 6; Melee. Damage [D12]. Resistible + 2",
		    "D12; Pnts; 8; Attack. Damage: [D12] + 2. Immobile. Gain 1 Prep token"];

    var optionmd = ["Select Ability",
		    "T1; Pnts; 3; Mine Active. Deploy within range 1. Damage: [D4]. Rush",
		    "T2; Pnts; 2; Defend. Reduce attack damage by [(D4)] or [D4] Limit 1",
		    "T3; Pnts; 2; Target 1. push or pull another figure within range 2 [D4]",
		    "T4; Pnts; 4; Mine Passive. Deploy base contact. Damage: [D6]",
		    "T5; Pnts; 4; Target 1. push or pull another figure within range 2 [D6].",
		    "T6; Pnts; 5; Mine Active. Deploy base contact. Damage: [D8]. Rush",
		    "T7; Pnts; 5; Defend. Reduce attack damage by [(D8)] or [D8] Limit 1",
		    "T8; Pnts; 6; Target 1. push or pull another figure within range by [D8].",
		    "T9; Pnts; 6; Mine Passive. Deploy base contact. Damage: [D10]",
		    "T10; Pnts; 5; Reduce a [D10] by 2 then increase any other foraged die by 2. Recurring",
		    "T11; Pnts; 7; Defend. Reduce attack damage by [(D12)] or [D12] Limit 1",
		    "T12; Pnts; 8; Remove 1 action from target figure. Range - 1. [5/6/7] Resistible. Limit 1",
		    "T13; Pnts; 3; Sneak"];

    var optionlg = ["Select Ability",
		    "L1; Pnts; 12; Attack. Target 3. Range + 1. Form up to 3 attack dice pools with any foraged dice. Ignore foraged value and re-roll dice for each attack. Immobile. Limit 1.",
		    "L2; Pnts; 10; Heal. Full Health. All [8/9/10]",
		    "L3; Pnts; 10; Push or pull the gate by [D4] cm. Ref",
    		    "L4; Pnts; 2; Defend. Reduce attack damage by [(D4)] or [D4] Limit 1",
		    "L5; Pnts; 10; Push or pull up to two figures within range by [D6]",
		    "L6; Pnts; 4; [D6] Reduce a foraged D6 on this figure by 2. Increase any other foraged die by 2. Recurring",
		    "L7; Pnts; 4; If any friendly figure within this figure’s range takes damage then a [D8] may be reduced by any amount to negate the same amount of damage",
		    "L8; Pnts; 5; Defend. Reduce attack damage by [(D8)] or [D8] Limit 1",
		    "L9; Pnts; 8; Give another figure that hasn’t been activated 1 additional action. Rush [5/8] Limit 1",
		    "L10; Pnts; 5; Start the game with two additional prep tokens",
		    "L11; Pnts; 7; Whenever an opponent figure takes an attack action or uses an attack ability - at the end of that action this figure may be moved up to 4 cm",
		    "L12; Pnts; 9; Attack. Damage: Force + [D12].  No defense abilities can be used against this attack"];

    var optionrn = ["Select Ability", 
		    "R1; Pnts; 2; Move. Movement + [D4]",
		    "R2; Pnts; 3; Counter Attack [D4]. Perform this attack after this figure is not defeated by an opponents attack", 
		    "R3; Pnts; 2; Melee. Damage: Take one prep token from opponent. Chain Rush. Remove[D6]",
		    "R4; Pnts; 3; Attack. Melee. Rush [(D6)]",
		    "R5; Pnts; 4; Move. Movement + [D8]",
		    "R6; Pnts; 5; Counter Attack. Damage: [D8]. Perform this attack after this figure is not defeated by an opponent's attack",
		    "R7; Pnts; 7; Melee. Chain Rush. Damage: [(D8)]",
		    "R8; Pnts; 6; Move. Movement + [D12]",
		    "R9; Pnts; 6; Attack. Melee. Damage: [D12]",
		    "R10; Pnts; 3; Sneak",
		    "R11; Pnts; 2; Prep tokens spent to move this figure may move it 3cm instead of 2"];


    // start filling in drop down boxes ability 1
    var select = document.getElementById("ab1");
    var minisize = document.getElementById("sizesel").value
    // Optional: Clear all existing options first:
    select.innerHTML = "";
    if (minisize == "dis"){
      document.getElementById("bspoint").innerHTML = "10 - 25";
      var minbase = 10;
      var maxbase = 25;
      for(var i = 0; i < optionsm.length; i++) {
    	  var opt = optionsm[i];
    	  select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }
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
   refresh(minbase, maxbase);

   
}