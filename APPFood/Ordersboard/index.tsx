import {Board, } from "./styles";
import { OrdersContainer } from "../Orders/styles";


export function Ordersboard (){

    return (

<Board>
            <header>
                <span>⏰</span>
                <strong>Fila de Espera</strong>
                <span>(1)</span>
            </header>
            <OrdersContainer>
                <button type="button">
                    <strong>Mesa 3</strong>
                    <span>2 itens</span>
                </button>
                <button type="button">
                    <strong>Mesa 4</strong>
                    <span>5 itens</span>
                </button>
            </OrdersContainer>
        </Board>
       
    )

}
