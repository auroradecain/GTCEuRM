ItemEvents.modification(event => {
    // Fix Travellersboots having low durability
    event.modify("travellersbootsreloaded:travellers_boots_tier1", item => {item.maxDamage = 128})
    event.modify("travellersbootsreloaded:travellers_boots_tier2", item => {item.maxDamage = 256})
    event.modify("travellersbootsreloaded:travellers_boots_tier3", item => {item.maxDamage = 384})
    event.modify("travellersbootsreloaded:travellers_boots_tier4", item => {item.maxDamage = 512})
    event.modify("travellersbootsreloaded:travellers_boots_tier5", item => {item.maxDamage = 768})
    
    // Enderpearls now stack to 64
    event.modify("minecraft:ender_pearl", item => {item.maxStackSize = 64})
})