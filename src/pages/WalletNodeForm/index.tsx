import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Upload,
  message,
  UploadProps,
  Cascader,
} from "antd";
const { Dragger } = Upload;
import moment from "moment";
import { InboxOutlined } from "@ant-design/icons";
import options from "./mock";
import { PageContainer } from "@ant-design/pro-components";
import { RecordWalletSave } from "@/services/recordwallet/api";

const MyForm: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [fileList, setFileList] = useState<any[]>([]);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = async (values: any) => {
    const files = values.files.map(
      (file: { response: { filename: { key: any; value: any } } }) =>
        `${file.response.filename.key},${file.response.filename.value}`
    );
    const request = {
      Type: 'pay',
      Amount: values.amount,
      Things: values.things.join(","),
      Time: moment(values.date).format("YYYY-MM-DD HH:mm:ss"),
      Files: files,
    };
    await RecordWalletSave(request)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleUploadChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);
  };
  const props: UploadProps = {
    name: "files",
    multiple: true,
    accept: "image/*",
    listType: "picture",
    action: "http://localhost:5045/Upload/upload",
    beforeUpload(file, fileList) {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error(`${file.name} 不是图片`);
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange(info: { file: any; fileList: any }) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success(`${info.file.name} 上传成功.`);
      } else if (status === "error") {
        message.error(`${info.file.name} 上传失败.`);
        return Upload.LIST_IGNORE;
      }
    },
  };
  const onChange = (value: any, selectedOptions: any) => {
    console.log(value, selectedOptions);
    const record = process.env;
    console.log("Environment variables:", record);
  };
  return (
    <PageContainer>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="things"
          label="事项"
          rules={[{ required: true, message: "请选择事项" }]}
        >
          <Cascader
            key={1}
            options={options}
            onChange={onChange}
            showSearch={true}
            placeholder="Please select"
          />
        </Form.Item>

        <Form.Item
          name="amount"
          label="金额"
          rules={[{ required: true, message: "请输入金额" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="files"
          label="附件"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽图片到这里进行上传</p>
            <p className="ant-upload-hint">支持单张或批量上传。</p>
          </Dragger>
        </Form.Item>

        <Form.Item
          name="time"
          label="时间"
          rules={[{ required: true, message: "请选择时间" }]}
        >
          <DatePicker value={moment()} showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default MyForm;
