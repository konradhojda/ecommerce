import React from 'react';

interface IProps {
  variant?: string;
}

const MessageBox: React.FC<IProps> = ({variant, children}) => (
    <div className={`alert alert-${variant || "info"}`}>
      {children}
    </div>
)

export default MessageBox;
