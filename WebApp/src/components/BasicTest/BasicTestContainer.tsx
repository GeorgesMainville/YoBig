import './BasicTestContainer.css';
import { IonText, IonButton } from '@ionic/react';
import React, { useCallback, useContext, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import LangSelector from '../../components/LangSelector';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {  
  return (
    <div className="container">
      <IonText color="primary">
        <FormattedMessage id="app_text" />
      </IonText>
    </div>
  );
};

export default ExploreContainer;
