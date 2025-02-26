import { Alert, Button, Stack } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

const ErrorMessage = ({
  error,
  onRetry,
}: {
  error: Error;
  onRetry?: () => void;
}) => (
  <Stack align="center" justify="center" gap="xl" display="flex">
    <Alert
      icon={<IconAlertTriangle size={32} />}
      title="¡Oops! Algo salió mal"
      color="red"
      radius="md"
      w={300}
      fz="lg"
      p="xl"
    >
      {error?.message ||
        "Hubo un problema al cargar los datos. Por favor, intentá nuevamente."}
    </Alert>
    {!!onRetry && (
      <Button onClick={onRetry} color="red" radius="md" size="sm" fw="bold">
        Reintentar
      </Button>
    )}
  </Stack>
);

export default ErrorMessage;
