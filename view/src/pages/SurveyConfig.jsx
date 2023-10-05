import React, { useState } from 'react';
import NumericInput from '../components/NumericInput';
import FrequencyInput from '../components/FrequencyInput';
// import SurveyCodeGenerator from '../components/SurveyCodeGenerator';
// import FlowStep from '../components/FlowStep';
import Button from '../components/Button';


const SurveyConfig = () => {
  // const [js, setJs] = useState('');
  const [waitTime, setWaitTime] = useState(0);
  const [displayAfter, setDisplayAfter] = useState(0);
  const [frequencyValue, setFrequencyValue] = useState(0);
  const [frequencyUnit, setFrequencyUnit] = useState('minutes');

  // const [flowSteps, setFlowSteps] = useState([
  //   { step: 'step1', label: 'label1', question: 'Question 1' },
  // ]);

  const generateJsCode = () => {
    setJs(`console.log("Hello")`);
  };

  const handleWaitTimeChange = (e) => {
    setWaitTime(Number(e.target.value));
  };

  const handleDisplayAfterChange = (e) => {
    setDisplayAfter(Number(e.target.value));
  };

  const handleFrequencyValueChange = (e) => {
    setFrequencyValue(Number(e.target.value));
  };

  const handleFrequencyUnitChange = (e) => {
    setFrequencyUnit(e.target.value);
  };

  // const handleFlowStepChange = (index, key, value) => {
  //   const updatedFlowSteps = [...flowSteps];
  //   updatedFlowSteps[index][key] = value;
  //   setFlowSteps(updatedFlowSteps);
  // };

  // const handleAddFlowStep = () => {
  //   setFlowSteps([...flowSteps, { step: '', label: '', question: '' }]);
  // };

  // const handleDeleteFlowStep = (index) => {
  //   const updatedFlowSteps = flowSteps.filter((_, i) => i !== index);
  //   setFlowSteps(updatedFlowSteps);
  // };

  const handleConfig = () => {
    console.log('Config submitted:', {
      waitTime,
      displayAfter,
      frequencyValue,
      frequencyUnit,
    });
  }

  return (
    <>
      {/* <SurveyCodeGenerator onGenerateJsCode={generateJsCode} js={js} /> */}
      <h2 class="text-2xl font-semibold ">Setup Configuration</h2>
      <hr className="my-2" />
      <div className="my-4">
        <NumericInput label="Choose how much time to wait before showing the survey" unit="minutes" onChange={handleWaitTimeChange} value={waitTime} />
        <NumericInput label="Do not display the popup to the user after" unit="times" onChange={handleDisplayAfterChange} value={displayAfter} />
        <FrequencyInput
          label="Display frequency - every"
          onChangeValue={handleFrequencyValueChange}
          onChangeUnit={handleFrequencyUnitChange}
          value={frequencyValue}
          unit={frequencyUnit}
        />
      </div>
      <hr className="my-4" />
      <Button
        title="Save"
        onClick={handleConfig}
      />
      {/* <div className='my-4'>
        <p>Edit the flow steps</p>
        {flowSteps.map((step, index) => (
          <FlowStep
            key={index}
            index={index}
            step={step}
            onFlowStepChange={handleFlowStepChange}
            onAddFlowStep={handleAddFlowStep}
            onDeleteFlowStep={handleDeleteFlowStep}
            isLastStep={index === flowSteps.length - 1}
          />
        ))}
      </div> */}
    </>
  );
};

export default SurveyConfig;
