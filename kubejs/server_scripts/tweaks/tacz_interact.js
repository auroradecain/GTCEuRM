ServerEvents.tags("block", event => {
    const list = [
        // All GT tiered blocks
        /^gtceu:(steam|u?lv|mv|hv|ev|iv|luv|zpm|uv|uhv|creative)_.*$/,

        // All GT Large variants (turbines & multis) + power substation
        /^gtceu:.*(_large|large_|_large_|mega_|synthetic_).*$/,
        "gtceu:power_substation",
        "gtceu:greenhouse",
        "gtceu:critical_point_crystal_matrix",
        "gtceu:elemental_turbine",
        "gtceu:draconitium_collider",

        // NC:Neoteric controller & io port
        "nuclearcraft:fission_reactor_controller",
        "nuclearcraft:fission_reactor_port",

        // Tacz Durability Workstation
        "gundurability:repair_table"
    ]

    event.add("tacz:interact_key/whitelist", list)
})
