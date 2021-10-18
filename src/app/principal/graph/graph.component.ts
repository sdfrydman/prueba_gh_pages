import { Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TriviaService } from '../trivia_service/trivia.service';

import { GoogleChartsModule } from 'angular-google-charts';

import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit { 
  posX:number=0;
  posY:number=0;

  titulo_resultado:String ='HOLA';
  descripcion_resultado:String ='Holaaa';

  ngOnInit(): void {  
    this.posX= this.triviaService.trivia.PositionX;
    this.posY= this.triviaService.trivia.PositionY;
    console.log(this.posX,this.posY);
    this.scatterChartData=[
      {
        data: [
          {x: this.posX as number,y: this.posY as number},        
        ],
        label: '',
        pointRadius: 10,
      },
    ];
    
    if(this.posX>0){
      if(this.posY>0){
        this.titulo_resultado="POPULISMOS DE DERECHA";
        this.descripcion_resultado="";
      }
      else{
        this.titulo_resultado="LIBERALISMOS DE DERECHA";
        this.descripcion_resultado="Las personas en este cuadrante tratan de defender la libertad como bien político primario en todos los sentidos. Estas personas suelen verse a sí mismas como partidarias acérrimas de la libertad personal y económica y son muy escépticas sobre los planes y metas colectivos, poniendo por encima la asociación voluntaria y la caridad a los mandatos estatales por la igualdad. Normalmente, le otorgan al Estado un papel marginal con respecto a las personas de los otros tres cuadrantes, creen en el orden social espontáneo que da el mercado. Es or eso que estas personas se revelan contra los impuestos, que constituyen un acto de coacción y, por ende, una violación de su libertad individual.";
      }
    }
    else{
      if(this.posY>0){
        this.titulo_resultado="POPULISMOS DE IZQUIERDA";
        this.descripcion_resultado="Las personas en este cuadrante tratan de promover soluciones comunales a los problemas sociales y económicos. Estas personas suelen verse a sí mismas como favorables a un formas estatales que frenen los excesos del capitalismo y el poder de las élites y, así, disminuir la desigualdad social en una economía mixta y con un estado presente. Sus soluciones son colectivas, con valores asociados a formas de democracia más directas, con el Estado intervinienda en la economía para la redistribución de bienes y servicios.";
      }
      else{
        this.titulo_resultado="LIBERALISMOS DE IZQUIERDA";
        this.descripcion_resultado="Los personas de este cuadrante defienden la libertad individual, pero creen en la intervención del Estado en el mercado para promover derechos sociales. Estas personas suelen verse a sí mismas haciendo equilibrio entre la libertad individual y la justicia social,. Aunque son escépticas respecto de la participación del Estado en los asuntos civiles, consideran que el Estado tiene un papel legítimo en garantizar condiciones de igualdad y en la promoción de sectores vulnerables. Así, si bien remarcan la importancia de la libertad, creen ésta también se relaciona con el acceso el acceso individual a bienes material (ej, una vivienda) e inmateriales (ej. educación) que justifican criterios de redistribución de recursos de los ricos a los pobres.";
      }
    }
    if(this.posX==0 && this.posY==0){
      this.titulo_resultado="CENTRO";
        this.descripcion_resultado="CENTRO";
    }
  }

  

   scatterChartOptions: ChartOptions = {
    responsive: true,
    showLines:false,
    spanGaps:false,
    scales: {
      xAxes: [{
        gridLines: {
            display:true,
        },
        display: true,
        ticks: {
          max : 30,
          min: -30,
        }
    }],
      yAxes: [{
          gridLines: {
              display:true
          },
          display: true,
          ticks: {
            max : 30,
            min: -30
          }
      }]
    }

  };

   scatterChartLabels: Label[] = [''];

   scatterChartType: ChartType = 'scatter';

   scatterChartData: ChartDataSets[] = [
    {
      data: [
        {x: this.posX as number,y: this.posY as number},        
      ],
      label: '',
      pointRadius: 10,
    },
  ];

  constructor(private triviaService:TriviaService,private _router: Router) { 
    //this.posX=triviaService.trivia.PositionX;
    //this.posY=triviaService.trivia.PositionY; 
    //(this.scatterChartData[0].data as number[]).push(this.posX,this.posY);

  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
