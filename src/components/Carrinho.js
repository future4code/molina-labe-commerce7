import React from 'react'

export class Carrinho extends React.Component{

    render(){

        const imprimirCompras = this.props.dadosCarrinho.map((produto) => {
            return<div key={produto.id}>
                <spam> {produto.quantidade}x {produto.name}</spam>
                <button>Remover</button>
            </div>
        })
        
        console.log("onchange carrinho", this.props.dadosCarrinho)
        return <div>
            <h3>Carrinho</h3>

            {imprimirCompras}

            <p>Valor Total: R$ ....</p>
        </div>
    }
}