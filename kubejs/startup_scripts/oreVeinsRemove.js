WorldgenEvents.remove(event =>{
    event.removeFeatureById("underground_ores", [
        "mysticalagriculture:inferium_ore",
        "mysticalagriculture:prosperity_ore",
        "mysticalagriculture:end_inferium_ore",
        "mysticalagriculture:end_prosperity_ore",
        "mysticalagriculture:nether_inferium_ore",
        "mysticalagriculture:nether_prosperity_ore"
    ])
})