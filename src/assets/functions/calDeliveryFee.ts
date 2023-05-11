const calDeliveryFee = (checkGram: any) => {
    let result = 0
    if (checkGram > 0 && checkGram <= 500) result = 45
    else if (checkGram > 500 && checkGram <= 1000) result = 45
    else if (checkGram > 1000 && checkGram <= 2000) result = 64
    else if (checkGram > 2000 && checkGram <= 3000) result = 79
    else if (checkGram > 3000 && checkGram <= 4000) result = 104
    else if (checkGram > 4000 && checkGram <= 5000) result = 104
    else if (checkGram > 5000 && checkGram <= 6000) result = 134
    else if (checkGram > 6000 && checkGram <= 7000) result = 134
    else if (checkGram > 7000 && checkGram <= 8000) result = 134
    else if (checkGram > 8000 && checkGram <= 9000) result = 134
    else if (checkGram > 9000 && checkGram <= 10000) result = 134
    else if (checkGram > 10000 && checkGram <= 11000) result = 170
    else if (checkGram > 11000 && checkGram <= 12000) result = 170
    else if (checkGram > 12000 && checkGram <= 13000) result = 170
    else if (checkGram > 13000 && checkGram <= 14000) result = 170
    else if (checkGram > 14000 && checkGram <= 15000) result = 170
    else if (checkGram > 15000 && checkGram <= 16000) result = 230
    else if (checkGram > 16000 && checkGram <= 17000) result = 230
    else if (checkGram > 17000 && checkGram <= 18000) result = 230
    else if (checkGram > 18000 && checkGram <= 19000) result = 230
    else if (checkGram > 19000 && checkGram <= 20000) result = 230

    else if (checkGram > 20000 && checkGram <= 21000) result = 250
    else if (checkGram > 21000 && checkGram <= 22000) result = 260
    else if (checkGram > 22000 && checkGram <= 23000) result = 270
    else if (checkGram > 23000 && checkGram <= 24000) result = 285
    else if (checkGram > 24000 && checkGram <= 25000) result = 295
    else if (checkGram > 25000 && checkGram <= 26000) result = 305
    else if (checkGram > 26000 && checkGram <= 27000) result = 320
    else if (checkGram > 27000 && checkGram <= 28000) result = 330
    else if (checkGram > 28000 && checkGram <= 29000) result = 340
    else if (checkGram > 29000 && checkGram <= 30000) result = 355
    else if (checkGram > 30000 && checkGram <= 31000) result = 365
    else if (checkGram > 31000 && checkGram <= 32000) result = 375
    else if (checkGram > 32000 && checkGram <= 33000) result = 390
    else if (checkGram > 33000 && checkGram <= 34000) result = 400
    else if (checkGram > 34000 && checkGram <= 35000) result = 410
    else if (checkGram > 35000 && checkGram <= 36000) result = 425
    else if (checkGram > 36000 && checkGram <= 37000) result = 435
    else if (checkGram > 37000 && checkGram <= 38000) result = 445
    else if (checkGram > 38000 && checkGram <= 39000) result = 460
    else if (checkGram > 39000 && checkGram <= 40000) result = 470
    return result
}

export {
    calDeliveryFee
}