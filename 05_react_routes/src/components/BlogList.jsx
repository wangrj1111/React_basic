// src/components/BlogList.jsx
import React, { useState } from 'react';
import blogs from '../data/blogs';
import { Link } from 'react-router-dom';
import { List, Typography, Pagination, Card } from 'antd';

const { Title, Text } = Typography;

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // 每页显示的博客数量

  // 计算当前页的博客列表
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 处理分页变化
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Title level={2}>Blog List</Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={false}
        dataSource={paginatedBlogs}
        renderItem={(blog) => (
          <List.Item key={blog.id}>
            <List.Item.Meta
              title={<Link to={`/blog/${blog.id}`}>{blog.title}</Link>}
              description={
                <Card>
                  <Text>{blog.content.slice(0, 100)}...</Text>
                </Card>
              }
            />
          </List.Item>
        )}
      />
      <Pagination
        style={{ marginTop: 20, textAlign: 'center' }}
        current={currentPage}
        total={blogs.length}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;