import './BasicTestContainer.css';
import { IonText, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const quotes = ['etien_quote', 'georges_quote'];

  const [quote, setQuote] = useState(quotes[0]);

  const swapQuote = () => {
    setQuote(quotes.find((x) => x !== quote)!);
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
