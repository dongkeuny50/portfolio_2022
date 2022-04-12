import styles from "../styles/Home.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Divider, Image, Text } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Image
        style={{ width: "100%" }}
        src="/bg.png"
        alt="Dan Abramov"
        objectFit="cover"
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Text
          style={{
            height: "200px",
            fontSize: "60px",
            textAlign: "center",
            color: "#f3f3f3",
          }}
        >
          YOO DONGKEUN
        </Text>
        <Divider
          style={{ width: "1000px", height: "4px", color: "white" }}
          orientation="horizontal"
        />
        <div>123</div>
        <div>123</div>
        <Divider orientation="horizontal" />
        <div>123</div>
      </div>
    </div>
  );
}
