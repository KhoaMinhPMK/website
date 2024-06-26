# website
# LearnPage

LearnPage là một dự án học tập tích hợp trò chơi. Dự án này sử dụng React và nhiều công cụ khác để phát triển ứng dụng web.

## Giới thiệu

Dự án này được tạo ra để giúp người dùng học hỏi thông qua việc tương tác với một trò chơi tích hợp. Các công nghệ và công cụ hiện đại như Webpack, Babel, Tailwind CSS, và Jest được sử dụng trong dự án này.

## Cài đặt web

Để cài đặt và chạy dự án, bạn cần có Node.js và npm (hoặc yarn) cài đặt trên máy tính của bạn.

1. Clone repository về máy tính của bạn:
    ```sh
    git clone https://github.com/KhoaMinhPMK/website
    cd learnpage
    ```

2. Cài đặt các dependencies:
    ```sh
    npm install
    ```
## Cài đặt server
    ```sh
    cd backend
    npm install
    ```
## Scripts

Dưới đây là các lệnh npm scripts có sẵn trong dự án thư mục learpage:

- `start`: Khởi động server phát triển và mở trình duyệt
    ```sh
    npm start
    ```

- `build`: Build dự án ở chế độ production
    ```sh
    npm run build
    ```

- `test`: Chạy các bài kiểm tra với Jest
    ```sh
    npm test
    ```
- `server`: Chạy server
    ```sh
    cd backend
    npm run server
    ```
## Các Công nghệ Sử dụng

- **React**: Thư viện JavaScript để xây dựng giao diện người dùng
- **React DOM**: Kết xuất các thành phần React vào DOM
- **React Router DOM**: Quản lý routing trong ứng dụng React
- **Axios**: Thư viện HTTP client dựa trên Promise
- **Webpack**: Bộ công cụ để bundle các module JavaScript
- **Babel**: Trình biên dịch JavaScript
- **Tailwind CSS**: Framework CSS tiện ích
- **Jest**: Framework kiểm tra JavaScript
- **PostCSS**: Công cụ xử lý CSS
- **Autoprefixer**: Plugin PostCSS tự động thêm các tiền tố CSS

## Cấu trúc Dự án

- `src/`: Thư mục chứa mã nguồn của ứng dụng
- `public/`: Thư mục chứa các tệp tĩnh
- `backend/`: Thư mục chứa mã nguồn phía backend 
- `node_modules/`: Thư mục chứa các thư viện được cài đặt thông qua npm
- `package.json`: Tệp cấu hình dự án và quản lý dependencies



