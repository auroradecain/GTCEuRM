
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    /** Elements registry for superconductor concurrent line to EnderIO counterparts */

    event.create('viadium') 
        .protons(46)
        .neutrons(73)
        .symbol('Vd')
    event.create('fechantium')
        .protons(74)
        .neutrons(112)
        .symbol('Fn')
    event.create('avisium')
        .protons(77)
        .neutrons(123)
        .symbol('Av')
    event.create('queenium')
        .protons(125)
        .neutrons(125)
        .symbol('Q')

})

GTCEuStartupEvents.registry('gtceu:element', event=>{
    event.create('awakened_supremium')
        .protons(139)
        .neutrons(211)
        .symbol('Š')
})