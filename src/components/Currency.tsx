import React from 'react';

interface StateInterface {
    result: string
}

export class Currency extends React.Component<any, StateInterface> {
    constructor(props: StateInterface) {
        super(props);
        this.state = { result: '' };
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    async onBtnClick() {
        const response = await fetch('https://v6.exchangerate-api.com/v6/475bc9b837c8f856fce85933/latest/USD');
        let data = await response.json();
        this.setState({result: data.conversion_rates.EUR});
    }

    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.onBtnClick}>Нажми на меня</button>
                <p>Курс Евро к Доллару: {this.state.result}</p>
            </div>
        );
    }
}
