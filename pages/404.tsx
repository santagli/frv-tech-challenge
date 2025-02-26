import { Container, Title, Text } from "@mantine/core";

export default function NotFoundPage() {
  return (
    <Container style={{ textAlign: "center", padding: "80px 20px" }}>
      <Title
        order={1}
        style={{ fontSize: "3rem", fontWeight: 700, color: "var(--primary)" }}
      >
        404
      </Title>
      <Text fw={700} c={"var(--primary)"} style={{ fontSize: "1.5rem" }}>
        Ooops!
      </Text>
      <Text c={"var(--primary)"} style={{ fontSize: "1.3rem" }}>
        No hay nadie con ese nombre de usuario.
      </Text>
    </Container>
  );
}
