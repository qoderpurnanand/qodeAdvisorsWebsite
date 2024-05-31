import React from 'react';
import investmentProcessImage from '../assets/investmentprocess.jpg'; // Replace with your image file

const InvestmentProcess = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-between py-12 inter-font">
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4">Investment Process</h2>
        <p className="text-gray-700 mb-4">
          Explain your investment process here. This is where you can provide details about your approach, strategies, and methodologies for investing.
        </p>
        <p className="text-gray-700">
          You can add more paragraphs or additional content related to your investment process as needed.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src={investmentProcessImage}
          alt="Investment Process"
          className="w-2/3 m-auto h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default InvestmentProcess;