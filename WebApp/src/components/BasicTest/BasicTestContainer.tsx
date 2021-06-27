import { IonText } from '@ionic/react';
import React, { useState } from 'react';
import { BasicTestContainer, QuoteButton } from './BasicTestContainer.style';

const ExploreContainer: React.FC = () => {
  const quotes = [
    'Georges is the best programmer',
    'Etien is the best programmer',
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const swapQuote = () => {
    if (quote === quotes[0]) setQuote(quotes[1]);
    else setQuote(quotes[0]);
  };

  return (
    <BasicTestContainer>
      <IonText color="primary">{quote}</IonText>
      <div />
      <QuoteButton
        color="secondary"
        className="quoteButton"
        onClick={swapQuote}
      >
        Change quote
      </QuoteButton>
    </BasicTestContainer>
  );
};

export default ExploreContainer;
