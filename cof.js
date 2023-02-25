export const calculateCoef = (attackType, defenceType) => {
    if (attackType === defenceType){
        return 0.5;
    }
    let type = coefs[attackType];

    return type[defenceType];
}
const coefs = {
    fire: {
        grass: 2.0,
        water: 0.5,
        electric: 1
    },
    water: {
        grass: 0.5,
        fire: 2.0,
        electric: 0.5
    },
    grass: {
        fire: 0.5,
        water: 2.0,
        electric: 1
    },
    electric: {
        grass: 1,
        fire: 1,
        water: 2.0
    }
}

