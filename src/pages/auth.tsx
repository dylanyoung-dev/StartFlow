import { useAuth } from "@/components/auth/AuthInfo";
import GithubAuthProvider from "@/components/firebase/auth/GithubProvider";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { signInWithRedirect } from "@firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

interface AuthPageProps {}

const AuthPage: NextPage<AuthPageProps> = () => {
  const router = useRouter();
  const authContext = useAuth();

  useEffect(() => {
    const user = authContext.auth?.currentUser;

    if (user) {
      router.push("/");
    }
  }, [authContext.auth]);

  const onLoginGithub = async () => {
    if (authContext.auth) {
      await signInWithRedirect(authContext.auth, GithubAuthProvider);
    }
  };
  return (
    <>
      <Container maxW="md" py={{ base: "8", md: "12" }}>
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            StartFlow.app
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
          </Stack>
          <Stack spacing="6">
            <Button
              variant="outline"
              leftIcon={<FaGithub />}
              onClick={() => onLoginGithub()}
            >
              Continue with Github
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default AuthPage;
