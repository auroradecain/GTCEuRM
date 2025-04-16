/** Add ore vein generation to dimensions */

GTCEuServerEvents.oreVeins(event =>{
    event.add("overworld/emerald", vein => {
        vein.weight(25)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-30, -10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Emerald).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Emerald)
            .placement("above")
        )
    })
    event.add("overworld/inferium", vein => {
        vein.weight(25)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("inferium")).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("prosperity")).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("inferium"))
            .placement("above")
        )
    })

    event.add("overworld/vidium", vein=>{
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("zircon")).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("vidium")).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get("zircon")).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("vidium"))
            .placement("above")
        )
    })

})