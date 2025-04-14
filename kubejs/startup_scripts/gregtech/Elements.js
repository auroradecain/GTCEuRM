
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    /** Elements registry for superconductor concurrent line to EnderIO counterparts */

    event.create('vidium')
        .protons(29)
        .neutrons(65)
        .symbol('Vi')
    event.create('viadium') 
        .protons(29)
        .neutrons(69)
        .symbol('*Vi*')
    event.create('fechantium')
        .protons(74)
        .neutrons(186)
        .symbol('Fc')
    event.create('avisium')
        .protons(22)
        .neutrons(28)
        .symbol('Av')

})

GTCEuStartupEvents.registry('gtceu:element', event=>{
    event.create('awakened_supremium')
        .protons(139)
        .neutrons(211)
        .symbol('Š')
})