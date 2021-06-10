import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import BasicTestContainer from './BasicTestContainer';
import { render } from '../../utils/tests-utils';
import { FormattedMessage, useIntl } from 'react-intl';

describe('BasicTestContainer', () => {
  it('ChangeQuote_WhenTextValueIsFirstValue_SetQuoteToSecondValue', async () => {
    // Arrange
    render(<BasicTestContainer />);

    // Act
    fireEvent.click(screen.getByTestId('quote-button'));

    // Assert
    const quote = await screen.findByTestId('quote-display');
    expect(quote).toHaveTextContent('Georges is the best programmer');
  });

  it('ChangeQuote_WhenClickingTwoTimes_RevertQuoteToFirstValue', async () => {
    // Arrange
    render(<BasicTestContainer />);

    // Act
    fireEvent.click(screen.getByTestId('quote-button'));
    fireEvent.click(screen.getByTestId('quote-button'));

    // Assert
    const quote = await screen.findByTestId('quote-display');
    expect(quote).toHaveTextContent('Etien is the best programmer');
  });
});
