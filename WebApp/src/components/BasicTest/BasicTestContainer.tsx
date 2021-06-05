import { IonText } from '@ionic/react';
import React, { useState } from 'react';
import { BasicTestContainer, QuoteButton } from './BasicTestContainer.style';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const quotes = [
    'Georges is the best programmer',
    'Etien is the best programmer',
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const swapQuote = () => {
    setQuote(quotes.find((x) => x !== quote)!);
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
