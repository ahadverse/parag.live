import React, { useState, useEffect, useRef } from "react";

const InPagePushAd = () => {
  const [ads, setAds] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const autoCloseTimerRef = useRef(null);
  const showNextAdTimerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const adsRef = useRef([]);

  const adLink = process.env.NEXT_PUBLIC_OFFERLINK || "#";

  useEffect(() => {
    fetch("/ads.json")
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
        adsRef.current = data;
      })
      .catch(() => {});
  }, []);

  function clearAllTimers() {
    clearTimeout(autoCloseTimerRef.current);
    clearTimeout(showNextAdTimerRef.current);
  }

  function getRandomIndex() {
    const len = adsRef.current.length;
    if (len <= 1) return 0;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * len);
    } while (nextIndex === currentIndexRef.current);
    return nextIndex;
  }

  function showAd(index) {
    clearAllTimers();
    const len = adsRef.current.length;
    if (len === 0) return;

    currentIndexRef.current = index;
    setCurrentAdIndex(index);
    setIsVisible(true);

    autoCloseTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      showNextAdTimerRef.current = setTimeout(() => {
        showAd(getRandomIndex());
      }, 10000);
    }, 30000);
  }

  function closeAd(e) {
    e.preventDefault();
    e.stopPropagation();
    clearAllTimers();
    setIsVisible(false);

    showNextAdTimerRef.current = setTimeout(() => {
      showAd(getRandomIndex());
    }, 10000);
  }

  useEffect(() => {
    if (ads.length === 0) return;

    const initialDelayTimer = setTimeout(() => {
      showAd(Math.floor(Math.random() * adsRef.current.length));
    }, 3000);

    return () => {
      clearTimeout(initialDelayTimer);
      clearAllTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ads]);

  if (ads.length === 0) return null;

  const currentAd = ads[currentAdIndex];
  if (!currentAd) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-[10000] max-w-[340px] bg-white border border-gray-100 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={adLink}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-start gap-4'
      >
        <div className='relative w-16 h-16 flex-shrink-0 overflow-hidden'>
          <img
            src={currentAd.imageUrl}
            alt='Ad'
            className='w-full rounded-l-xl h-full'
          />
        </div>

        <div className='flex-1 pr-6'>
          <div className='flex justify-between items-start'>
            <h4 className='text-[15px] font-bold text-black leading-tight'>
              {currentAd.title}
            </h4>

            <button
              onClick={closeAd}
              className='absolute top-2 right-2 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors'
            >
              ✕
            </button>
          </div>
          <p className='text-[13px] text-gray-700 mt-1 leading-snug'>
            {currentAd.subTitle}
          </p>
        </div>

        <div className='absolute bottom-4 right-4 text-gray-200 pointer-events-none'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
          >
            <path d='M12 19V5m0 0l-7 7m7-7l7 7'></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default InPagePushAd;
