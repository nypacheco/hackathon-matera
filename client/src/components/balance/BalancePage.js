import React from 'react';

class BalancePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container detail">
                <h3>Saldo</h3>
                <div className="jumbotron-detail">
                    <div className="jumbotron">
                        <span>Disponível:</span>
                        <div className="text-right">
                            <h2>R$234,00</h2>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <span>Bloqueado:</span>
                        <div className="text-right">
                            <h2>R$0,00</h2>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <span>Parcial:</span>
                        <div className="text-right">
                            <h2>R$100,00</h2>
                        </div>
                    </div>
                </div>
                <div className="jumbotron-detail">
                    <div className="jumbotron">
                        <span>Futuro:</span>
                        <div className="text-right">
                            <h2>R$0,00</h2>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <span>Limite de saque:</span>
                        <div className="text-right">
                            <h2>R$2000,00</h2>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <span>Total investido:</span>
                        <div className="text-right">
                            <h2>R$540,00</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BalancePage;