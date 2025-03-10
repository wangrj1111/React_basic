// src/pages/BlogDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Avatar, Tag } from "antd";
import { HeartOutlined, EyeOutlined, StarOutlined } from "@ant-design/icons";
import blogs from "../data/blogs";

const { Title, Paragraph, Text } = Typography;

const BlogDetail = () => {
  const { blogIndex } = useParams();
  const blog = blogs[parseInt(blogIndex, 10)];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Card title="Blog Details" style={{ width: "100%" }}>
      <Title level={3}>{blog.title}</Title>
      <Paragraph>{blog.content}</Paragraph>
      <Avatar src={blog.avatar} alt={blog.title} size={64} />
      <Paragraph>
        <Text strong>Author:</Text> {blog.name}
      </Paragraph>
      <Paragraph style={{ display: "flex", alignItems: "center" }}>
        <HeartOutlined style={{ marginRight: 10 }} /> {blog.likes}
        <EyeOutlined style={{ marginRight: 10 }} /> {blog.views}
        <StarOutlined style={{ marginRight: 10 }} /> {blog.collections}
      </Paragraph>
      <Paragraph>
        <Text strong>Tags:</Text>
        {blog.tags.map((tag, index) => (
          <Tag key={index} color="blue" style={{ margin: 2 }}>
            {tag}
          </Tag>
        ))}
      </Paragraph>
      <Paragraph>
        <Text strong>Date:</Text> {blog.date}
      </Paragraph>
    </Card>
  );
};

export default BlogDetail;
