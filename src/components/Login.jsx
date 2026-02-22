import {
    Button,
    Image,
    Container,
    Paper,
    PasswordInput,
    Grid,
    TextInput,
    Alert,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons-react";
import imageMemolinkLogin from "../image/imageMemolinkLogin.png";

export default function LoginPage() {
    const form = useForm({
        initialValues: {
            email: "ron@gamil.com",
            password: "",
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length < 6 ? "Password should include at least 6 characters" : null,
        },
    });

    const { onLogin } = useAuth();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);

    async function handleLogin() {
        const validation = form.validate();
        if (validation.hasErrors) return;

        setLoading(true);
        setLoginError(null);

        const error = await onLogin(form.values.email, form.values.password);

        if (error) {
            setLoginError(error);
            setLoading(false);
        }
    }

    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid align="center" gutter={50} h={900}>
                    <Grid.Col span={4}>
                        <Paper withBorder shadow="md" p={30} radius="lg">

                            {loginError && (
                                <Alert
                                    icon={<IconAlertCircle size="1rem" />}
                                    color="red"
                                    variant="light"
                                    mb="md"
                                >
                                    {loginError.message}
                                </Alert>
                            )}

                            <TextInput
                                label="Email"
                                required
                                value={form.values.email}
                                onChange={(e) =>
                                    form.setFieldValue("email", e.target.value)
                                }
                                error={form.errors.email}
                                styles={{
                                    label: { textAlign: "left" }
                                }}
                            />

                            <PasswordInput
                                label="Password"
                                required
                                mt="md"
                                value={form.values.password}
                                onChange={(e) =>
                                    form.setFieldValue("password", e.target.value)
                                }
                                error={form.errors.password}
                            />

                            <Button
                                fullWidth
                                mt="xl"
                                size="md"
                                radius="xl"
                                loading={loading}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #1971c2, #4dabf7)",
                                }}
                                onClick={handleLogin}
                            >
                                Sign in →
                            </Button>

                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={8}>
                        <Image
                            radius="lg"
                            src={imageMemolinkLogin}
                            className={classes.image}
                            alt="Memolink"
                            h="50vh"
                            style={{
                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.15)",
                            }}
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}