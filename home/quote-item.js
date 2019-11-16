import Component from '../component.js';

class QuoteItem extends Component {

    renderHTML() {
        const quotes = this.props.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);

        const tempQuote = quotes[randomIndex];
        console.log(tempQuote);

        return /*html*/`
        <div class="quote-item">
        <h2 class="quote" ">${tempQuote.quote}</h2>
        </div>
    </div>
`;

    }
}

export default QuoteItem;