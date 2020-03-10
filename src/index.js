import React from 'react';
//interface de programação para documentos HTML e XML
import ReactDOM from 'react-dom';
//Importando arquivos de PlayerDetail
import PlayerDetail2 from './PlayerDetail2';
import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      Vet = [
            {
                  nome : 'Toni Kroos',
                  pais : 'Real Madrid',
                  time : 'Alemanha'
                  },
            {
                  nome : 'Luis Suárez',
                  pais : 'Barcelona',
                  time : 'Uruguai'
                  },
            {
                  nome : 'Cristiano Ronaldo',
                  pais : 'Juventus',
                  time : 'Portugal'
                  }
      ]


      constructor(props){

            super(props);

            console.log(this);

            this.state = {
                  indice: 0,
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.Vet.length-2)
        {            
        this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
        if (this.state.indice!==0){
            this.setState({
             indice : this.state.indice-1     
            })
        }
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <PlayerDetail2 nome="Camila" Vet={this.Vet[this.state.indice]}>
                        </PlayerDetail2>
                        <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));