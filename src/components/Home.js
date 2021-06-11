import React from 'react'
import styled from 'styled-components'

const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`
const DivArrayProdutos = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: column;
`

export class Home extends React.Component{

    state = {
        produtos: [
        {
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
            quantidade: 1
        },

        {
            id: 2,
            name: "Foguete",
            value: 5000.0,
            imageUrl: "https://picsum.photos/202/202",
            quantidade: 1
        },

        {
            id: 3,
            name: "Montanha",
            value: 200.0,
            imageUrl: "https://picsum.photos/203/203",
            quantidade: 1
        },

        {
            id: 4,
            name: "Casa",
            value: 50.0,
            imageUrl: "https://picsum.photos/204/204",
            quantidade: 1
        }
        ],
        ordenado: ''
    }

    onChangeOrdenado = (event) => {
        this.setState({ordenado: event.target.value})
    }

    adicionarProduto = (idProduto, listaDeProdutos) => {
        this.props.onChangeCarrinho(idProduto, listaDeProdutos)
    }

    render(){


        const produtosFiltrados = this.state.produtos.filter((produto)=>{
            if(this.props.inputValorMinimo === ''){
                return true
            }
            return produto.value >= this.props.inputValorMinimo
        }).filter((produto)=>{
            if(this.props.inputValorMaximo === ''){
                return true
            }
            return produto.value <= this.props.inputValorMaximo
        }).filter((produto) => {
            if(this.props.inputValorNome === ''){
                return true
            }
            const nomeProduto = produto.name.toLowerCase().trim()
            const nomeFiltro = this.props.inputValorNome.toLowerCase().trim()
            return nomeProduto.indexOf(nomeFiltro) !== -1
        })

        switch(this.state.ordenado){
            case "crescente":
                produtosFiltrados.sort(function(a,b){return a.value - b.value})
                break;
            case "decrescente":
                produtosFiltrados.sort(function(a,b){return b.value - a.value})
                break;
        }

        return<div>
            <p>Ordenação:</p>
            <select value ={this.state.ordenado} onChange={this.onChangeOrdenado}>
                <option value="">Selecionar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
            <p>Quantidade de produtos: {produtosFiltrados.length}</p>
            <DivProdutos>
                {
                    produtosFiltrados.map((produto) => {
                        return<DivArrayProdutos key={produto.id}>
                        <img src={produto.imageUrl}/>
                        <spam>{produto.name}</spam>
                        <spam>R$ {produto.value}</spam>
                        <button onClick={() => this.adicionarProduto(produto.id, this.state.produtos)}>Adicionar ao carrinho</button>
                    </DivArrayProdutos>
                    })
                }
            </DivProdutos>  
        </div>
    }
}