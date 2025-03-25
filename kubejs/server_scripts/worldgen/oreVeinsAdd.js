/** Add ore vein generation to dimensions */

GTCEuServerEvents.oreVeins(event =>{
    event.add("overworld/tetrahedrite", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(20)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Emerald).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(1,1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Emerald)
            .placement("above")
        )
    })
})