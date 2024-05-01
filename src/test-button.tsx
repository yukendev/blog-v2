import { Button } from "@mantine/core";

export const TestButton = (props: { title: string; onClick?: () => void }) => (
  <>
    <Button
      variant="filled"
      onClick={props.onClick}
      className="md:hover:bg-grape-0"
      mb="md"
    >
      {props.title}
    </Button>
  </>
);
