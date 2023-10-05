// SurveyCodeGenerator.jsx
import React from 'react';
import Button from '../components/Button';
import TextAreaWithCopy from '../components/TextAreaWithCopy';

const SurveyCodeGenerator = ({ onGenerateJsCode, js }) => (
    <>
        <hr className="my-4" />
        <div className="my-4">
            <Button title={'Generate'} onClick={onGenerateJsCode} />
            <TextAreaWithCopy placeholder="JavaScript code...." value={js} />
        </div>
    </>
);

export default SurveyCodeGenerator;
