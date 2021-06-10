import React from 'react'
import {Filtro} from './components/Filtro.js'
import {Home} from './components/Home.js'
import {Carrinho} from './components/Carrinho.js'
import styled from 'styled-components'

const ConteinerGeral = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw
`
export default class App extends React.Component{

  state={
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputValorNome:'',
    dadosCarrinho: [] //deve retornar objetos com nome do produto, quantidade e valor unitario
  }

  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }

  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value})
  }

  onChangeValorNome = (event) => {
    this.setState({inputValorNome: event.target.value})
  }

  onChangeCarrinho = (produto) => {
    const produtosCarrinho = [produto, ...this.state.dadosCarrinho]
    this.setState({dadosCarrinho: produtosCarrinho})
  }

  render(){

      return <ConteinerGeral>
        <Filtro inputValorMinimo={this.state.inputValorMinimo}
        inputValorMaximo={this.state.inputValorMaximo}
        inputValorNome={this.state.inputValorNome}
        onChangeValorMinimo={this.onChangeValorMinimo}
        onChangeValorMaximo ={this.onChangeValorMaximo}
        onChangeValorNome = {this.onChangeValorNome}
        />
        <Home inputValorMinimo={this.state.inputValorMinimo}
        inputValorMaximo={this.state.inputValorMaximo}
        inputValorNome={this.state.inputValorNome}
        dadosCarrinho = {this.state.dadosCarrinho}
        onChangeCarrinho = {this.onChangeCarrinho}
        />
        <Carrinho dadosCarrinho = {this.state.dadosCarrinho}
        />
      </ConteinerGeral>
  }
}