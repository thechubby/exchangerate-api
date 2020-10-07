import React from 'react';

export class Currency extends React.Component<{}, { data: undefined, result: string }> {
    constructor(props: any) {
        super(props);
        this.state = {data: undefined, result: ''};
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(): void {
        const url: string = 'https://v6.exchangerate-api.com/v6/475bc9b837c8f856fce85933/latest/USD'
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((value) => {
                this.setState({data: value})
            })
        // @ts-ignore
        this.setState({result: this.state.data.conversion_rates.EUR})
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
