import React from 'react';

// import pic from ;

const Profile: React.FC = () => {
  return (
    <div className="flex gap-6 items-center">
      <img
        src={require('../assets/akira.png')}
        alt="Profile"
        className="rounded-full w-24 h-24"
      />

      <div>
        <h1 className="text-2xl leading-9">
          Hey, <strong className="font-semibold">Gabriel</strong>
        </h1>

        <p className="text-base leading-7 text-subtitle">Earth, 19 years</p>
      </div>
    </div>
  );
};

export { Profile };
