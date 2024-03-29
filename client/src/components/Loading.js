// This component represents a loading spinner that is displayed when an asynchronous operation is in progress
import React from 'react';

export default function Loading() {
  // The component renders a spinning circle
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-500 h-24 w-24"></div>
     
      {/* // The circle is styled with CSS, using keyframe animations to create the spinning effect */}
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
