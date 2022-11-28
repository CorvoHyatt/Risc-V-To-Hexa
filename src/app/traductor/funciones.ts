import { Itype } from "./Itype.model";
import { Rtype } from "./Rtype.model"
import { Stype } from "./Stype.model";

let instR = new Rtype();
let instI = new Itype();
let instS = new Stype();

export function fixModule(number: string, fixRate: number): string{
    let fix = fixRate - number.length;
    for(let i = fix; i > 0; i--){
        number = '0' + number;
    }
    return number;
}


export function instructionToBinary(opcode:string): any{

    switch(opcode){
        case "add":
          
            instR.opcode = "0110011";
            instR.funct7 = "0000000";
            instR.funct3 = "000";
            return instR;
            
        case "sub":
            
            instR.opcode = "0110011";
            instR.funct7 = "0100000";
            instR.funct3 = "000";
            return instR;
        
        case "ld":
            instI.opcode = "0000011";
            instI.funct3 = "011";
            return instI;
        
        case "sd":
            instS.opcode = "0100011";
            instS.funct3 = "011";
            return instS;

    
    }
}





    