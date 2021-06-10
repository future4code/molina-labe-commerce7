import React from 'react'

export class Filtro extends React.Component{
    render(){
        return<div>
            <h3>Filtros</h3>

            <p>Valor minimo:</p>
            <input type="number" value = "100"/>

            <p>Valor máximo:</p>
            <input type="number" value = "1000"/>

            <p>Buscar por Nome:</p>
            <input type="text" value = ""/>
        </div>
    }
}