import { fireEvent, render, screen } from '@testing-library/react';
import BasicTestContainer from './BasicTestContainer';

describe('BasicTestContainer', () => {
  it('ChangeQuote_WhenTextValueIsFirstValue_SetQuoteToSecondValue', () => {
    // Arrange
    render(<BasicTestContainer />);
    const quoteText = screen.getByText('Georges is the best programmer');

    // Act
    fireEvent.click(screen.getByText('Change quote'));

    // Assert
    expect(quoteText).toHaveTextContent('Etien is the best programmer');
  });

  it('ChangeQuote_WhenClickingTwoTimes_RevertQuoteToFirstValue', () => {
    // Arrange
    render(<BasicTestContainer />);
    const quoteText = screen.getByText('Georges is the best programmer');

    // Act
    fireEvent.click(screen.getByText('Change quote'));
    fireEvent.click(screen.getByText('Change quote'));

    // Assert
    expect(quoteText).toHaveTextContent('Georges is the best programmer');
  });
});
