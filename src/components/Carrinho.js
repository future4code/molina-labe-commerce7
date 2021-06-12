import React from 'react'
import styled from 'styled-components'


const ContainerProdutos = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 10px 0px;
`

export class Carrinho extends React.Component{


    onClick = (idProduto) => {
        const removerDoCarrinho = this.props.removerDoCarrinho;
        removerDoCarrinho(idProduto)
    }
    
    render(){
        
        let soma = 0 

        for(let i= 0; i < this.props.dadosCarrinho.length; i++){
            const itemNoCarrinho = this.props.dadosCarrinho[i]
            const preco = itemNoCarrinho.value
            const quantidade = itemNoCarrinho.quantidade

            soma = soma + preco * quantidade
        }


        const imprimirCompras = this.props.dadosCarrinho.map((produto) => {
            return<ContainerProdutos key={produto.id}>
                <spam> {produto.quantidade} x {produto.name}</spam>
                <button onClick={() => this.onClick(produto.id)}>Remover</button>
            </ContainerProdutos>
        })
        
        return <div>
            <h3>Carrinho</h3>

            {imprimirCompras}

            {soma > 0 ? <p>Valor Total: R$ {soma.toFixed(2)}</p> : <p>Carrinho Vazio</p>}
        </div>
    }
}