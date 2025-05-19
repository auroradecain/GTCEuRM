ServerEvents.recipes(event=>{
    event.shaped('kubejs:drone_t1', [
        'DFD',
        'AEA',
        'BCB'
    ], {
        A: 'gtceu:double_steel_plate',
        F: 'gtceu:double_cupronickel_plate',
        B: 'gtceu:power_thruster',
        C: '#gtceu:batteries/lv',
        D: 'gtceu:lv_sensor',
        E: 'gtceu:lv_electric_motor'
    }).id('kubejs:tier1_drone')
})