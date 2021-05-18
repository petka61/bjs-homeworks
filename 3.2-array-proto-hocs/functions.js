const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  let weaponsName = [];
  weapons.forEach(weapon => weaponsName.push(weapon.name));
  return weaponsName;
}

function getCountReliableWeapons(durability) {
  let weaponDurability = [];
  weapons.forEach(weapon => {
    if (weapon.durability > durability) {
      weaponDurability.push(weapon.durability)
    }
  });
  return weaponDurability.length;
}

function hasReliableWeapons(durability) {
  if (weapons.some(weapon => weapon.durability > durability)) {
    return true;
  } else {
    return false;
  }
}

function getReliableWeaponsNames(durability) {
  let durableWeapon = weapons.map(function(weapon) {
    if (weapon.durability > durability) {
      return weapon.name;
    }
  });
  return durableWeapon.filter(sort => sort !== undefined);
}

function getTotalDamage() {
  let damageSum = 0;
  weapons.map(function(damages) {
    damageSum += damages.attack;
  })
  return damageSum;
}
