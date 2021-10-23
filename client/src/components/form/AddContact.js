import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
const Addcontact = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      name="add-contact-form"
      layout="inline"
      size="large"
      style={{ marginBottom: "40px" }}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "please input your first name" }]}
      >
        <Input placeholder="John" />
      </Form.Item>

      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "please input your last name" }]}
      >
        <Input placeholder="Ropes" />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldTouched(true) ||
              form.getFieldError().filter(({ errors }) => errors.length)
            }
          >
            Add Contact
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Addcontact;
