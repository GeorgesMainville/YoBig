import{ useContext } from 'react';
import LangContext from '../../contexts/LangContext';
import LangSelectorLogic from './LangSelectorLogic';

function LangSelectorHooks(): JSX.Element {

    const langContext = useContext(LangContext);

    return (
        <LangSelectorLogic langContext={langContext} />
    );
};

export default LangSelectorHooks;