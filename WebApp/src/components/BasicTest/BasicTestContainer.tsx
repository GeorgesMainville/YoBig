import { IonText, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const ExploreContainer: React.FC = () => {
  const quotes = ['etien_quote', 'georges_quote'];

  const [quote, setQuote] = useState(quotes[0]);

  const swapQuote = () => {
    if (quote === quotes[0]) setQuote(quotes[1]);
    else setQuote(quotes[0]);
  };

  return (
    <div className="container">
      <IonText data-testid="quote-display" color="primary">
        <FormattedMessage id={quote} />
      </IonText>
      <div />
      <IonButton
        data-testid="quote-button"
        color="secondary"
        className="quoteButton"
        onClick={swapQuote}
      >
        <FormattedMessage id="explore_container_change_quote" />
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
