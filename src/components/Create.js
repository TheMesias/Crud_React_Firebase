import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
    const [ idproducto, setIdproducto ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ preciocompra, setPreciocompra ] = useState(0)
    const [ precioventa, setPrecioventa ] = useState(0)
    const [ inventarioinicial, setInventarioinicial ] = useState(0)
  const [ stock, setStock ] = useState(0)
  const [ fp, setFp ] = useState('')
  const navigate = useNavigate()

  const productsCollection = collection(db, "products")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { idproducto:idproducto , description: description, preciocompra:preciocompra, precioventa: precioventa, inventarioinicial:inventarioinicial, stock: stock, fp:fp } )
    navigate('/')
    //console.log(e.target[0].value)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Crear Producto</h1>
                 <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Id del Producto</label>
                        <input
                            value={idproducto}
                            onChange={ (e) => setIdproducto(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Nombre del Producto</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Precio de Compra</label>
                        <input
                            value={preciocompra}
                            onChange={ (e) => setPreciocompra(e.target.value)} 
                            type="number"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Precio de Venta</label>
                        <input
                            value={precioventa}
                            onChange={ (e) => setPrecioventa(e.target.value)} 
                            type="number"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Inventario Inicial</label>
                        <input
                            value={inventarioinicial}
                            onChange={ (e)=> setInventarioinicial(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e)=> setStock(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Familia o Proveedor</label>
                        <input
                            value={fp}
                            onChange={ (e)=> setFp(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create