import React from 'react'

export class Filtro extends React.Component{


    render(){
        return<div>
            <h3>Filtros</h3>

            <p>Valor minimo:</p>
            <input type="number" value = {this.props.inputValorMinimo} onChange={this.props.onChangeValorMinimo}/>

            <p>Valor máximo:</p>
            <input type="number" value = {this.props.inputValorMaximo} onChange={this.props.onChangeValorMaximo}/>

            <p>Buscar por Nome:</p>
            <input type="text" value = {this.props.inputValorNome} onChange={this.props.onChangeValorNome}/>
        </div>
    }
}