import React from 'react'
import styled from 'styled-components'


const ContainerProdutos = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 10px 0px;
`
const BotaoRemover = styled.button`
    padding: 5px;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-weight: bold;
`

const IconeCarrinho = styled.img`
    width: 8%
`

export class Carrinho extends React.Component{


    onClick = (idProduto) => {
        const removerDoCarrinho = this.props.removerDoCarrinho;
        removerDoCarrinho(idProduto)
    }
    
    render(){
        
        let soma = 0

        let somaQuantidade = 0

        for(let i= 0; i < this.props.dadosCarrinho.length; i++){
            const itemNoCarrinho = this.props.dadosCarrinho[i]
            const preco = itemNoCarrinho.value
            const quantidade = itemNoCarrinho.quantidade

            soma = soma + preco * quantidade
        }


        const imprimirCompras = this.props.dadosCarrinho.map((produto) => {
            return<ContainerProdutos key={produto.id}>
                <spam> {produto.quantidade} x {produto.name}</spam>
                <BotaoRemover onClick={() => this.onClick(produto.id)}>Remover</BotaoRemover>
            </ContainerProdutos>
        })
        
        return <div>
            <div>Carrinho <IconeCarrinho src="https://image.flaticon.com/icons/png/512/25/25619.png"
            alt = "icone carrinho"
            /> {somaQuantidade > 0 ? {somaQuantidade} : ""}</div>

            {imprimirCompras}

            {soma > 0 ? <p>Valor Total: R$ {soma.toFixed(2)}</p> : <p>Carrinho Vazio</p>}
        </div>
    }
}