// FlowStep.jsx
import React from 'react';

const FlowStep = ({ index, step, onFlowStepChange, onDeleteFlowStep, onAddFlowStep, isLastStep }) => (
    <div className="flex items-center my-2 space-x-4">
        <span className="text-gray-800">{index + 1}.</span>
        <select
            className="border p-2 rounded"
            value={step.step}
            onChange={(e) => onFlowStepChange(index, 'step', e.target.value)}
        >
            <option value="step1">Step 1</option>
            <option value="step2">Step 2</option>
        </select>
        <div className="flex items-center">
            <label className="mr-2">Display</label>
            <select
                className="border p-2 rounded"
                value={step.label}
                onChange={(e) => onFlowStepChange(index, 'label', e.target.value)}
            >
                <option value="label1">Label 1</option>
                <option value="label2">Label 2</option>
            </select>
        </div>
        <div className="flex items-center">
            <label className="mr-2">The Question</label>
            <input
                type="text"
                className="border p-2 rounded"
                placeholder="Enter input"
                value={step.question}
                onChange={(e) => onFlowStepChange(index, 'question', e.target.value)}
            />
        </div>
        <div className="flex items-center space-x-2">
            <button
                className="bg-purple-800 text-white px-3 py-1 rounded"
                onClick={() => onDeleteFlowStep(index)}
            >
                X
            </button>
            {isLastStep && (
                <button
                    className="bg-purple-800 text-white px-3 py-1 rounded"
                    onClick={onAddFlowStep}
                >
                    +
                </button>
            )}
        </div>
    </div>
);

export default FlowStep;
