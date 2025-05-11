import React, { useState, useEffect } from 'react';
import { LockKeyhole, UnlockKeyhole, Key } from 'lucide-react';

export const SecretMessage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [hint, setHint] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const correctPassword = 'I love you prabhati';

  const hints = [
    'First word starts with "I"',
    'Second word starts with "l"',
    'Third word starts with "y"',
    'Fourth word starts with "p"',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('secret-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    setHint(hints[currentHintIndex]);
  }, [currentHintIndex]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length % 5 === 0) {
      setCurrentHintIndex((prevIndex) => (prevIndex + 1) % hints.length);
    }
  };

  const checkPassword = () => {
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setIsCorrect(true);
    } else {
      const inputElement = document.getElementById('password-input');
      if (inputElement) {
        inputElement.classList.add('shake');
        setTimeout(() => {
          inputElement.classList.remove('shake');
        }, 500);
      }
    }
  };

  return (
    <section
      id="secret-section"
      className="py-16 px-4 bg-gradient-to-b from-white to-pink-50 relative"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="mb-8 bg-pink-100 p-8 rounded-2xl shadow-inner">
          <div className="w-16 h-16 mx-auto mb-6 bg-pink-500 rounded-full flex items-center justify-center">
            <LockKeyhole className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">A Secret Message for You</h2>

          <p className="text-gray-600 mb-8">
            I've prepared something special just for you. Can you unlock it?
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              <Key className="mr-2 h-5 w-5" />
              Decode Secret Message
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {!isCorrect ? (
              <>
                <div className="text-center mb-6">
                  <LockKeyhole className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Enter the Secret Passcode</h3>
                  <p className="text-gray-600 mt-2">Unlock your special message</p>
                </div>

                <div className="mb-6">
                  <input
                    id="password-input"
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter passcode..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                    autoFocus
                  />
                  <p className="text-pink-500 mt-2 text-sm font-medium">{hint}</p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={checkPassword}
                    className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all"
                  >
                    Unlock
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center animate-fade-in">
                <UnlockKeyhole className="h-16 w-16 text-pink-500 mx-auto mb-6 animate-unlock" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Unlocked!</h3>

                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mb-6 max-h-[300px] overflow-y-auto text-left">
                  <p className="text-gray-700 italic whitespace-pre-wrap">
                    So thanks to dlca wale sir again I was able to confess you  and really it was the best decision i made.
                    And you are really good yrr like really cute and day by day my love for you is increasing like really yr, i love you sooooo much, like these words are really less to express it. I just want to meet you and hug you and kiss you and don't want to let you go.
                    <br />
                    I want to be with you forever, I want to love you forever.
                    <br />
                   I don't know how but I am attached to you soo much somehow, as if ki hum kitne samay se ek doosre ko jaante hon, I want to tell you everything 
                   every little things.<br />
                   <br />
                   <center>💖 Meri pyari prabhati 💖</center>
                   <br /> 
                   I want to be the reason for your happiness, take all your sadness support you and be with you in each and every situation in life. I Want to know everything that happens with you every small details. My love, you are really special to me, and I want to give you all my love, care and pamper you. 
                   So when I am not there, Please take a good care of yourself my girl, we will meet soon.."
                   <br />
                   <br />
                   <center>😘😘😘 I LOVE YOU 😘😘😘</center>
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
