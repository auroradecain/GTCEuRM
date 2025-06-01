ServerEvents.recipes(event=>{
    const guns = [
        "cz75",
        "p320",
        "deagle_golden",
        "b93r",
        "springfield1873",
        "sks_tactical",
        "hk416d",
        "scar_l",
        "db_short",
        "uzi",
        "p90",
        "m249",
        "minigun",
        "rpk"
    ]

    guns.forEach(gun=>{
        event.remove({id:`tacz:gun/${gun}`})
    })

    const attach = [
        "sight_fastfire_pistol",
        "sight_acro_pistol",
        "sight_sro_dot",
        "sight_rmr_dot",
        "sight_t1",
        "sight_okp7",
        "sight_acro_rifle",
        "sight_fastfire_rifle",
        "sight_coyote",
        "scope_retro_2x",
        "scope_1873_6x"
    ]
    
    attach.forEach(attach=>{
        event.remove({id:`tacz:attachments/${attach}`})
    })

    // event.remove({id:"tacz:attachments/scope_1873_6x"})
})