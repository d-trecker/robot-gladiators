var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Sans", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);



var fight = function(enemyName) {
    //if player choses to fight
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    //Skip statement
    if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }    
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining."
        );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // Loose statement
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else { 
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    }
    }
}

//Game Stats
//"WIN"- Player robot has defeated all enemy robots
// *Fight all enemy robots
// *Defeat each enemy robot
//"LOSE"- Player robot's health is zero or less


// fight();

for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    debugger;
    window.alert("Welcome to Robot Gladiators! Round " + (i + i));
    var pickedEnemyName =enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!")
    }
}