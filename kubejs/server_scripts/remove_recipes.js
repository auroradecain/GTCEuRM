ServerEvents.recipes(event =>{
    // Mystical Agriculture

    // Previous changes are enought to remove all recipes without breaking, testing... 
    event.remove({mod: 'mysticalagriculture'})
    event.remove(["gtceu:extractor/extract_prudentium_dust", "gtceu:extractor/extract_tertium_dust", "gtceu:extractor/extract_imperium_dust", "gtceu:extractor/extract_supremium_dust", "gtceu:extractor/extract_insanium_dust"])
    
    // AE2

    event.replaceInput({ mod: 'ae2'}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceInput({ mod: 'ae2'}, 'ae2:charged_certus_quartz_crystal', 'gtceu:charged_certus_quartz_gem')
    event.replaceInput({ mod: 'ae2'}, 'ae2:fluix_crystal', 'gtceu:fluix_gem')

    event.remove(['ae2:network/blocks/inscriber', 'ae2:network/blocks/charger'])
    event.remove(['expatternprovider:ex_inscriber', 'expatternprovider:ex_charger'])
    event.remove(/expatternprovider:cutter/)
    event.remove(/ae2:inscriber/)

    // GT
})