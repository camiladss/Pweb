import React from 'react'

class PlayerDetail2 extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.Vet.nome}</h1>
                <h2>{this.props.Vet.pais}</h2>
                <h3>{this.props.Vet.time}</h3>
            </div>
        )
    }
}

export default PlayerDetail2