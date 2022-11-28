export class Itype {
    inmmediate: string; // 12bits
    rs1:        string; // 5btis
    funct3:     string; // 3bits
    rd:         string; // 5bits
    opcode:     string; // 7bits

    constructor(){
        this.inmmediate = "";
        this.rs1 = "";
        this.funct3 = "";
        this.rd = "";
        this.opcode = "";
    }
}