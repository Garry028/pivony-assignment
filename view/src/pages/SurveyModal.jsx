import React, { useState } from 'react';

const SurveyModal = () => {
  const [rating, setRating] = useState(null);
  const [showTextArea, setShowTextArea] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleNext = () => {
    setShowTextArea(true);
  };

  const handleSend = () => {
    console.log('Rating submitted:', rating);
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="p-4 border border-gray-300 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold">How likely are you to recommend our product/service?</p>
        <span className='bg-blue-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>

        </span>
      </div>
      <hr className="my-4" />
      <div>
        {
          !showTextArea &&
          <>
            <div className="flex items-center justify-between">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div
                  key={value}
                  className={`w-8 h-8 border rounded flex items-center justify-center cursor-pointer ${rating === value ? 'bg-purple-800 text-white' : 'bg-white text-gray-700'
                    }`}
                  onClick={() => handleRatingChange(value)}
                >
                  {value}
                </div>
              ))}
            </div>
            <div className='flex justify-between mt-3'>
              <span className="text-sm">Not likely</span>
              <span className="text-sm">Very likely</span>
            </div>
          </>
        }

      </div>
      {showTextArea ? (
        <div className="mt-4">
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            placeholder="Free Text Area..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
      ) : null}
      <hr className="my-4" />
      <button
        className={`bg-${showTextArea ? 'purple' : 'purple'}-800 text-white py-2 px-4 rounded  focus:outline-none focus:shadow-outline-blue`}
        onClick={showTextArea ? handleSend : handleNext}
      >
        {showTextArea ? 'Send' : 'Next'}
      </button>
    </div>
  );
};

export default SurveyModal;
