import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-white py-20">

      <div className="container mx-auto text-center mt-8">
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="text-xl font-bold">Thư viện bài đa dạng</h3>
            <p>Đáp ứng được nhu cầu của người dùng.</p>
          </div>
          <div className="max-w-xs">
            <div className="text-4xl mb-2">👨‍🏫</div>
            <h3 className="text-xl font-bold">Những hoạt động thú vị</h3>
            <p>Sự sáng tạo trong học tập thông qua các trò chơi.</p>
          </div>
          <div className="max-w-xs">
            <div className="text-4xl mb-2">🕑</div>
            <h3 className="text-xl font-bold">Tiết kiệm thời gian</h3>
            <p>Bạn có thể học mọi lúc mọi nơi, chỉ cần internet.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        {/* Thêm video vào đây */}
        <iframe 
              width="80%" 
              height="600" 
              src="https://www.youtube.com/embed/1MZzmljzGGc" 
              title="Embedded Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
        {/* Kết thúc video */}
      </div>
    </section>
  );
};

export default FeatureSection;
