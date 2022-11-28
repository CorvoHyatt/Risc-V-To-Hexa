export class Stype {
    inmmediate1: string;    // 7bits
    rs2 :        string;    // 5bits
    rs1 :        string;    // 5bits
    funct3:      string;    // 3bits
    inmmediate2: string;    // 5bits
    opcode:      string;    // 7bits


    constructor(){
        this.inmmediate1 = "";
        this.rs2 = "";
        this.rs1 = "";
        this.funct3 = "";
        this.inmmediate2 = "";
        this.opcode = "";
    }
}