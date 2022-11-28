export class Rtype{
    funct7 : string; // 7bits
    rs2    : string; // 5bits
    rs1    : string; // 5bits
    funct3 : string; // 3bits
    rd     : string; // 5bits
    opcode : string; // 7bits


    constructor(){
        this.funct7 = "";
        this.funct3 = "";
        this.opcode = "";
        this.rd = "";
        this.rs1 = "";
        this.rs2 = "";
    }
}