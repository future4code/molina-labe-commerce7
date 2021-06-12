import React from 'react'

export class Carrinho extends React.Component{
    onClick = (idProduto) => {
        const removerDoCarrinho = this.props.removerDoCarrinho;
        removerDoCarrinho(idProduto)
    }

    render(){

        let soma=0

        for(let i= 0; i < this.props.dadosCarrinho.length; i++){
            const itemNoCarrinho = this.props.dadosCarrinho[i]
            const preco = itemNoCarrinho.value
            const quantidade = itemNoCarrinho.quantidade
            soma = soma + preco*quantidade
        }


        const imprimirCompras = this.props.dadosCarrinho.map((produto) => {
            return<div key={produto.id}>
                <spam> {produto.quantidade} x {produto.name}</spam>
                <button onClick={() => this.onClick(produto.id)}>Remover</button>
            </div>
        })
        
        return <div>
            <h3>Carrinho</h3>

            {imprimirCompras}

            <p>Valor Total: R$ {soma}</p>
        </div>
    }
}