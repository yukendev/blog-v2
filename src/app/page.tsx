import { TestButton } from "@/test-button";

const mainStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

export default function Home() {
  return (
    <main style={mainStyle}>
      <TestButton title="hoge" />
    </main>
  );
}
