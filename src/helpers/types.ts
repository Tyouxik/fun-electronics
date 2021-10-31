export type device = {
    type: string,
    pin: number 
}

export type deviceList = {
    [k:string]: {
        [k:string]:device
    }
}