import './BasicTestContainer.css';
import { IonText, IonButton } from '@ionic/react';
import React, { useState } from 'react';

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
    <div className="container">
      <IonText color="primary">{quote}</IonText>
      <div />
      <IonButton color="secondary" className="quoteButton" onClick={swapQuote}>
        Change quote
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
