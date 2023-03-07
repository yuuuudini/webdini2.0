import { Button, Card, Layout } from "antd";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#141414",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button href="/test_page">Middle</Button>
    </div>
  );
}

Home.getLayout = (page) => {
  return <>{page}</>;
};
