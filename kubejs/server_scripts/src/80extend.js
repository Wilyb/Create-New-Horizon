ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("china")
        .itemInputs('4x gtceu:iv_voltage_coil')
        .itemInputs('32x gtceu:naquadah_foil')
        .itemInputs('16x gtceu:uhpic_chip')
        .itemInputs('4x gtceu:iv_electric_pump')
        .itemInputs('gtnn:exxonmobil_chemical_plant')
        .itemOutputs('ctnhcore:sinope_chemical')
        .EUt(32800)
        .duration(1440)
    event.recipes.gtceu.alloy_blast_smelter("man")
        .itemInputs('10x gtceu:lithium_dust')
        .itemInputs('10x gtceu:cobalt_dust')
        .itemInputs('10x gtceu:platinum_dust')
        .itemInputs('10x gtceu:erbium_dust')
        .inputFluids(Fluid.of('gtceu:pyrotheum', 1440))
        .inputFluids(Fluid.of('gtceu:helium', 1440))
        .outputFluids(Fluid.of("gtceu:shock_resistant_alloy", 2400))
        .EUt(2400)
        .duration(240)
    event.remove({ id: "gtceu:assembler/plate_radiation_2" })
    event.remove({ id: "gtceu:assembler/plate_radiation" })
    event.remove({ id: "gtceu:electric_blast_furnace/iro2" })
    event.recipes.gtceu.assembler("plate_radiation_3")
        .itemInputs('8x gtceu:dense_naquadah_alloy_plate')
        .circuit(1)
        .itemInputs('4x gtceu:dense_lanthanum_plate')
        .inputFluids(Fluid.of('gtceu:lead', 1440))
        .itemOutputs('3x gtnn:plate_radiation_protection')
        .EUt(32678)
        .duration(400)
    event.recipes.gtceu.assembler("plate_radiation_4")
        .itemInputs('8x gtceu:dense_naquadah_alloy_plate')
        .circuit(2)
        .itemInputs('6x gtceu:dense_iridium_plate')
        .inputFluids(Fluid.of('gtceu:lead', 1440))
        .itemOutputs('3x gtnn:plate_radiation_protection')
        .EUt(32678)
        .duration(400)
    event.recipes.gtceu.sinope('gtceu:thorium_232_dust')
        .itemOutputs('4x gtceu:thorium_232_dust')
        .itemOutputs('16x gtceu:small_thorium_dust')
        .itemInputs('32x gtceu:thorium_dust')
        .itemInputs('16x gtceu:borax_dust')
        .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1500))
        .circuit(1)
        .EUt(1920)
        .duration(6000)
})