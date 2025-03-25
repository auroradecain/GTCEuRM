/** Elements registry for superconductor line */

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('vidium')
        .protons(29)
        .neutrons(65)
        .symbol('Cu?')
    event.create('viadium') 
        .protons(29)
        .neutrons(69)
        .symbol('Vi')
})

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('fechantium')
        .protons(74)
        .neutrons(186)
        .symbol('Fc')
})

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('avisium')
        .protons(22)
        .neutrons(28)
        .symbol('Av')
})