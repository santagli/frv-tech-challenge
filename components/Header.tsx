import { Container, Flex, Title, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <header className={styles.header}>
      <Container size="xl">
        <Flex
          align="center"
          justify="center"
          py="md"
          style={{ position: "relative" }}
        >
          <Image
            src="/frvegatech_cover.jpeg"
            alt="Frávega Tech"
            width={180}
            height={180}
            priority={true}
            style={{
              width: "auto",
              height: "auto",
              objectFit: "contain",
              position: "absolute",
              left: 10,
            }}
          />

          <Title order={2} className={styles.headerTitle}>
            <span style={{ color: "var(--secondary)" }}>
              Challenge Técnico FE
            </span>
            <span style={{ color: "var(--dark-gray)" }}> |</span> Buscador
            Github
          </Title>

          {!isHome && (
            <Group gap="md" style={{ position: "absolute", right: 10 }}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </Group>
          )}
        </Flex>
      </Container>
    </header>
  );
}
