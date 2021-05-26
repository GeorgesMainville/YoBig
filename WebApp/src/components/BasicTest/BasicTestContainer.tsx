import './BasicTestContainer.css';
import { IonText, IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const quotes = [
    'Georges is the best programmer',
    'Etien is the best programmer',
  ];

  const [quote, setQuote] = React.useState(quotes[0]);

  return (
    <div className="container">
      <IonText color="primary">{quote}</IonText>
      <div />
      <IonButton
        color="secondary"
        className="quoteButton"
        onClick={() => setQuote(quotes.find((x) => x !== quote)!)}
      >
        Change quote
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
