# Hướng dẫn

## Cài đặt dependencies

Mở folder xhr trong terminal

```bash
npm install
```

## Khởi chạy server

```bash
npm start
```

## Yêu cầu

-   Có form nhập todo
-   Có list todo hoàn thành, chưa hoàn thành
-   Có nút thao tác sửa/xóa
-   Các thao tác thêm/sửa/xóa không reload trang
-   Có form tìm kiếm
-   Dữ liệu lưu vào db.json

## Các API

### GET

Chưa hoàn thành:

```
GET /todos?_status=false
```

Hoàn thành:

```
GET /todos?_status=true
STATUS 200
```

### POST

-   Title nhập từ form
-   Status mặc định là `false`
-   Created là time hiện tại `new Date().toLocaleString('vi')`

```
POST /todos
BODY {title, status, created}
STATUS 201
```

### PUT

-   Id lấy từ todo.id
-   Title nhập từ form/popup/...
-   Status nhập từ checkbox

```
PUT /todos/id
BODY {title, status, created}
STATUS 200
```

### DELETE

-   Id lấy từ todo.id

```
DELETE /todos/id
STATUS 200
```
