function validateCardType(cardNumber) {
    const cardRules = [
        { type: "VISA", regex: /^4/ },
        { type: "MASTER CARD", regex: /^(5[1-5]|2(2[2-9]|[3-6][0-9]|7[0-1]|720))/ },
        { type: "ELO", regex: /^(4011|4312|4389|45|50|627780|636297|636368)/ },
        { type: "AMERICAN EXPRESS", regex: /^3[47]/ },
        { type: "DISCOVER", regex: /^(6011|65|64[4-9])/ },
        { type: "HIPERCARD", regex: /^6062/ },
        { type: "VISA ELETRON", regex: /^4/ },
        { type: "DINERS CLUB", regex: /^6/ }
    ];

    for (const rule of cardRules) {
        if (rule.regex.test(cardNumber)) {
            return rule.type;
        }
    }

    return "Unknown Card Type";
}

// Example usage:
const cardNumber = "6011123456789012";
console.log(validateCardType(cardNumber)); // Output: "ELO"