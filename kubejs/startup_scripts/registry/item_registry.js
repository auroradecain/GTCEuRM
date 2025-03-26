StartupEvents.registry("item", event =>{
    const casing = [
        "9mm",
        "45acp",
        "12g",
        "338",
        "556x45",
        "762x39",
        "30_06",
        "357mag",
        "57x28",
        "58x42",
        "40mm",
        "46x30",
        "762x25",
        "762x54",
        "rpg_rocket",
        "50bmg",
        "50ae"
    ]
    
    casing.forEach(casing => {
        event.create(`${casing}_casing`).texture(`kubejs:item/casing/${casing}`)
    })
})