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

  state = {
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputValorNome:'',
    dadosCarrinho: []
  }

  componentDidUpdate() {
    localStorage.setItem('carrinho', JSON.stringify(this.state.dadosCarrinho))
  };

  componentDidMount() {
    const produtosSalvos = localStorage.getItem('carrinho') 
    const arrayProdutos = JSON.parse(produtosSalvos)
    if(arrayProdutos) {
      this.setState({dadosCarrinho: arrayProdutos})
    }
  };

  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }

  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value})
  }

  onChangeValorNome = (event) => {
    this.setState({inputValorNome: event.target.value})
  }

  onChangeCarrinho = (idProduto, listaDeProdutos) => {

    const temProdutoNocarrinho = this.state.dadosCarrinho.find((item) => idProduto === item.id)
    if(temProdutoNocarrinho){
      const produtosCarrinho = this.state.dadosCarrinho.map((produtoNoCarrinho) => {
        if(idProduto === produtoNoCarrinho.id){
          return {...produtoNoCarrinho, quantidade: produtoNoCarrinho.quantidade + 1}
        }
          return produtoNoCarrinho
        })
        this.setState({dadosCarrinho: produtosCarrinho})

    } else {

      const produtoParaAdicionar = listaDeProdutos.find((item) => idProduto === item.id)

      const produtosCarrinho = [...this.state.dadosCarrinho,{...produtoParaAdicionar, quantidade: 1}]
      this.setState({dadosCarrinho: produtosCarrinho})
    }
  }

  removerDoCarrinho = (idProduto) => {
    const novosProdutosCarrinho = this.state.dadosCarrinho
      .map((produtoNoCarrinho) => {
        if(produtoNoCarrinho.id === idProduto) {
          return {
            ...produtoNoCarrinho,
            quantidade: produtoNoCarrinho.quantidade - 1
          };
        }
        return produtoNoCarrinho;

      })
      .filter((produtoNoCarrinho) => {
        return produtoNoCarrinho.quantidade > 0;
      })
      this.setState({ dadosCarrinho: novosProdutosCarrinho });
  };


  render() {

      return (
       <ConteinerGeral>
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
        <Carrinho 
        dadosCarrinho = {this.state.dadosCarrinho}
        removerDoCarrinho = {this.removerDoCarrinho}
        />
       </ConteinerGeral>
    );
  }
}