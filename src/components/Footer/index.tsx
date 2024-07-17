import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: '小刘的账本',
          title: '小刘的账本',
          href: 'localhost:8000',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
