import { Component, OnInit, VERSION } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2'
import { translateModule } from './convertidor';

@Component({
    selector: 'app-traductor',
    templateUrl: './traductor.component.html',
    styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

    constructor(private clipboard: Clipboard) {}
    
    query: string = "";
    translate: string = "";
    tokens: string []= [];

    codeMirrorOptions: any = {
        mode: "assembly",
        theme: "dracula",
        indentWithTabs: true,
        lines: true,
       
        smartIndent: true,
        lineNumbers: true,
        lineWrapping: false,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        autoCloseBrackets: true,
        matchBrackets: true,
        lint: true,
        heigth: "auto"
        
    };
    


    ngOnInit() {
        this.query = "sd x1, 1000(x2)"

        this.tokens = this.query.split(/\n/g).filter(Boolean);
        
        this.translate= ""
    }

    traducir(){
        console.log("Tokens a traducir: ", this.tokens[0]);
        this.translate = this.tokens.map((token)=>{
            return token = "    "+ translateModule(token)+"\n"
        }).join("");
        console.log("Translate: ",this.translate);
    }

    copyFile(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          this.clipboard.copy(this.translate);
          Toast.fire({
            icon: 'info',
            title: 'Copied to clipboard!'
          })
          
         
    }

    setEditorContent(event: any) {
        //   console.log("Tipo de evento: \n"+ event, typeof event);
        console.log(this.query);
        this.tokens = this.query.toLowerCase().split(/\n/g).filter(Boolean);
        console.log("Tokens",this.tokens);
    }
}
