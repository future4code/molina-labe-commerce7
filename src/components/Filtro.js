import React from 'react'
import styled from 'styled-components'

const Conteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export class Filtro extends React.Component{

    render(){
        return<Conteiner>
            <h3>Filtros</h3>

            <div>
                <p>Valor minimo:</p>
                <input type="number" value = {this.props.inputValorMinimo} onChange={this.props.onChangeValorMinimo}/>
            </div>

            <div>
                <p>Valor máximo:</p>
                <input type="number" value = {this.props.inputValorMaximo} onChange={this.props.onChangeValorMaximo}/>
            </div>

            <div>
                <p>Buscar por Nome:</p>
                <input type="text" value = {this.props.inputValorNome} onChange={this.props.onChangeValorNome}/>
            </div>
        </Conteiner>
    }
}