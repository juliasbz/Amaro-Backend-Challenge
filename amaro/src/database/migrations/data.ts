import { IProductDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const products: IProductDB[] = [
    {
        id: "201",
        name: "Casaco amarelo",
        tag: "CASACOS"
    },
    {
        id: "202",
        name: "Pijama minions",
        tag: "PIJAMAS"
    },
    {
        id: "203",
        name: "Vestido preto",
        tag: "VESTIDOS"
    },
    {
        id: "204",
        name: "Blusa manga longa laranja",
        tag: "BLUSAS"
    },
    {
        id: "205",
        name: "Blusa manga curta verde",
        tag: "BLUSAS"
    },
]