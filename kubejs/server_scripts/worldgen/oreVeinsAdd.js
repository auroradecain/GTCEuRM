/** Add ore vein generation to dimensions */

GTCEuServerEvents.oreVeins(event =>{
    event.add("overworld/emerald", vein => {
        vein.weight(40)
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

    event.add("overworld/quartz", vein => {
        vein.weight(60)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(15, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.NetherQuartz).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("fluorspar")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Emerald)
            .placement("above")
        )
    })

    event.add("overworld/dioptase", vein =>{
        vein.weight(60)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(30, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get("dioptase")).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 2))
            )
        )
    })

    event.add("overworld/uraninite", vein =>{
        vein.weight(40)
        vein.density(0.20)
        vein.clusterSize(40)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-50, -15)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Thorium).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 2))
            )
        )
    })

    event.add("overworld/inferium", vein => {
        vein.weight(80)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(15, 55)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.FullersEarth).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("inferium")).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("prosperity")).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("inferium"))
            .placement("above")
        )
    })

    event.add("overworld/vidium", vein=>{
        vein.weight(40)
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

    event.add("nether/argentite", vein =>{
        vein.weight(60)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(90, 110)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(2, 3))
                .layer(l => l.weight(4).mat(GTMaterials.get("argentite")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("argentite"))
            .placement("below")
        )
    })

    event.add("nether/torbenite", vein =>{
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(100, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("torbenite")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("tadanite_earth")).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrochlore).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 3))
            )
        )
    })

    event.add("nether/terraemantine", vein =>{
        vein.weight(80)
        vein.density(0.5)
        vein.clusterSize(15)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.TricalciumPhosphate).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("terraemantine")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("terraemantine")).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("terraemantine"))
            .placement("surface")
        )
    })

    event.add("nether/ender_sulfate", vein =>{
        vein.weight(70)
        vein.density(0.75)
        vein.clusterSize(50)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(80, 120)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get("ender_sulfate"), 5)
            .oreBlock(GTMaterials.Sulfur, 2)
            .oreBlock(GTMaterials.Iron, 2)
            .veininessThreshold(0.05)
            .maxRichnessThreshold(0.175)
            .minRichness(0.7)
            .maxRichness(1.1)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("ender_sulfate"))
            .placement("above")
        )
    })

    event.add("end/dionitase", vein =>{
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("endstone")
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("dionitase")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dionitase"))
            .placement("surface")
        )
    })

    event.add("end/trevinite", vein =>{
        vein.weight(25)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("endstone")
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("trevinite")).size(2, 4)) 
                .layer(l => l.weight(3).mat(GTMaterials.Lithium).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenum).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dionitase"))
            .placement("surface")
        )
    })

})