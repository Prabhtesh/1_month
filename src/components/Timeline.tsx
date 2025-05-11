import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import day1 from '../Assets/Day1.jpg';
import day2 from '../Assets/day2.jpg';
import smile from '../Assets/cute_smile.jpg';
import hug from "../Assets/Hug.jpg"
import dress from "../Assets/dress.jpg"
import hair from "../Assets/Hair.jpg"
import studySession from "../Assets/Study_session.jpg"
import sadFace from "../Assets/Sad_face.jpg"
import Angry from "../Assets/Angry.jpg"
import cuteSmile from "../Assets/cute_smile_3.jpg"
import bhalu from "../Assets/with_bhalu.jpg"
import wheelchair from "../Assets/5thMay.jpg"
import special from "../Assets/special.jpg"

gsap.registerPlugin(ScrollTrigger);

const memories = [
  { id: 1, image: day1, title: '11th April', description: 'Issey pehley bhi mai hand hold toh kiya hi tha, but iss din ki feeling kaafi alag thi' },
  { id: 2, image: day2, title: '16th April', description: 'The moment you kept your head on my shoulder, my heart skipped a beat.' },
  { id: 3, image: hug, title: '17th April', description: 'I will never forget this day, 4th floor, Faculty Cabin Area and that Hug 💖😘' },
  { id: 4, image: smile, title: 'Video Call', description: 'These cute video calls' },
  { id: 5, image: dress, title: 'My cutie', description: 'Iss photo ko kitni baar hi dekhun, I never get bored, cause har baar mujhe cute lagti ho..' },
  { id: 6, image: studySession, title: 'Study Session', description: 'The best study session till now, or breaks toh mai bhul hi nhi sakta 😅😘' },
  { id: 7, image: hair, title: 'Gorgeous Hair', description: 'yarr khule baal kitni acchi lagti ho, sachh me. My princess. Or jab tumhare baal aise aankho ke saamne aatein hain I want to fix them, and touch you cheeks, lips and ears in the process, I really love it.' },
  { id: 11, image: wheelchair, title: '5th May', description: 'Holding your small cute hands and looking into your beautifull eyess, evry such moment is really precious.' },
  { id: 8, image: sadFace, title: '3rd May', description: 'Yrr sad face mein bhi kitni Cute lagti ho, Mann karta hai abhi aake Zor se hug kar lun 🤗🤗.' },
  { id: 9, image: Angry, title: '7th May', description: 'Or jab dantati ho toh or cute lagti ho.., Ekdum cuteeeeeeeeeeeeee...., I want to get this scolding forever', },
  { id: 10, image: bhalu, title: 'Bhalu', description: 'The best SS ever with bhalu, Or yrr mujhe bhalu se baat karni hai, uski voice bahut cute hai, I love it' },
  { id: 12, image: cuteSmile, title: 'This wonderfull Smile', description: 'Jab aise dekhti ho na then I really melt, these expressions and view is really priceless' },
  { id: 13, image: special, title: 'Healing', 
    description: 'The best birthday ever, could have been more better but sorry, And all these love and care, I really love it, and I am really blessed to have someone like you, my princess' },

];

export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !horizontal) return;

    const totalScroll = horizontal.scrollWidth - window.innerWidth;

    gsap.to(horizontal, {
      x: () => `-${totalScroll}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${horizontal.scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (

    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] overflow-hidden bg-pink-50"
    > 
      <div
        ref={horizontalRef}
        className="flex w-max h-full items-center space-x-6 px-4 sm:px-10"
      >
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="w-[80vw] sm:w-[300px] md:w-[320px] h-[70vh] bg-white rounded-xl shadow-xl relative perspective-1000 flex-shrink-0"
          >
            <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 rounded-xl">
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-lg font-semibold">{memory.title}</h3>
                </div>
              </div>
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl p-6 text-white flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">{memory.title}</h3>
                <p>{memory.description}</p>
                <span className="text-sm mt-4 italic">Hover to flip back</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
