import { Avatar, Button, Input, Space } from "antd";
import { Notification, SearchNormal } from "iconsax-react";
import { color } from "../constants/color";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          placeholder="Search..."
          style={{
            width: '50%',
            borderRadius: 100,
          }}
          size="large"
    
          prefix={<SearchNormal className="text-muted" size={20} />}
        />
      </div>
      <div className="col text-right">
        <Space>
            <Button type='text' icon={<Notification size={23} color={color.gray600} />} />
            <Avatar src={'https://anhanime.com/wp-content/uploads/2024/07/Anh-Sung-Jin-woo-8.jpg'} size={40} />
        </Space>
      </div>
    </div>
  );
};
export default HeaderComponent;
