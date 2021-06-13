import React from 'react'
import styled from 'styled-components'

const Conteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const TituloFiltroH3 = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconeFiltro = styled.img`
    width: 8%
`

export class Filtro extends React.Component{

    render(){
        return<Conteiner>
            <TituloFiltroH3><IconeFiltro src = "https://image.flaticon.com/icons/png/512/223/223420.png" alt ="icone filtro"/> <p>Filtros</p> </TituloFiltroH3>

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