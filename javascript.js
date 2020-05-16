var WeaponDamage = 0;
var Strength = 0;
var SharpLevel = 0;
var CritDamage = 0;
var BaseDamage = 0;
var FinalDamage = 0;
var CombatLevel = 0;
var SharpDamage = 0;
var CombatDamage = 0;
var FirstStrikeLevel = 0;

function Calculate(){
  WeaponDamage = parseInt(document.getElementById("WeaponDamage").value, 10);
  Strength = parseInt(document.getElementById("Strength").value, 10);
  SharpLevel = parseInt(document.getElementById("SharpLevel").value, 10);
  CritDamage = parseInt(document.getElementById("CritDamage").value, 10);
  CombatLevel = parseInt(document.getElementById("CombatLevel").value, 10);
  FirstStrikeLevel = parseInt(document.getElementById("FirstStrikeLevel").value, 10);
  
  BaseDamage = (5 + WeaponDamage + (Strength / 5)) * (1 + Strength/100);
  FirstStrikeDamage = BaseDamage * (FirstStrikeLevel * 0.25);
  SharpDamage = BaseDamage * (SharpLevel * 0.05);
  CombatDamage = BaseDamage * (CombatLevel * 0.04);
  BaseDamage += SharpDamage + CombatDamage;
  
  FinalDamage = BaseDamage * (1 + CritDamage/100);
  
  FirstStrikeDamage = (BaseDamage + FirstStrikeDamage) * (1 + CritDamage/100);
  
  document.getElementById("BaseDamage").innerHTML = BaseDamage;
  document.getElementById("FinalDamage").innerHTML = FinalDamage;
  document.getElementById("FirstStrikeDamage").innerHTML = FirstStrikeDamage;
}
