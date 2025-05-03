StartupEvents.registry("item", event =>{
    const dataCollection = [
        ["overworld", "#3399ff"]
    ]

    for (const [data, dataColor] of dataCollection){
        event.create(`${data}_data_collection`)
            .textureJson({
                layer0:"kubejs:item/data_collection/floppy", 
                layer1:"kubejs:item/data_collection/color", 
                layer2:"kubejs:item/data_collection/overlay"
            })
            .color(1, dataColor)
            .rarity("rare")
            .maxStackSize(8)
    }

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
        ["forest", "#ce9f00"],
        ["ocean", "#a33f20"],
        ["desert", "#486d7b"],
        ["beach", "#ba2727"],
        ["hills", "#1d891d"],
        ["nether", "#58307f"],
        ["end", "#7d0222"],
        ["plains", "#287869"],
        ["meadow", "#443936"]
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
        ["tritium", "#FF39FF"],
        ["xenon", "#00FFFF"]
    ]

    for (const [mat, matColor] of atmoseeds){
        event.create(`${mat}_atmoseeds`)
            .textureJson({layer0: "kubejs:item/atmoseed"})
            .color(0, matColor)
    }


})