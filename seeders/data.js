
var randomWords = "elated ajar frame farfetched flesh roof alleged yummy rare unwritten agree smash beginner melt glamorous enchanted appliance walk receipt massive pumped cooperative radiate mean dress rhythm ground misty pull lazy juice care different religion shop gate deer nerve car introduce money ladybug silent rebel wary handle wish glassstop glove mark";
randomWords = randomWords.split(' ');

var restaurantNames = [];

var randomizeNames = function(array, max) {
while(restaurantNames.length < 200){
for(let i = 0; i < array.length; i++) {

    restaurantNames.push(
        {restaurant:
        array[Math.floor(Math.random() * Math.floor(max))] + ' ' + 
    array[Math.floor(Math.random() * Math.floor(max))],
    createdAt : new Date(),
              updatedAt : new Date()
        }
    );
}
}
}

randomizeNames(randomWords, randomWords.length);

module.exports.restaurantNames = restaurantNames;
