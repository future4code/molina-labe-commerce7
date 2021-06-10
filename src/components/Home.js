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
        },

        {
            id: 2,
            name: "Foguete",
            value: 5000.0,
            imageUrl: "https://picsum.photos/202/202",
        }

        ]
    }

    render(){

        const produtos = this.state.produtos.map((produto) => {
            return<DivArrayProdutos key={produto.id}>
                <img src={produto.imageUrl}/>
                <spam>{produto.name}</spam>
                <spam>R$ {produto.value}</spam>
                <button>Adicionar ao carrinho</button>
            </DivArrayProdutos>
        })

        //fazer um array de produtos com filtro de valor minimo e maximo
        //fazer um array de produtos com filtro de nome do produto
        //fazer um array de produtos com map retornando crescente e decrescente

        return<div>
            <p>Ordenação:</p>
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
            <p>Quantidade de produtos: {this.state.produtos.length}</p>
            <DivProdutos>
                {produtos}
            </DivProdutos>  
        </div>
    }
}