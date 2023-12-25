import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import {router} from './Router';
import 'react-toastify/dist/ReactToastify.css';
import './Assets/css/custom.scss'
import {Provider} from 'react-redux';
import {store} from './Store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
        <ToastContainer/>
    </React.StrictMode>
)
