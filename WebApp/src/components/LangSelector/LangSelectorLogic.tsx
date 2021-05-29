import { IonSelect, IonSelectOption } from '@ionic/react';
import{ useCallback } from 'react';
import { LangContextProps } from '../../contexts/LangContext';

type LangSelectorLogicProps = {
    langContext : LangContextProps
}

function LangSelectorLogic({ langContext } : LangSelectorLogicProps): JSX.Element {

    const {
        setLang,
        lang,
        availableLangs,
    } = langContext;

    const handleLangChange = useCallback((newLang) => {
        if(setLang && lang !== newLang) {
          setLang(newLang);
        }
    }, [lang, setLang]);

    const listLangs = availableLangs?.map((lang) => (
        <IonSelectOption key={lang} value={lang}>{lang}</IonSelectOption>
    ));

    return (
        <IonSelect value={lang} onIonChange={({ detail }) => handleLangChange(detail.value) }>
            {listLangs}
        </IonSelect>
    );
};

export default LangSelectorLogic;