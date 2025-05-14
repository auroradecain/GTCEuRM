StartupEvents.registry("item", event =>{
    
    const drone = [
        "1"
    ]

    for (const tier of drone) {
        event.create(`drone_t${tier}`).maxStackSize(16).texture(`kubejs:item/data_collection/drone/t${tier}`)
    }

    const floppyCollection = [
        ["overworld", "#3399ff"],
        ["nether", "#7e1b1b"],
        ["end", "#d6d980"],
        ["deep_dark", "#012a39"],
        ["scavenger", "#d9bf8c"],
        ["miner", "#666666"]
    ]

    for (const [data, dataColor] of floppyCollection){
        event.create(`${data}_data_collection`)
            .textureJson({
                layer0:"kubejs:item/data_collection/floppy", 
                layer1:"kubejs:item/data_collection/color", 
                layer2:"kubejs:item/data_collection/overlay"
            })
            .color(1, dataColor)
            .rarity("uncommon")
            .tag("kubejs:data_collection")
            .tag("kubejs:basic_data")
            .maxStackSize(16)
    }

    function advancedData(dataId, color, secondaryColor){
        if (color == undefined) color = "#ffffff"
        if (secondaryColor == undefined) secondaryColor = "#ffffff"
        
        event.create(`${dataId}_data_collection`)
            .textureJson({
                layer0:"kubejs:item/data_collection/advanced/base",
                layer1:"kubejs:item/data_collection/advanced/color",
                layer2:"kubejs:item/data_collection/advanced/secondary_color"
            })
            .color(1, color)
            .color(2, secondaryColor)
            .rarity("rare")
            .tag("kubejs:data_collection")
            .tag("kubejs:advanced_data")
            .maxStackSize(12)
    }

    advancedData("solar_system", "#a8f0f0")
    advancedData("milky_way", "#221254")
    advancedData("virgo_supercluster", "#3f0d3f")
    advancedData("observable_universe", "#2a0911")
    advancedData("altered_reality", "#f2f2f2")


    function universalData(data_id){
        event.create(`${data_id}_data_collection`)
            .textureJson({
                layer0:`kubejs:item/data_collection/universal/${data_id}`,
                layer1:"kubejs:item/data_collection/overlay3"
            })
            .tag("kubejs:data_collection")
            .tag("kubejs:universal_data")
            .rarity("epic")
            .maxStackSize(8)
    }

    universalData("universe")

    function processingArray(array, color) {
        event.create(`${array}_processing_array`)
            .textureJson({
                layer0:"kubejs:item/processing_array",
                layer1:"kubejs:item/processing_array_color"
            })
            .color(1, color)
    }

    processingArray("logic", "#ff6600")
    processingArray("resource", "#0099ff")
    processingArray("precise", "#33cc33")
    processingArray("cosmological", "#6600cc")

    function dataBinary(id, color){
        event.create(`${id}_data_binary`)
            .textureJson({layer0:"kubejs:item/data_collection/binary"})
            .color(0, color)
    }

    dataBinary("mundane", "#66ccff")
    dataBinary("otherworldly", "#339966")
    dataBinary("extraordinary", "#cc33ff")
    dataBinary("impossible", "#cc0000")

    const casing = [
        ["9mm", "9mm"],
        ["45acp", ".45 ACP"],
        ["12g", "12 Gauge"],
        ["338", ".338 Lapua"],
        ["556x45", "5.56x45mm"],
        ["762x39", "7.62x39mm"],
        ["30_06", ".30-06 Springfield"],
        ["308", ".308 Winchester"],
        ["357mag", ".357 Magnum"],
        ["57x28", ".5.7x28mm"],
        ["58x42", ".5.8mm DPB87"],
        ["40mm", "40mm"],
        ["68x51fury", "6.8x51mm Fury"],
        ["46x30", "4.6mm"],
        ["762x25", "7.62x25mm Tokarev"],
        ["762x54", "7.62x54mm"],
        ["50bmg", ".50 BMG"],
        ["50ae", ".50 AE"]
    ]

    for(const [id, disp] of casing){
        event.create(`${id}_casing`)
            .texture(`kubejs:item/casing/${id}_ammo_package`)
            .displayName(`Factory ${disp} Ammo Package`)
            .maxStackSize(24)
    }

    // Stabilized Elements
    const biomeFlowers = [
        ["forest", "#7b621e"],
        ["ocean", "#6666ff"],
        ["desert", "#ffa94d"],
        ["beach", "#007a99"],
        ["hills", "#77b300"],
        ["plains", "#f6f66f"],
        ["meadow", "#ffccff"],
        ["nether", "#7d0222"],
        ["end", "#58307f"]
    ]


    for (const [element, elemColor] of biomeFlowers) {
        event.create(`${element}_biome_core`)
            .textureJson({ layer0: "kubejs:item/biome_flower/plant", layer1:"kubejs:item/biome_flower/petal"})
            .color(1, elemColor)
    }
    // Upgrade
    const upgrade = [
        ["bronze", "#ffc370"],
        ["steel", "#a7a7a7"],
        ["aluminium", "#7db9d8"],
        ["stainless_steel", "#ededfd"],
        ["titanium", "#ed8eea"]
    ]

    for (const [mat, matColor] of upgrade) {
        event.create(`${mat}_upgrade`)
            .textureJson({layer0: "kubejs:item/upgrade/base", layer1: "kubejs:item/upgrade/arrow"})
            .color(1, matColor)
    }
    // Atmoseeds
    const atmoseeds = [
        ["hydrogen", "#0059b3"],
        ["argon", "#66ff33"],
        ["neon", "#FAB4B4"],
        ["nitrogen", "#00BFC1"],
        ["radon", "#FF39FF"],
        ["tritium", "#ff316b"],
        ["xenon", "#00FFFF"]
    ]

    for (const [mat, matColor] of atmoseeds){
        event.create(`${mat}_atmoseeds`)
            .textureJson({layer0: "kubejs:item/atmoseed"})
            .color(0, matColor)
    }


})