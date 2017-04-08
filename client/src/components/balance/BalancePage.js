import React from 'react';

class BalancePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container balance">
                <h3>Saldo</h3>
                <div>
                    <table className="table-balance">
                        <tr>
                            <td></td>
                            <td className="text-bold">Valor</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Disponível</td>
                            <td>4567</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Bloqueado</td>
                            <td>4567</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Parcial</td>
                            <td>4567</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Futuro</td>
                            <td>4567</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Limite de saque</td>
                            <td>4567</td>
                        </tr>
                        <tr>
                            <td className="text-bold">Total investido</td>
                            <td>4567</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default BalancePage;