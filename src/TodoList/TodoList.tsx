import React from 'react';
import { fetchWrappedData } from '../api/fetchTodo';

const resource = fetchWrappedData();

function ProductList() {
    const data = resource.getData();
    return (
        <div className='container'>
            {
                data.map((product) => <div className='row' key={product.id}>
                    <span className='title'>Title:{product.title}</span>
                    <span className='status'>Status:{product.completed.toString()}</span>
                </div>)
            }
        </div>
    );
}

export default ProductList;