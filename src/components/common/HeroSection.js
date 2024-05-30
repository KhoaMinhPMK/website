// src/components/common/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">AI tạo bài tập miễn phí✨</h1>
        <p className="text-lg mb-8">
          Xây dựng kĩ năng giải bài tập thông qua rèn luyện dạng bài.
        </p>
        <a href="/join" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded">
  <b>Thử ngay!</b>
</a>

      </div>
    </section>
  );
};

export default HeroSection;
