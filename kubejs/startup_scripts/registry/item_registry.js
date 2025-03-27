StartupEvents.registry("item", event =>{
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
            .texture(`kubejs:item/casing/${id}_casing`)
            .displayName(`${disp} Casing`)
            .maxStackSize(24)
    }
})