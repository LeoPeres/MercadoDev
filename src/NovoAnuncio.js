import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'

class NovoAnuncio extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const file = this.refs.foto.files[0]
        const { name } = file
        const ref = storage.ref(name)
        ref.put(file).then(img=>{
            const anuncio = {
                nome: this.refs.nome.value,
                descricao: this.refs.descricao.value,
                preco: this.refs.preco.value,
                telefone: this.refs.telefone.value,
                vendedor: this.refs.vendedor.value,
                categoria: this.refs.categoria.value,
                foto:img.metadata.downloadURLs[0]
            }
            base.push('anuncios', {
                data: anuncio
            }).then(()=>{
                this.setState({success:true})
            })
    
        })
    }

    render(){
        return (
            <div>
                {this.state.success && <Redirect to='/' />}
                <HeaderInterno />
                <div className='container' style={{paddingTop:'120px'}}>
                    <h1>Novo Anuncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id='foto' ref='foto' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='categorias'>Categorias</label>
                            <select className='form-control' id='categorias' ref='categoria'>
                                {this.props.categorias.map((cat) => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' placeholder='nome' id='nome' ref='nome' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' placeholder='Descrição' id='descricao' ref='descricao' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Preço</label>
                            <input type='text' className='form-control' placeholder='Preço' id='preco' ref='preco' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' placeholder='Telefone' id='telefone' ref='telefone' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Vendedor</label>
                            <input type='text' className='form-control' placeholder='Vendedor' id='vendedor' ref='vendedor' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Salvar anuncio</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NovoAnuncio