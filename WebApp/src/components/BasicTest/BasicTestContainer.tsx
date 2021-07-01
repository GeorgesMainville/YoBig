import { IonText } from '@ionic/react';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, QuoteButton } from './BasicTestContainer.style';

const BasicTestContainer: React.FC = () => {
  const quotes = ['quote.etien_quote', 'quote.georges_quote'];

  const [quote, setQuote] = useState(quotes[0]);

  const swapQuote = () => {
    if (quote === quotes[0]) setQuote(quotes[1]);
    else setQuote(quotes[0]);
  };

  return (
    <Container>
      <IonText data-testid="quote-display" color="primary">
        <FormattedMessage id={quote} />
      </IonText>
      <div />
      <QuoteButton
        data-testid="quote-button"
        color="secondary"
        className="quoteButton"
        onClick={swapQuote}
      >
        <FormattedMessage id="quote.change" />
      </QuoteButton>
    </Container>
  );
};

export default BasicTestContainer;
