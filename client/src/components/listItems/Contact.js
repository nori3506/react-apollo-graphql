import React from "react";
import { Card } from "antd";

const getStyles = () => ({
  card: { width: "500px" },
});

const Contact = (props) => {
  const { id, firstName, lastName } = props;
  const styles = getStyles();
  return (
    <Card style={styles.card}>
      {firstName}
      {lastName}
    </Card>
  );
};

export default Contact;
