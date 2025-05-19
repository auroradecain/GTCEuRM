ServerEvents.tags("item", event => {
    event.get("gtceu:batteries").getObjectIds().forEach(resourceLoc => {
        event.add("curios:belt", resourceLoc.toString())
    })
})

ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", "minecraft:glowstone")
})
