// src/components/common/CourseSection.js

import React from 'react';

const CourseSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Các tính năng nổi bật của chúng tôi</h2>
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Course 1" className="w-full"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">ChatBotAI</h3>
              <p>ChatBotAI tạo ra bài tập từ một dạng bài mẫu, hỗ trợ bạn trong việc luyện tập.</p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Course 2" className="w-full"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Những bài học sinh động</h3>
              <p>Những bài học sinh động thông qua những trò chơi, thu hút các bạn, tạo cảm giác hứng thú trong việc học.</p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Course 3" className="w-full"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Giao diện người dùng thân thiện</h3>
              <p>Giao diện thân thiện, dễ sử dụng, tiếp cận cho mọi người.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
