import { fixModule, instructionToBinary } from "./funciones";

export function translateModule(string: string): string {


    let tokens = string.split(/ |, |[(x)]|,/g).filter(Boolean);
    console.log(tokens);
    let instruct;
    let translate;
    let transNum = '';
    let fix;
    switch (tokens[0]) {
        case 'sd':
            instruct = instructionToBinary(tokens[0]);
            instruct.rs2 = fixModule(parseInt(tokens[1]).toString(2), 5);
            console.log("instruct.rs2: ", instruct.rs2);
            let aux = fixModule(parseInt(tokens[2]).toString(2), 12);
            instruct.inmmediate1 = aux.slice(0, 7);
            console.log("instruct.inmmediate1: ", instruct.inmmediate1);
            instruct.inmmediate2 = aux.slice(7, 13);
            console.log("instruct.inmmediate2: ", instruct.inmmediate2);
            instruct.rs1 = fixModule(parseInt(tokens[3]).toString(2), 5)
            console.log("instruct.rs1: ", instruct.rs1);
            translate =
                instruct.inmmediate1 +
                instruct.rs2 +
                instruct.rs1 +
                instruct.funct3 +
                instruct.inmmediate2 +
                instruct.opcode;
            console.log("Binary Translate: ", translate);
            transNum = parseInt(translate, 2).toString(16);
            fix = 8 - transNum.length
            if (fix > 0) {
                for (let i = fix; i > 0; i--) {
                    transNum = '0' + transNum;
                }
            }
            break;

        case 'ld':
            instruct = instructionToBinary(tokens[0]);
            instruct.rd = fixModule(parseInt(tokens[1]).toString(2), 5);
            instruct.inmmediate = fixModule(parseInt(tokens[2]).toString(2), 12);
            instruct.rs1 = fixModule(parseInt(tokens[3]).toString(2), 5);
            translate =
                instruct.inmmediate +
                instruct.rs1 +
                instruct.funct3 +
                instruct.rd +
                instruct.opcode;
            console.log("Binary Translate: ", translate);
            transNum = parseInt(translate, 2).toString(16);
            fix = 8 - transNum.length
            if (fix > 0) {
                for (let i = fix; i > 0; i--) {
                    transNum = '0' + transNum;
                }
            }
            break

        case 'add':
            instruct = instructionToBinary(tokens[0]);
            instruct.rd = fixModule(parseInt(tokens[1]).toString(2), 5);
            instruct.rs1 = fixModule(parseInt(tokens[2]).toString(2), 5);
            instruct.rs2 = fixModule(parseInt(tokens[3]).toString(2), 5);
            translate =
                instruct.funct7 +
                instruct.rs2 +
                instruct.rs1 +
                instruct.funct3 +
                instruct.rd +
                instruct.opcode;
            console.log("Binary Translate: ", translate);
            transNum = parseInt(translate, 2).toString(16);
            fix = 8 - transNum.length;
            if (fix > 0) {
                for (let i = fix; i > 0; i--) {
                    transNum = '0' + transNum;
                }
            }
            break;

        case 'sub':
            instruct = instructionToBinary(tokens[0]);
            instruct.rd = fixModule(parseInt(tokens[1]).toString(2), 5);
            instruct.rs1 = fixModule(parseInt(tokens[2]).toString(2), 5);
            instruct.rs2 = fixModule(parseInt(tokens[3]).toString(2), 5);
            translate =
                instruct.funct7 +
                instruct.rs2 +
                instruct.rs1 +
                instruct.funct3 +
                instruct.rd +
                instruct.opcode;
            console.log("Binary Translate: ", translate);
            transNum = parseInt(translate, 2).toString(16);
            fix = 8 - transNum.length;
            if (fix > 0) {
                for (let i = fix; i > 0; i--) {
                    transNum = '0' + transNum;
                }
            }
            break;
    }

    transNum = 'x"' + transNum + '",     --' + string;
    console.log(transNum);

    return transNum;
}