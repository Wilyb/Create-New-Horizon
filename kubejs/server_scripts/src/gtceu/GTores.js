const WorldGenLayers = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers')
const BiomeTags = Java.loadClass('net.minecraft.tags.BiomeTags')
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('precious_alloy')).size(1, 1))
            )
        )
    })
    // event.modify("gtnn:gold_vein_tf", vein => {
    //     vein.layeredVeinGenerator(generator => generator
    //         .buildLayerPattern(pattern => pattern
    //             .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
    //             .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
    //             .layer(l => l.weight(1).mat(GTMaterials.get('precious_alloy')).size(1, 1))
    //         )
    //     )
    // })
    // event.modify("gtceu:banded_iron_vein", vein => {
    //     vein.veinedVeinGenerator(generator => generator
    //         .oreBlock(GTMaterials.Goethite, 3) // 
    //         .rareBlock(GTMaterials.YellowLimonite, 2)
    //         .rareBlock(GTMaterials.Hematite, 2)
    //         .rareBlock(GTMaterials.get('precious_alloy'), 1) // 
    //         .rareBlockChance(0.075)
    //         .veininessThreshold(0.01)
    //         .maxRichnessThreshold(0.175)
    //         .minRichness(0.7)
    //         .maxRichness(1.0)
    //         .edgeRoundoffBegin(3) // 
    //         .maxEdgeRoundoff(0.1) // 
    //     )
    // })
    event.modify('gtnn:gold_vein_tf', vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('precious_alloy')).size(1, 1))
            )
        )
    })
    event.remove('gtceu:nether_quartz_vein')
    event.remove('gtceu:nickel_vein')
    //event.remove('gtceu:manganese_vein_ow')
    /*event.modify('gtceu:manganese_vein',vein=>{
        vein.veinedVeinGenerator(generator => generator.rareBlock(GTMaterials.Spessartine,2))
    })*/
    event.modify('gtceu:mica_vein', vein => {
        vein.layer(WorldGenLayers.NETHERRACK)
        vein.dimensions('minecraft:the_nether')
        vein["biomes(net.minecraft.tags.TagKey)"](BiomeTags.IS_NETHER)
        vein.heightRangeUniform(0, 25)
    })
    event.remove('gtceu:galena_vein')
    
    event.add('ctnh:combustible_ice_vein_aether', vein => {
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.55)
        vein.discardChanceOnAirExposure(0)
        vein.layer('aether')
        vein.dimensions('aether:the_aether')
        vein.heightRangeUniform(20, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('combustible_ice')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Opal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('combustible_ice')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('combustible_ice'))
            .placement("above")
            .density(0.2)
            .radius(5)
        )
    })
    
    
    
    let ADASTRA = ['ad_astra:lunar_wastelands','ad_astra:glacio_ice_peaks','ad_astra:glacio_snowny_barrens',
        'ad_astra:inferno_venus_barrens','ad_astra:martian_canyon_creek','ad_astra:martian_polar_caps',
        'ad_astra:martian_wastelands','ad_astra:mercury_deltas','ad_astra:venus_wastelands','ad_extendra:cosmic_gaslands',
        'ad_extendra:intriguing_wastelands']
    
    event.remove('gtceu:sheldonite_vein')
    // event.modify('gtceu:naquadah_vein', vein => {
    //     vein.layer('all_layer')
    //     ADASTRA.forEach(biome =>{
    //         vein.biomes(biome)
    //     })
    //     vein.dimensions(['ad_astra:mercury', 'ad_extendra:jupiter'])
    // })
    // event.modify('gtceu:monazite_vein', vein => {
    //     vein.layer('all_layer')
    //     ADASTRA.forEach(biome =>{
    //         vein.biomes(biome)
    //     })
    //     vein.dimensions('ad_extendra:jupiter')
    // })
    event.modify('gtceu:mica_vein', vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Aluminium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
            )
        )
    })
    event.add('ctnh:mana_fused_vein', vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('mythicbotany:alfheim')
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('mana_fused')).size(2, 4))
                .layer(l => l.weight(2).block(() => Block.getBlock('mythicbotany:gold_ore')).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock('mythicbotany:dragonstone_ore')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:zirkelite_vein', vein => {
        vein.weight(60)
        vein.clusterSize(50)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions(['ad_astra:mars', 'ad_astra:venus', 'ad_astra:mercury'])
        vein.heightRangeUniform(30, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zirkelite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Thorium).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.get('zircon')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zirkelite'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:ancient_debris_vein', vein => {
        vein.weight(5)
        vein.clusterSize(35)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)
        vein.layer(WorldGenLayers.NETHERRACK)
        vein.dimensions('minecraft:the_nether')
        vein.heightRangeUniform(0, 25)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('precious_alloy')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(2, 2))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:ancient_debris')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.NetherQuartz).size(1, 1))
            )
        )
        // vein.veinedVeinGenerator(generator => generator
        //     .oreBlock(GTMaterials.get('precious_alloy'), 5) // 
        //     .oreBlock(GTMaterials.Sulfur, 3)
        //     ["rareBlock(net.minecraft.world.level.block.state.BlockState,int)"](Block.getBlock('minecraft:ancient_debris').getBlockStates().get(0), 2) 
        //     .rareBlockChance(0.25)
        //     .veininessThreshold(0.1)
        //     .maxRichnessThreshold(0.3)
        //     .minRichness(0.3)
        //     .maxRichness(1.0)
        //     .edgeRoundoffBegin(3) // 
        //     .maxEdgeRoundoff(0.2)
        // )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('precious_alloy'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
})
GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:fluorine_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:fluorine').fluid)
        vein.weight(150)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:oxygen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:oxygen').fluid)
        vein.weight(200)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:nitrogen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:nitrogen').fluid)
        vein.weight(800)
        vein.minimumYield(120)
        vein.maximumYield(900)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:hydrogen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:hydrogen').fluid)
        vein.weight(100)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:mars_mystery_fluid', vein =>{
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:mystery_fluid').fluid)
        vein.weight(100)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:mars_mystery_fluid', vein =>{
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:distilled_water').fluid)
        vein.weight(800)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})