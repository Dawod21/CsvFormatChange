import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-cases-report',
  templateUrl: './cases-report.component.html',
  styleUrls: ['./cases-report.component.css']
})
export class CasesReportComponent implements OnInit {

  constructor(private service:CovidService) { }
  // covidData: any[] = [];
  lines=[];
  linesR=[];
  ngOnInit() {
    //this.getData();
  }
  

  changeFileFormat(files: FileList){
    console.log(files);
    if(files && files.length){
      let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader:FileReader =new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
          let headers = allTextLines[0].split(';');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          this.lines.push(tarr);
          
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(';'));
         
          }
          
          for (let j = 0; j < arrl; j++) {
      
              tarrR.push(rows[j]);
              
          }
         //Push rows to array variable
          this.linesR.push(tarrR);
         }
    }
  }
//   csvJSON(csv){

//     var lines=csv.split("\n");
  
//     // var result = [];
  
//     var headers=lines[0].split(",");
  
//     for(var i=1;i<lines.length;i++){
  
//       var obj = {};
//       var currentline=lines[i].split(",");
  
//       for(var j=0;j<headers.length;j++){
//         obj[headers[j]] = currentline[j];
//       }
  
//      this.result.push(obj);
  
//     }
    
//     //return result; //JavaScript object
//     console.log("JSON Result", this.result)
//     return JSON.stringify( this.result); //JSON
//   }

// }
  // getData() {
  //   this.service.getData().subscribe(data => {
  //   const list = data.split('\n');
  //   console.log(this.covidData);
  //   list.forEach( e => {
  //   this.covidData.push(e);
  //   });
  //   });
  //   }
}
