const silver_augments_list = [
  "AFK",
  "All Natural I",
  "Army Building I",
  "Balanced Budget I",
  "Bastion Heart",
  "Battle Ready I",
  "Blood Money I",
  "Branching Out I",
  "Bronze Ticket I",
  "Bruiser Heart",
  "Buried Treasures I",
  "Caretaker's Ally I",
  "Challenger Heart",
  "Component Buffet I",
  "Consistency I",
  "Cutting Corners I",
  "Cybernetic Bulk I",
  "Cybernetic Leech I",
  "Deadeye Heart",
  "Demacia Heart",
  "Final Grab Bag I",
  "Gotta Go Fast!!! I",
  "Gunner Heart",
  "Harmacist l",
  "Healing Orbs I",
  "Inconsistency I",
  "Invoker Heart",
  "Ionia Heart",
  "Iron Assets I",
  "Item Grab Bag I",
  "It Pays to Learn I",
  "JACKPOT!",
  "Jeweled Lotus I",
  "Job's Done",
  "Juggernaut Heart",
  "Knowledge Download I",
  "Lategame Specialist",
  "Latent Forge",
  "Long Distance Pals",
  "Medium-End Shopping",
  "Missed Connections",
  "Money!",
  "Noxus Heart",
  "On a Roll",
  "One, Two, Five!",
  "One Twos Three",
  "Pandora's Bench",
  "Pandora's Items",
  "Partial Ascension",
  "Pumping Up I",
  "Recombobulator",
  "Red Buff",
  "Risky Moves",
  "Rogue Heart",
  "Rolling for Days I",
  "Shadow Isles Heart",
  "Shurima Heart",
  "Silver Spoon",
  "Slayer Heart",
  "Small Forge",
  "Social Distancing I",
  "Sorcerer Heart",
  "Spoils of War I",
  "Teaming Up I",
  "Tiny Grab Bag",
  "Tiny Power I",
  "Tiny Titans",
  "Training Reward I",
  "Transfusion I",
  "Unburdened I",
  "Unified Resistance I",
  "Well-Earned Comforts I",
  "Young and Wild and Free",
  "Zaun Heart"
]

const gold_augment_names = [
  "A Cut Above",
  "Adrenaline Rush",
  "All Natural II",
  "All That Shimmers",
  "Ancient Archives I",
  "Ancient Archives I",
  "Ascension",
  "Balanced Budget II",
  "Bastion Crest",
  "Battle Ready II",
  "Big Grab Bag",
  "Bruiser Crest",
  "Built Different II",
  "Buried Treasures II",
  "Buried Treasures II",
  "Capricious Forge",
  "Caretaker's Favor",
  "Challenger Crest",
  "Chemtech Enhancements",
  "Combat Caster",
  "Contagion",
  "Cybernetic Bulk II",
  "Cybernetic Leech II",
  "Deadeye Crest",
  "Dedication",
  "Defensive Dash",
  "Demacia Crest",
  "Demonflare",
  "Double Trouble II",
  "Dueling Gunners",
  "Early Education",
  "Endurance Training",
  "Escort Quest",
  "Final Grab Bag II",
  "Freljord Heart",
  "Frequent Flyer",
  "Gargantuan Resolve",
  "Gifts from the Fallen",
  "Glacial Breeze",
  "Gotta Go Fast! II",
  "Gunner Crest",
  "Harmacist II",
  "Haunted Shell",
  "Healing Orbs II",
  "Hustler",
  "Idealism",
  "Indomitable Will",
  "Infusion",
  "Invoker Crest",
  "Ionia Crest",
  "Item Grab Bag II",
  "It Pays to Learn II",
  "Jeweled Lotus",
  "Jeweled Lotus",
  "Job Well Done",
  "Juggernaut Crest",
  "Knowledge Download II",
  "Know Your Enemy",
  "Last Stand",
  "Library Card",
  "Long Distance Pals II",
  "Loving Invocation",
  "Magic Wand",
  "Mana Burn",
  "Martyr",
  "Medium Forge",
  "Metabolic Accelerator",
  "Money Money!",
  "Morning Light",
  "Multicaster Heart",
  "Not Today",
  "Noxus Crest",
  "Overcharged Manafont",
  "Pandora's Items II",
  "Patient Study",
  "Patient Study II",
  "Perfected Repetition",
  "Petricite Shackles",
  "Piltover Heart",
  "Portable Forge",
  "Pumping Up II",
  "Ravenous Hunter",
  "Return on Investment",
  "Rich Get Richer",
  "Rich Get Richer+",
  "Riftwalk",
  "Rogue Crest",
  "Rolling for Days II",
  "Salvage Bin",
  "Salvage Bin+",
  "Scoped Weapons I",
  "Scrappy Inventions",
  "Sentinel's Spirit",
  "Shadow Isles Crest",
  "Shimmering Inventors",
  "Shoplifting",
  "Shurima Crest",
  "Shurima's Legacy",
  "Silver Ticket",
  "Silver Ticket",
  "Slayer Crest",
  "Slayer's Resolve",
  "Sleight of Hand",
  "Social Distancing II",
  "Sorcerer Crest",
  "Spoils of War II",
  "Stable Evolution",
  "Stars are Born",
  "Stellacorn's Blessing",
  "Strategist Heart",
  "Suppressing Fire",
  "Tactical Superiority",
  "Targon Heart",
  "Teaming Up II",
  "The Boss",
  "Three's a Crowd",
  "Three's Company",
  "Tiny Power II",
  "Titanic Strength",
  "Tons of Stats!",
  "Total Domination",
  "Trade Sector",
  "Training Reward II",
  "Transfusion II",
  "Two Healthy",
  "Unburdened II",
  "Unified Resistance II",
  "Unstable Yordle Delivery",
  "Vampiric Blades",
  "Void Heart",
  "Well-Earned Comforts II",
  "What Doesn't Kill You",
  "Winds of War",
  "You Have My Bow",
  "You Have My Sword",
  "Zaun Crest",
  "Knowledge Download II"
]

const prismatic_augment_names = [
  "Ancient Archives II",
  "Balanced Budget III",
  "Bastion Crown",
  "Battle Ready III",
  "Binary Airdrop",
  "Birthday Present",
  "Blinding Speed",
  "Bruiser Crown",
  "Built Different III",
  "Buried Treasures III",
  "Caretaker's Chosen",
  "Challenger Crown",
  "Cruel Pact",
  "Cursed Crown",
  "Cybernetic Bulk III",
  "Cybernetic Leech III",
  "Deadeye Crown",
  "Demacia Crown",
  "Double Trouble",
  "Endless Horde",
  "Endless Horde+",
  "Final Ascension",
  "Final Reserves",
  "Freljord Soul",
  "Giant Grab Bag",
  "Gifts From Above",
  "Golden Ticket",
  "Gotta Go Fast!!! III",
  "Gunner Crown",
  "Harmacist III",
  "Hedge Fund",
  "Hedge Fund+",
  "Hedge Fund++",
  "Hedge Fund",
  "High End Sector",
  "Impenetrable Bulwark",
  "Infernal Contract",
  "Invoker Crown",
  "Ionia Crown",
  "Item Grab Bag III",
  "It Pays to Learn III",
  "Jeweled Lotus III",
  "Juggernaut Crown",
  "Knowledge Download III",
  "Large Forge",
  "Level Up!",
  "Living Forge",
  "Lucky Gloves",
  "March of Progress",
  "Masterful Job",
  "Money Money Money!",
  "Multicaster Soul",
  "Noxus Crown",
  "Overwhelming Force",
  "Pandora's Box",
  "Parting Gifts",
  "Phreaky Friday",
  "Phreaky Friday+",
  "Piltover Soul",
  "Pumping Up III",
  "Radiant Relics",
  "Rogue Crown",
  "Rolling for Days III",
  "Roll The Dice",
  "Shadow Isles Crown",
  "Shopping Spree",
  "Shurima Crown",
  "Slayer Crown",
  "Social Distancing III",
  "Sorcerer Crown",
  "Spoils of War III",
  "Starter Kit",
  "Strategist Soul",
  "Tactician's Tools",
  "Targon Soul",
  "Teaming Up III",
  "The Golden Egg",
  "Tiniest Titan",
  "Tiny Power III",
  "Training Reward III",
  "Transfusion III",
  "Unleashed Arcana",
  "Urf's Grab Bag",
  "Void Soul",
  "Wandering Trainer",
  "Well-Earned Comforts III",
  "Wellness Trust",
  "What The Forge",
  "Zaun Crown"
]

const championsList = [
  "Aatrox",
  "Ahri",
  "Akshan",
  "Aphelios",
  "Ashe",
  "Azir",
  "Bel'Veth",
  "Cassiopeia",
  "Cho'Gath",
  "Darius",
  "Ekko",
  "Galio",
  "Garen",
  "Gwen",
  "Heimerdinger",
  "Irelia",
  "Jarvan IV",
  "Jayce",
  "Jhin",
  "Jinx",
  "K'Sante",
  "Kai'Sa",
  "Kalista",
  "Karma",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kled",
  "Lissandra",
  "Lux",
  "Malzahar",
  "Maokai",
  "Nasus",
  "Orianna",
  "Poppy",
  "Rek'Sai",
  "Renekton",
  "Ryze",
  "Ryze: BandleCity",
  "Ryze: Demacia",
  "Ryze: Freljord",
  "Ryze: Ionia",
  "Ryze: Noxus",
  "Ryze: Piltover",
  "Ryze: Shadow Isles",
  "Ryze: Shurima",
  "Ryze: Targon",
  "Ryze: Zaun",
  "Samira",
  "Sejuani",
  "Senna",
  "Sett",
  "Shen",
  "Sion",
  "Sona",
  "Soraka",
  "Swain",
  "Taliyah",
  "Taric",
  "Teemo",
  "Tristana",
  "Urgot",
  "Vel'Koz",
  "Vi",
  "Viego",
  "Warwick",
  "Yasuo",
  "Zed",
  "Zeri"
];

const championsLevel = [1, 2, 3]

const itemsList = ["Zephyr",
  "Dragon's Claw", "Gargoyle Stoneplate", "Ionic Spark", "Blue Blessing", "Jeweled Gauntlet", "Giant Slayer", "Strategist Emblem", "Rapid Firecannon", "Infinity Edge", "Hand of Justice", "Warmog's Armor", "Archangel's Staff", "Spear of Shojin", "Thief's Gloves", "Chalice of Power", "Protector's Vow", "Sunfire Cape", "Guardbreaker", "Negatron Cloak", "Shroud of Stillness", "Blue Buff", "Infinity Force", "Bloodthirster", "Sorcerer Emblem", "Titan’s Resolve", "Bramble Vest", "Hextech Gunblade", "Guinsoo's Rageblade", "Anima Visage", "Death's Defiance", "Blacksmith's Gloves", "Needlessly Large Rod", "Morellonomicon", "Deathblade", "Runaan's Hurricane", "Locket of the Iron Solari", "Last Whisper", "Juggernaut Emblem", "Tricksters Glass", "Noxus Emblem", "Void Emblem", "Shadow Isles Emblem", "Rabadon's Deathcap", "Bruiser Emblem", "Chain Vest", "Tear of the Goddess", "Giant's Belt", "Zz'Rot Portal", "Crown of Demacia", "Statikk Shiv", "Shurima Emblem", "Zaun Emblem", "Eternal Winter", "Zhonya's Paradox", "Hullcrusher", "Zeke's Herald", "Redemption", "Needlessly Big Gem", "Quicksilver", "Runaan's Tempest", "Edge of Night", "Gold Collector", "Sniper's Focus", "B.F. Sword", "Freljord Emblem", "Bastion Emblem", "Ionia Emblem", "Rascal's Gloves", "Locket of Targon Prime", "Demon Slayer", "Mogul's Mail", "Challenger Emblem", "Recurve Bow", "Deathfire Grasp", "Invoker Emblem", "Gambler's Blade", "Statikk Favor", "Sparring Gloves", "Diamond Hands", "Bulwark's Oath", "Randuin's Sanctum", "Warmog's Pride", "Slayer Emblem", "Zeke's Harmony", "Manazane", "Targon Emblem", "Demacia Emblem", "Gunner Emblem", "Stridebreaker", "Hextech Lifeblade", "Spatula", "Tactician's Crown", "Chalice of Charity", "More More-ellonomicon", "Glamorous Gauntlet", "Rapid Lightcannon", "Deadeye Emblem", "Piltover Emblem", "Luminous Deathblade", "Sunlight Cape", "Brink of Dawn", "Rabadon's Ascended Deathcap", "Obsidian Cleaver", "Blessed Bloodthirster", "Guinsoo's Reckoning", "Fist of Fairness", "Draven's Axe", "Titan's Vow", "Rogue Emblem", "Spear of Hirana", "Shroud of Reverance", "Zenith Edge", "Rosethorn Vest", "Mistral", "Urf-Angel's Staff", "Goldmancer's Staff", "Covalent Spark", "Eternal Whisper", "Quickestsilver", "Dvarapala Stoneplate", "Absolution", "Zz'Rots Invitation", "Dragon's Will"
]

// Helper function to set up autocomplete for a given input element
function setupAutocomplete(inputElement) {
  $(inputElement).autocomplete({
    source: silver_augments_list.concat(gold_augment_names, prismatic_augment_names, championsList, itemsList),
    select: function (event, ui) {
      checkSelection(event, ui, this);
    },
    change: function (event, ui) {
      if (!ui.item || !silver_augments_list.concat(gold_augment_names, prismatic_augment_names, championsList, itemsList).includes($(this).val())) {
        $(this).val("");
        $(this).data('selectedValue', ""); 
        
        $(`#championDropdown${$(this).attr('id').slice(-1)}`).empty();
        $(`#itemAssignDropdown${$(this).attr('id').slice(-1)}`).empty();
        $("select[id^='itemAssignDropdownSelect']").each(function () {
          updateItemAssignDropdown($(this));
        });
        sendAjax();
      } else {
        $(this).data('selectedValue', $(this).val()); 
        sendAjax();
      }
    }
  });
}

// Function to check if an item has already been selected in any of the other inputs
function alreadySelected(item, currentInput) {
  return $("#filter1, #filter2, #filter3").toArray().some(input => input !== currentInput && $(input).val() === item);
}

// Check selection of autocomplete
function checkSelection(event, ui, inputElement) {
  const selectedValue = ui.item.value;
  $(inputElement).data('selectedValue', selectedValue);
  

  if (itemsList.includes(selectedValue) && !hasChampionSelected()) {
    event.preventDefault();
    $(inputElement).val("");
  } else if (championsList.includes(selectedValue)) {
    createChampionDropdown(inputElement, selectedValue);

    // Update item assign dropdowns
    setTimeout(function () { // Delay to ensure input value is updated
      $("select[id^='itemAssignDropdownSelect']").each(function () {
        updateItemAssignDropdown($(this));
      });
    }, 100);
    sendAjax();
  } else if (itemsList.includes(selectedValue)) {
    createItemAssignDropdown(inputElement, selectedValue);
  } else {
    $(`#championDropdown${$(inputElement).attr('id').slice(-1)}`).empty();
    $(`#itemAssignDropdown${$(inputElement).attr('id').slice(-1)}`).empty();
  }
}

// Check if a champion is selected
function hasChampionSelected() {
  return $("#filter1, #filter2, #filter3").toArray().some(input => championsList.includes($(input).val()));
}

// Create and populate the champion dropdown
function createChampionDropdown(inputElement, championName) {
  const dropdownDiv = $(`#championDropdown${$(inputElement).attr('id').slice(-1)}`);
  dropdownDiv.empty();
  const dropdown = $('<select>').attr('id', `championLevelDropdown${$(inputElement).attr('id').slice(-1)}`);
  championsLevel.forEach(level => dropdown.append($('<option>').val(level).text(`Level ${level}`)));
  dropdownDiv.append(dropdown);

  // Add change event handler
  dropdown.change(function () {
    sendAjax();
  })
}

// Create and populate the item assign dropdown
function createItemAssignDropdown(inputElement, itemName) {
  const dropdownDiv = $(`#itemAssignDropdown${$(inputElement).attr('id').slice(-1)}`);
  dropdownDiv.empty();

  const dropdown = $('<select>').attr('id', `itemAssignDropdownSelect${$(inputElement).attr('id').slice(-1)}`);
  dropdownDiv.append(dropdown);

  dropdown.change(function () {
    sendAjax();
  });

  updateItemAssignDropdown(dropdown);
}


// Update the item assign dropdown
function updateItemAssignDropdown(dropdown) {
  dropdown.empty(); // Clear any previous options

  const selectedChampions = getSelectedChampions();

  // Add options for selected champions
  selectedChampions.forEach(champion => {
    dropdown.append($('<option>').val(champion).text(champion));
  });
}

function getSelectedChampions() {
  let selectedChampions = [];
  $("input[id^='filter']").each(function () {
    if (championsList.includes($(this).val())) {
      selectedChampions.push($(this).val());
    }
  });
  return selectedChampions;
}

function sendAjax() {
  // Get selected values from autocomplete inputs
  let autocompleteValues = [];
  $("input[id^='filter']").each(function () {
    // Get value from data attribute
    let selectedValue = $(this).data('selectedValue');
    autocompleteValues.push(selectedValue);
  });

  // Get selected values from champion dropdowns
  let championDropdownValues = [];
  $("select[id^='championLevelDropdown']").each(function () {
    championDropdownValues.push($(this).val());
  });

  // Get selected values from item dropdowns
  let itemDropdownValues = [];
  $("select[id^='itemAssignDropdownSelect']").each(function () {
    itemDropdownValues.push($(this).val());
  });

  // Prepare data to send
  let dataToSend = {
    autocompleteValues: autocompleteValues,
    championDropdownValues: championDropdownValues,
    itemDropdownValues: itemDropdownValues
  };

  createQuery(dataToSend)
}

// helper for query
function hasDuplicates(arr) {
  const set = new Set(arr);
  return set.size !== arr.length;
}

function escapeSingleQuote(value) {
  return value.replace(/'/g, "''");
}


function createQuery(dataToSend) {
  itemAssign = dataToSend['itemDropdownValues'];
  autocompleteValues = dataToSend['autocompleteValues'].filter(item => item !== undefined && item !== '' && item !== null);
  championsQuery = autocompleteValues.filter(item => championsList.includes(item));
  championLevels = dataToSend['championDropdownValues'];
  augmentsQuery = autocompleteValues.filter(item => silver_augments_list.concat(gold_augment_names, prismatic_augment_names).includes(item));
  itemsQuery = autocompleteValues.filter(item => itemsList.includes(item));

  if (championsQuery.length == 0 && itemsQuery != 0) {
    return;
  } else if (hasDuplicates(augmentsQuery)) {
    return;
  } else if (championLevels.length == 0) {
    return;
  }

  function roundJSONNumbers(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return obj.map(roundJSONNumbers);
      } else {
        const newObj = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = roundJSONNumbers(obj[key]);
          }
        }
        return newObj;
      }
    } else if (typeof obj === 'number') {
      return parseFloat(obj.toFixed(2));
    } else {
      return obj;
    }
  }

  const champDict = {};

  for (let i = 0; i < championsQuery.length; i++) {
    champDict[championsQuery[i]] = championLevels[i];
  }

  if (itemAssign.length != 0) {
    if (championsQuery.length == 1 && itemAssign.length != 1) {
      champDict[championsQuery[0]] = [champDict[championsQuery[0]], itemsQuery];
    } else {
      champDict[itemAssign[0]] = [champDict[itemAssign[0]], [itemsQuery[0]]];
    }
  }

  champDict['Augments'] = augmentsQuery;

  let subqueries = [];
  for (let key in champDict) {
    if (key !== 'Augments') {
      let unitName = escapeSingleQuote(key);
      let unitLevel = champDict[key][0];
      let unitItems = Array.isArray(champDict[key][1]) ? champDict[key][1] : [];
      if (unitItems.length > 0) {
        let itemsQuery = unitItems.map(item => `'${escapeSingleQuote(item)}'`).join(", ");
        subqueries.push(`(
            SELECT game_units.game_id FROM game_units
            JOIN unit_items ON game_units.game_id = unit_items.game_id AND game_units.unit_name = unit_items.unit_name
            WHERE game_units.unit_name = '${unitName}' AND game_units.unit_level = ${unitLevel} AND unit_items.item_name IN (${itemsQuery})
            GROUP BY game_units.game_id
            HAVING COUNT(DISTINCT unit_items.item_name) = ${unitItems.length}
          )`);
      } else {
        subqueries.push(`(
            SELECT game_units.game_id FROM game_units
            WHERE unit_name = '${unitName}' AND unit_level = ${unitLevel}
          )`);
      }
    } else { // For Augments
      let augments = champDict[key];
      for (let augment of augments) {
        let escapedAugment = escapeSingleQuote(augment);
        subqueries.push(`(
            SELECT game_id FROM game_augments
            WHERE augment_name = '${escapedAugment}'
          )`);
      }
    }
  }

  let innerJoinClause = '';
  if (subqueries.length) {
    innerJoinClause = subqueries.map((subquery, i) => `INNER JOIN ${subquery} AS t${i} ON game.game_id = t${i}.game_id`).join(' ');
  }

  let sqlQuery = `
    SELECT AVG(game.placement), count(*)
    FROM game
    ${innerJoinClause}
  `;

  

  $.ajax({
    url: 'https://manifest-campus-393512.ue.r.appspot.com',  
    type: 'POST',
    data: {
        sql_query: sqlQuery  
    },
    dataType: 'json', 
    success: function(response) {
        populateTable(response)
    },
    error: function(xhr, status, error) {
        console.log('Error: ' + status + ' ' + error);
    }
});
}

function populateTable(augmentData){
  const averagePlacementHeader = document.getElementById('avgplacement');
  const gamesPlayedHeader = document.getElementById('gamesplayed');

  averagePlacementHeader.textContent = parseFloat(augmentData[0]['AVG(game.placement)']).toFixed(2);
  gamesPlayedHeader.textContent = augmentData[0]['count(*)'];
}



// Set up autocomplete for all three filter inputs
setupAutocomplete("#filter1");
setupAutocomplete("#filter2");
setupAutocomplete("#filter3");