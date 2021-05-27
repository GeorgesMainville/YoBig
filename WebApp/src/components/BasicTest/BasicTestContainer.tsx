import './BasicTestContainer.css';
import { IonText, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {

  const swapQuote = () => {
    // TODO: Set intl
  };

  return (
    <div className="container">
      <IonText color="primary">
        <FormattedMessage id='app_text' />
      </IonText>
      <div />
      <IonButton color="secondary" className="quoteButton" onClick={swapQuote}>
        Change quote
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
