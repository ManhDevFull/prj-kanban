import { Button, Space, Table, Typography } from "antd";
import { ColumnProps } from "antd/es/table";
import { Sort } from "iconsax-react";
import { color } from "../constants/color";
import { useState } from "react";
import { ToogleSupplier } from "../modals";
const { Title } = Typography;
const SuppliersScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const columns: ColumnProps<any>[] = [];
  return (
    <div>
      <Table
        dataSource={[]}
        columns={columns}
        title={() => (
          <div className="row">
            <div className="col">
              <Title level={5}>Suppliers</Title>
            </div>
            <div className="col text-right">
                <Space>
                    <Button type="primary" onClick={()=> setIsVisible(true)}>Add Supplier</Button>
                    <Button icon={<Sort size={20} color={color.gray600} />}>Filters</Button>
                    <Button></Button>
                </Space>
            </div>
          </div>
        )}
      />
      <ToogleSupplier visible={isVisible} onClose={()=>setIsVisible(false)} onAddNew={val => console.log(val)} />
    </div>
  );
};
export default SuppliersScreen;
