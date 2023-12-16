import React from "react";
import {  Flex, Spin } from "antd";
import './Spin.css'

export const LodingSpinner = () => {
  return (
    <>
      <Flex gap="small" vertical>
        <Flex gap="large">
          <Spin tip="Loading" fullscreen >
            <div className="content" />
          </Spin>
        </Flex>
      </Flex>
    </>
  );
};
