import { IonButton } from '@ionic/react';
import styled from 'styled-components';

export const BasicTestContainer = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const QuoteButton = styled(IonButton)`
  margin-top: 10px;
`;
