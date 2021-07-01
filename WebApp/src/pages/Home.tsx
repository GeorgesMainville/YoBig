import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import BasicTestContainer from '../components/BasicTest/BasicTestContainer';
import LanguageSelector from '../components/LanguageSelector';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <FormattedMessage id="app_title" />
          </IonTitle>
          <LanguageSelector />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              <FormattedMessage id="app_title" />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <BasicTestContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
