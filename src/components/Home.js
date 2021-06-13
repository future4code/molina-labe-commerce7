import React from 'react'
import styled from 'styled-components'

const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    flex-wrap: wrap;
`
const DivArrayProdutos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: end;
`

const BotaoAdicionar = styled.button`
    padding: 5px;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-weight: bold;
`

const ImagemCamisetas = styled.img`
    width: 60%
    
`

export class Home extends React.Component{

    state = {
        produtos: [
        {
            id: 1,
            name: "Universo 3D",
            value: 10.0,
            imageUrl: "https://ae01.alicdn.com/kf/H85d11f475e674f16888c75482f5f16fda/Espa-o-gal-xia-planeta-universo-3d-impresso-camiseta-das-senhoras-dos-homens-crian-as-c.jpg_q50.jpg",
            nomeAlt: "Camiseta Universo 3D",
            quantidade: 1
        },

        {
            id: 2,
            name: "Camiseta Galaxia",
            value: 12.90,
            imageUrl: "https://images-americanas.b2w.io/produtos/01/00/img/1685153/4/1685153447_1GG.jpg",
            nomeAlt: "Camiseta Galaxia",
            quantidade: 1
        },

        {
            id: 3,
            name: "Et Alienigena",
            value: 11.0,
            imageUrl: "https://img.elo7.com.br/product/zoom/1B47B9A/camiseta-camisa-et-alieigena-espaco-sideral-universo-hd-espaco.jpg",
            nomeAlt: "Camiseta Et Alienigena",
            quantidade: 1
        },

        {
            id: 4,
            name: "Astronalta",
            value: 20.0,
            imageUrl: "https://ae01.alicdn.com/kf/HTB1_DNZdED.BuNjt_ioq6AKEFXaG/Espa-o-circo-tshirt-masculino-louco-t-camisa-astronauta-topos-camisetas-festa-preto-manga-curta-roupas.jpg_q50.jpg",
            nomeAlt: "Camiseta Astronalta",
            quantidade: 1
        },

        {
            id: 5,
            name: "Astronalta na Lua",
            value: 25.0,
            imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_masculina_unissex_astronaut_swing_moon_space_nasa_astronauta_balanco_na_lua_espaco_preta_ev_79625_1_e2852b083521f284cff8a5beaa512de0.jpg",
            nomeAlt: "Camiseta Astronalta na Lua",
            quantidade: 1
        },

        {
            id: 6,
            name: "Nasa",
            value: 50.0,
            imageUrl: "https://cdn.dooca.store/996/products/camiseta-vaza-do-meu-espaco-preta_500x500+fill_ffffff.jpg?v=1595800120&webp=0",
            nomeAlt: "Camiseta Nasa",
            quantidade: 1
        },
        
        {
            id: 7,
            name: "Pug Astronalta",
            value: 40.0,
            imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_pug_cachorro_astronauta_nasa_espaco_preta_ev_77291_1_01632588664f2a84bf069dd265847847.jpg",
            nomeAlt: "Camiseta Pug Astronalta",
            quantidade: 1
        },

        {
            id: 8,
            name: "Astronalta no Universo",
            value: 30.0,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_829433-MLB31678321621_082019-O.jpg",
            nomeAlt: "Camiseta Astronalta no Universo",
            quantidade: 1
        },

        {
            id: 9,
            name: "Astronalta com skate",
            value: 55.0,
            imageUrl: "https://a-static.mlcdn.com.br/618x463/camiseta-astronauta-skatista-do-espaco-di-nuevo/dinuevo/43741/213181058b78fc14179c0683da5c30a3.jpg",
            nomeAlt: "Camiseta Astronalta com skate",
            quantidade: 1
        },

        {
            id: 10,
            name: "Gato Astronalta",
            value: 60.0,
            imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_gato_astronauta_nasa_espaco_preta_ev_77287_1_c184df988abc2a7cb1608805915c95e8.jpg",
            nomeAlt: "Camiseta Gato Astronalta",
            quantidade: 1
        },

        {
            id: 11,
            name: "Planetas e Estrelas",
            value: 75.0,
            imageUrl: "https://img.lojasrenner.com.br/item/549155763/zoom/1.jpg",
            nomeAlt: "Camiseta Planetas e Estrelas",
            quantidade: 1
        },

        {
            id: 12,
            name: "Espaço e tempo",
            value: 80.0,
            imageUrl: "https://mapadamasmorra.com.br/wp-content/uploads/2021/03/mockup-camiseta-feminino_preto_CUP00137.jpg",
            nomeAlt: "Camiseta Espaço e tempo",
            quantidade: 1
        },
    
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
        }).filter((produto) => {
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
            default:
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
                        <ImagemCamisetas src={produto.imageUrl} alt={produto.nomeAlt}/>
                        <spam>{produto.name}</spam>
                        <spam>R$ {produto.value.toFixed(2)}</spam>
                        <BotaoAdicionar onClick={() => this.adicionarProduto(produto.id, this.state.produtos)}>Adicionar ao carrinho</BotaoAdicionar>
                    </DivArrayProdutos>
                    })
                }
            </DivProdutos>  
        </div>
    }
}