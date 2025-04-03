MoreJSEvents.villagerTrades(event => {

    event.removeModdedTrades("minecraft:farmer",1);
    const trade = event.addTrade("minecraft:farmer", 1, ["22x #forge:crops/pepper"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["25x farmersdelight:tomato"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["20x #forge:crops/garlic"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["26x farmersdelight:onion"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["15x #forge:crops/eggplant"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["20x farm_and_charm:barley"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, ["20x farm_and_charm:oat"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["16x farmersdelight:rice"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["18x #forge:crops/coffeebean"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["20x #forge:strawberry"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["15x culturaldelights:avocado"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["13x culturaldelights:cucumber"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["14x farm_and_charm:lettuce"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["15x #forge:crops/corn"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 2, ["18x #forge:crops/asparagus"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 3, ["24x #forge:crops/cassava"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 3, ["30x brewery:hops"], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 4, ["12x mynethersdelight:bullet_pepper"], "2x minecraft:emerald");
    event.addTrade("minecraft:farmer", 4, ["10x mynethersdelight:ghasmati"], "2x minecraft:emerald");

})