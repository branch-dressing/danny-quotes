import Component from '../component.js';
import Header from '../common/header.js';
import QuoteItem from './quote-item.js';
import quotes from '../quotes-api.js';

class App extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());
        console.log(quotes[0]);

        const quoteSection = el.querySelector('.quote-section');
        const quoteItem = new QuoteItem({ quotes });
        quoteSection.appendChild(quoteItem.renderDOM());

        
    }

    renderHTML() {
        return /*html*/`
            <div>
                <div class="quote-section">
                </div>
            <div>`;
    }
}

export default App;