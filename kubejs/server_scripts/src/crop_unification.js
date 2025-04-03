ServerEvents.tags('item', event => {
    event.add('forge:crops/eggplant', 'culturaldelights:eggplant');
    event.add('forge:crops/corn', 'farm_and_charm:corn');
    event.add('forge:crops/onion', 'farm_and_charm:onion');
    event.add('culturaldelights:regular_eggplants', 'crockpot:eggplant');
    event.remove('forge:tomato', 'farm_and_charm:tomato');
    event.add('forge:crops/tomato', 'farm_and_charm:tomato');
    event.add('forge:crops/avocado', 'culturaldelights:avocado');
    event.add('forge:crops/cucumber', 'culturaldelights:cucumber')
    event.add('forge:carbon_rich', ['crockpot:eggplant','crockpot:asparagus'])
    event.add('forge:nitrogen_rich', ['crockpot:garlic','crockpot:pepper','culturaldelights:avocado'])
    event.add('forge:carbon_plant', ['culturaldelights:cucumber','brewery:hops','minecraft:kelp','farmersdelight:rice','createacafe:cassava','minecraft:potato','minecraft:wheat'])
    event.add('forge:nitrogen_plant', ['farmersdelight:tomato','crockpot:corn','minecraft:sweet_berries','farmersdelight:cabbage','minecraft:carrot','minecraft:beetroot'])
  })
ServerEvents.recipes(event => {
    event.remove({ output: 'farm_and_charm:onion_bag' })
    event.replaceOutput(
        { output: 'culturaldelights:eggplant' },
        'culturaldelights:eggplant',         
         'crockpot:eggplant'   
      )
    event.replaceInput(
      { input: 'farm_and_charm:tomato' },
          'farm_and_charm:tomato',         
           '#forge:crops/tomato'   
     )
     event.replaceInput(
       { input: 'farmersdelight:tomato' },
           'farmersdelight:tomato',         
            '#forge:crops/tomato'   
      )
    event.replaceInput(
      { input: 'farm_and_charm:onion' },
          'farm_and_charm:onion',         
           '#forge:crops/onion'   
     )
     event.replaceInput(
       { input: 'farmersdelight:onion' },
           'farmersdelight:onion',         
            '#forge:crops/onion'   
      )
     event.replaceInput(
       { input: 'farm_and_charm:corn_cob' },
           'farm_and_charm:corn_cob',         
            '#forge:crops/corn'   
      )
      event.replaceInput(
          { input: 'culturaldelights:eggplant' },
          'culturaldelights:eggplant',         
           '#forge:crops/eggplant'   
        )
      event.replaceOutput(
        { output: 'culturaldelights:corn_cob' },
        'culturaldelights:corn_cob',         
         'crockpot:corn'   
      )
      event.replaceOutput(
        { output: 'farm_and_charm:tomato_seeds' },
        'farm_and_charm:tomato_seeds',         
         'farmersdelight:tomato_seeds'   
      )
      event.remove({id :'culturaldelights:cutting/cut_eggplant'})
      event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "crockpot:eggplant"
            }
        ],
        "result": [
            {
                "count": 2,
                "item": "culturaldelights:cut_eggplant"
            }
        ],
        "tool": {
                "tag": "forge:tools/knives"
        }
    })
      event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
      event.recipes.create.compacting(Fluid.of('gtceu:seed_oil',100),('#forge:seeds') )
       event.shapeless(
        Item.of('farmersdelight:organic_compost', 4),
        [
          'minecraft:dirt',        
          '#forge:carbon_rich',
          '#forge:nitrogen_rich', 	       
          '2x #forge:carbon_plant',
          '2x #forge:nitrogen_plant',
          'minecraft:bone_block',
          'farmersdelight:straw_bale'   
        ]
      )
      event.shapeless(
       Item.of('farmersdelight:organic_compost', 1),
       [    
        'minecraft:dirt',        
         '2x #forge:carbon_plant',
         '2x #forge:nitrogen_plant',
         '2x minecraft:bone_meal',
         '2x farmersdelight:straw'   
       ]
     )
      event.recipes.create.mixing('15x gtceu:dirt_dust',['3x minecraft:sand', 'gtceu:stone_dust','3x gtceu:rich_soil_dust'] )
      event.recipes.create.compacting('minecraft:dirt','4x gtceu:dirt_dust' )
      event.recipes.gtceu.compressor('minecraft:dirt')
        .EUt(30)
        .duration(40)
        .itemInputs('4x gtceu:dirt_dust')
        .itemOutputs('minecraft:dirt')
      event.recipes.gtceu.macerator('gtceu:dirt_dust')
        .itemInputs('minecraft:dirt')
        .itemOutputs('4x gtceu:dirt_dust')
        .EUt(30)
        .duration(40)
    event.remove({ id: 'gtceu:macerator/dirt_from_bio_chaff' })
    event.recipes.gtceu.macerator('gtceu:dirt_from_bio_chaff')
      .itemInputs('gtceu:bio_chaff')
      .itemOutputs('4x gtceu:dirt_dust')
      .EUt(4)
      .duration(3000)
})